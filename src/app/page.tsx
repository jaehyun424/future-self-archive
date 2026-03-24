import { getPublicPapers } from "@/lib/content";
import CoverClient from "./CoverClient";

export default function CoverPage() {
  const papers = getPublicPapers();
  return <CoverClient papers={papers} />;
}
