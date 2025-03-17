"use client";
import ResumePage from "@/components/pages/dashboard/resume";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function DashboardResumePage() {
  const { data: session } = useSession();

  if (!session) {
    redirect("/auth/login");
  }

  return <ResumePage />;
}
