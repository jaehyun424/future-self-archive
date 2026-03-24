import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { getFullPapers } from "@/lib/content";
import { notFound } from "next/navigation";
import VaultReaderClient from "./VaultReaderClient";

export default async function VaultPaperPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getSession();
  if (!session.isOwner) redirect("/login");

  const { id } = await params;
  const papers = getFullPapers();
  const paperIndex = papers.findIndex((p) => p.id === id);
  if (paperIndex === -1) notFound();

  const paper = papers[paperIndex];
  const prevPaper = paperIndex > 0 ? papers[paperIndex - 1] : null;
  const nextPaper = paperIndex < papers.length - 1 ? papers[paperIndex + 1] : null;

  return (
    <VaultReaderClient
      paper={paper}
      prevPaper={prevPaper}
      nextPaper={nextPaper}
    />
  );
}
