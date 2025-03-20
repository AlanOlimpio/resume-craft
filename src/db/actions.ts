"use server";

import { getServerSession } from "next-auth";

import { db } from "./drizzle";
import { resumes } from "./schema";
import { buildNextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

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
