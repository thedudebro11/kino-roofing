import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Kino Roofing Contact Form <onboarding@resend.dev>", // Use Resend's verified sender or your own domain
      to: "thedevguy0101@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
