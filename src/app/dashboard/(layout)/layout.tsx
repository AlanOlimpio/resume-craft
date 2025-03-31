"use client";
import { ReactNode } from "react";
import Logo from "@/assets/logo.svg";
import { NavItems } from "@/components/pages/dashboard/nav-items";
import { UserDropdown } from "@/components/pages/dashboard/user-dropdown";
import { ModeToggle } from "@/components/shared/theme-toggle";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { data: session } = useSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="w-full h-screen overflow-hidden grid grid-cols-[300px,1fr]">
      <aside className="w-full h-full flex flex-col items-center border-r  border-muted">
        <div className="w-full p-6 bottom-b border-muted">
          <Logo className="max-w-[100px] mx-auto" />
        </div>
        <NavItems />
        <div className="w-full mt-auto border-t border-muted px-3 py-4 flex justify-between gap-4">
          <UserDropdown user={session.user} />
          <ModeToggle />
        </div>
      </aside>
      <main className="p-6 flex flex-col w-full h-full overflow-auto">
        {children}
      </main>
    </div>
  );
}
