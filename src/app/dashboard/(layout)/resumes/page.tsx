import { getServerSession } from "next-auth";
import { ResumesList } from "./resumes-list";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { ResumesListSkeleton } from "./resumes-list/skeleton";
import { buildNextAuthOptions } from "@/lib/auth";

export default async function DashboardResumesPage() {
  const session = await getServerSession(buildNextAuthOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <>
      <h1 className="text-4xl font-title font-bold mb-6">Currículos</h1>
      <Suspense fallback={<ResumesListSkeleton />}>
        <ResumesList />
      </Suspense>
    </>
  );
}
