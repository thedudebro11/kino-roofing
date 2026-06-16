import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PrismaClient } from "@prisma/client";

// Lazily constructed so a missing RESEND_API_KEY only fails a request at
// runtime instead of crashing the build (Next.js imports this module during
// "Collecting page data", which used to run `new Resend(undefined)` and
// throw before any request was ever served).
let prisma: PrismaClient | undefined;
let resend: Resend | undefined;

function getPrisma() {
  if (!prisma) prisma = new PrismaClient();
  return prisma;
}

function getResend() {
  if (!resend) resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
}

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    // 1. Save to database
    const submission = await getPrisma().contactSubmission.create({
      data: {
        name,
        email,
        message,
      },
    });

    // 2. Send email notification
    const emailResult = await getResend().emails.send({
      from: "Kino Roofing Contact Form <onboarding@resend.dev>",
      to: "thedevguy0101@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
    });

    return NextResponse.json({ success: true, submission, emailResult });
  } catch (error) {
    console.error("❌ Error handling contact submission:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
