import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const result = eval(body.expression);
  return NextResponse.json({ result });
}
