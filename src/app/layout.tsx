import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Nunito, Nunito_Sans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

import SessionWrapper from "@/components/session-provider";
import { getServerSession } from "next-auth";

import { ClientProviders } from "@/components/shared/client-providers";
import { buildNextAuthOptions } from "@/lib/auth";
import { siteConfig } from "../../site.config";

const fontSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });
const fontTitle = Nunito({ subsets: ["latin"], variable: "--font-title" });

export const metadata: Metadata = {
  title: siteConfig.site_name,
  icons: {
    icon: "/favicon.svg",
  },
  description: siteConfig.site_description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.site_domain),
  alternates: {
    canonical: "./",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(buildNextAuthOptions);
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <GoogleAnalytics gaId={siteConfig.google_tag_manager_id} />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontTitle.variable,
          fontSans.variable
        )}
      >
        <SessionWrapper session={session}>
          <ClientProviders>{children}</ClientProviders>
        </SessionWrapper>
      </body>
    </html>
  );
}
