"use server";

import { getServerSession } from "next-auth";

import { db } from "./drizzle";
import { resumes } from "./schema";
import { buildNextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";
import { cache } from "react";
import { ResumeDto } from "./types";
import { eq } from "drizzle-orm";

export const createResume = async (title: string) => {
  const session = await getServerSession(buildNextAuthOptions);

  const userId = session?.user?.id;
  const newResume = await db
    .insert(resumes)
    .values({ title, userId })
    .returning();

  revalidatePath("/dashboard/resumes");

  return newResume[0];
};

export const getResumeById = cache(
  async (id: string): Promise<ResumeDto | undefined> => {
    const session = await getServerSession(buildNextAuthOptions);

    const userId = session?.user?.id;

    if (!userId) return undefined;

    const resume = await db.query.resumes.findFirst({
      where: eq(resumes.id, id),
    });

    return resume;
  }
);

export const updateResumeData = async (id: string, data: ResumeData) => {
  const session = await getServerSession(buildNextAuthOptions);

  const userId = session?.user?.id;

  if (!userId) throw new Error("Usuário não encontrado.");

  const updatedResume = await db
    .update(resumes)
    .set({ data, updatedAt: new Date() })
    .where(eq(resumes.id, id))
    .returning();

  revalidatePath("/dashboard/resumes");

  return updatedResume[0];
};
