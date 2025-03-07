import Link from "next/link";
import Logo from "@/assets/logo.svg";
import { IaGenerationDropdown } from "./ia-generation-dropdown";
import { Separator } from "@/components/ui/separator";

export function InfosSidebar() {
  return (
    <aside className="w-full h-full p-6 overflow-auto">
      <div className="w-full flex gap-4 flex-wrap items-center justify-between">
        <Link href="/dashboard/resumes/">
          <Logo className="w-fullw-[80px]   min-h-[38px] mx-auto" />
        </Link>
        <IaGenerationDropdown />
      </div>
      <Separator className="my-5" />
    </aside>
  );
}
