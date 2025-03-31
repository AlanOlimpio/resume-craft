import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

import SessionWrapper from "@/components/session-provider";
import { getServerSession } from "next-auth";

import { ClientProviders } from "@/components/shared/client-providers";
import { buildNextAuthOptions } from "@/lib/auth";

const fontSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });
const fontTitle = Nunito({ subsets: ["latin"], variable: "--font-title" });

export const metadata: Metadata = {
  title: "ResumeCraft",
  icons: {
    icon: "/favicon.svg",
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
