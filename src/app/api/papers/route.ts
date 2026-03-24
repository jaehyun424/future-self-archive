import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { getPublicPapers, getFullPapers } from "@/lib/content";

export async function GET() {
  const session = await getSession();
  const papers = session.isOwner ? getFullPapers() : getPublicPapers();

  return NextResponse.json(papers);
}
