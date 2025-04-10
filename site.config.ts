type SiteConfig = {
  site_domain: string;
  site_name: string;
  site_description: string;
  google_tag_manager_id: string;
  keywords: string[];
};

export const siteConfig: SiteConfig = {
  site_name: "Modelo de currÍculo",
  site_description:
    "Crie seu currículo profissional online de forma rápida e gratuita. Utilize modelos prontos e destaque-se no mercado de trabalho com facilidade.",
  site_domain: process.env.APP_URL!,
  google_tag_manager_id: "G-3T02YHEQCF",
  keywords: [
    "modelo de currículo",
    "currículo pronto",
    "criar currículo online",
    "currículo gratuito",
    "currículo profissional",
    "modelo de currículo 2025",
    "currículo para primeiro emprego",
    "currículo simples",
    "currículo para baixar",
    "currículo em PDF",
  ],
};
