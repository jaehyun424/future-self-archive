import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { getFullPapers } from "@/lib/content";
import VaultDashboardClient from "./VaultDashboardClient";

export default async function VaultPage() {
  const session = await getSession();
  if (!session.isOwner) redirect("/login");

  const papers = getFullPapers();
  return <VaultDashboardClient papers={papers} />;
}
