import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password !== process.env.OWNER_PASSWORD) {
    return NextResponse.json({ error: "비밀번호가 틀렸습니다." }, { status: 401 });
  }

  const session = await getSession();
  session.isOwner = true;
  await session.save();

  return NextResponse.json({ success: true });
}
