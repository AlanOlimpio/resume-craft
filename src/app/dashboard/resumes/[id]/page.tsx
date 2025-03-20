import { buildNextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import ResumePage from "@/components/pages/dashboard/resume";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardResumePage() {
  const session = await getServerSession(buildNextAuthOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return <ResumePage />;
}
