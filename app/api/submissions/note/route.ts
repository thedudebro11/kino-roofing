// app/api/submissions/note/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { id, note } = await req.json();

    if (!id || typeof note !== 'string') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const updated = await prisma.contactSubmission.update({
      where: { id },
      data: { note },
    });

    return NextResponse.json({ success: true, updated });
  } catch (err) {
    console.error('Note update error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
