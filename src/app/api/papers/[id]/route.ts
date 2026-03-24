import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { getPublicPapers, getFullPapers } from "@/lib/content";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const session = await getSession();
  const papers = session.isOwner ? getFullPapers() : getPublicPapers();
  const paper = papers.find((p) => p.id === id);

  if (!paper) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(paper);
}
