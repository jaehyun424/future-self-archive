import { getPublicPapers } from "@/lib/content";
import { notFound } from "next/navigation";
import PaperReaderClient from "./PaperReaderClient";

export function generateStaticParams() {
  return getPublicPapers().map((p) => ({ id: p.id }));
}

export default async function PaperPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const papers = getPublicPapers();
  const paperIndex = papers.findIndex((p) => p.id === id);
  if (paperIndex === -1) notFound();

  const paper = papers[paperIndex];
  const prevPaper = paperIndex > 0 ? papers[paperIndex - 1] : null;
  const nextPaper = paperIndex < papers.length - 1 ? papers[paperIndex + 1] : null;

  return (
    <PaperReaderClient
      paper={paper}
      prevPaper={prevPaper}
      nextPaper={nextPaper}
    />
  );
}
