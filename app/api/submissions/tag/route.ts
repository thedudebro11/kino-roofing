import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { id, tag } = await req.json();

  const updated = await prisma.contactSubmission.update({
    where: { id },
    data: { tag },
  });

  return NextResponse.json({ success: true, updated });
}
