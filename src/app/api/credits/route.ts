import { getUserCredits } from "@/db/queries";

export const GET = async () => {
  const credits = await getUserCredits();

  await new Promise((resolve) => setTimeout(resolve, 10000));

  return Response.json({ credits });
};
