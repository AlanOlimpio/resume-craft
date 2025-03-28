import { api } from "@/lib/axios";
import Stripe from "stripe";

type ResumeDownloadPayload = {
  html: string;
  structure: ResumeStructureData;
};

async function getResumeUrl(payload: ResumeDownloadPayload) {
  const { data } = await api.post("/resume/download", payload, {
    responseType: "blob",
  });

  return window.URL.createObjectURL(data);
}

type AIGenerationPayload = {
  jobTitle: string;
  jobDescription: string;
};

async function generateContentForJob(payload: AIGenerationPayload) {
  const { data } = await api.post("/generate/job-title", payload);

  return data;
}

async function fixContent(content: ResumeContentData) {
  const { data } = await api.post("/generate/fix-content", { content });

  return data;
}

type AiTranslationPayload = {
  content: ResumeContentData;
  language: string;
};

async function translate(payload: AiTranslationPayload) {
  const { data } = await api.post("/generate/translate", payload);

  return data;
}

const getCredits = async () => {
  const { data } = await api.get<{ credits: number }>("/credits");
  return data?.credits ?? 0;
};

const getPackages = async () => {
  const { data } = await api.get<Stripe.Price[]>("/credits/packages");
  return data;
};

const getCheckoutUrl = async (priceId: string, currentPathname: string) => {
  const { data } = await api.post<{ url: string }>(
    "/credits/packages/checkout",
    { priceId, currentPathname }
  );
  console.log(data);
  return data.url;
};

export const ApiService = {
  getResumeUrl,
  generateContentForJob,
  fixContent,
  translate,
  getCredits,
  getPackages,
  getCheckoutUrl,
};
