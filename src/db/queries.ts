import { cache } from "react";
import { db } from "./drizzle";
import { eq } from "drizzle-orm";
import { resumes, users } from "./schema";
import { ResumeDto } from "./types";
import { buildNextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const getResumes = cache(async (): Promise<ResumeDto[]> => {
  const session = await getServerSession(buildNextAuthOptions);

  const userId = session?.user?.id;

  if (!userId) return [];

  const userResumes = await db.query.resumes.findMany({
    where: eq(resumes.userId, userId),
  });

  return userResumes;
});
