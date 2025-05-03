import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    // 1. Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        message,
      },
    });

    // 2. Send email notification
    const emailResult = await resend.emails.send({
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
