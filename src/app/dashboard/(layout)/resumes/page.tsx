import { getServerSession } from "next-auth";
import { ResumesList } from "./resumes-list";
import { redirect } from "next/navigation";
import { buildNextAuthOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function DashboardResumesPage() {
  const session = await getServerSession(buildNextAuthOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <>
      <h1 className="text-4xl font-title font-bold mb-6">Currículos</h1>
      <ResumesList />
    </>
  );
}
