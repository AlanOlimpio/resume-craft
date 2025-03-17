"use client";
import { ResumesList } from "./resumes-list";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function DashboardResumesPage() {
  const { data: session } = useSession();

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
