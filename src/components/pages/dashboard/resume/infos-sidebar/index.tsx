import Link from "next/link";
import { IaGenerationDropdown } from "./ia-generation-dropdown";
import { Separator } from "@/components/ui/separator";
import { BasicInfoSection } from "./sections/basic-info";
import { SummarySection } from "./sections/summary";
import { MultiplesSection } from "./sections/multiples";
import Logo from "@/components/ui/logo";

export function InfosSidebar() {
  return (
    <aside className="w-full h-full p-6 max-md:pr-2 max-md:pl-2  overflow-auto">
      <div className="w-full flex gap-4 flex-wrap items-center justify-between">
        <Link href="/dashboard/resumes/" className="max-md:hidden">
          <Logo className="!w-[180px]" />
        </Link>
        <IaGenerationDropdown />
      </div>
      <Separator className="my-5" />
      <BasicInfoSection />
      <Separator className="my-5" />
      <SummarySection />
      <MultiplesSection />
    </aside>
  );
}
