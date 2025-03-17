import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "sonner";
import SessionWrapper from "@/components/session-provider";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "./api/auth/[...nextauth]/route";

const fontSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });
const fontTitle = Nunito({ subsets: ["latin"], variable: "--font-title" });

export const metadata: Metadata = {
  title: "ResumeCraft",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionWrapper session={session}>
            {children}
            <Toaster />
          </SessionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
