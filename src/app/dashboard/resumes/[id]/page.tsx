import ResumePage from "@/components/pages/dashboard/resume";
import { getResumeById } from "@/db/queries";
import { buildNextAuthOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";

type DashboardResumePageProps = {
  params: { id: string };
};

export default async function DashboardResumePage({
  params,
}: DashboardResumePageProps) {
  const session = await getServerSession(buildNextAuthOptions);

  if (!session) {
    redirect("/auth/login");
  }

  const resumeId = params.id;

  const resume = await getResumeById(resumeId);

  if (!resume) return notFound();

  const initialData = resume.data as ResumeData;

  return (
    <ResumePage
      title={resume.title}
      initialData={initialData}
      user={session?.user}
    />
  );
}
