// app/api/submissions/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const submissions = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(submissions);
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        message,
        tag: 'unassigned', // Optional, if your schema has default already
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('POST /api/submissions error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
