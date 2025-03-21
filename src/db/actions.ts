"use server";

import { getServerSession } from "next-auth";

import { db } from "./drizzle";
import { resumes } from "./schema";
import { buildNextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

const getUserIdOrThrow = async () => {
  const session = await getServerSession(buildNextAuthOptions);

  const userId = session?.user?.id;

  if (!userId) throw new Error("Usuário não encontrado.");

  return userId;
};

export const createResume = async (title: string) => {
  const userId = await getUserIdOrThrow();

  const newResume = await db
    .insert(resumes)
    .values({ title, userId })
    .returning();

  revalidatePath("/dashboard/resumes");

  return newResume[0];
};

export const updateResumeData = async (id: string, data: ResumeData) => {
  await getUserIdOrThrow();

  const updatedResume = await db
    .update(resumes)
    .set({ data, updatedAt: new Date() })
    .where(eq(resumes.id, id))
    .returning();

  revalidatePath("/dashboard/resumes");

  return updatedResume[0];
};

export const deleteResume = async (id: string) => {
  const userId = await getUserIdOrThrow();

  const resume = await db.query.resumes.findFirst({
    where: eq(resumes.id, id),
  });

  if (!resume) throw new Error("Currículo não encontrado.");
  if (resume.userId !== userId) throw new Error("Usuário não autorizado.");

  await db.delete(resumes).where(eq(resumes.id, id)).execute();

  revalidatePath("/dashboard/resumes");
};
