import { Separator } from "@/components/ui/separator";
import { LayoutSection } from "./sections/layout";
import { TemplatesListSection } from "./sections/templates-list";
import { ThemeSection } from "./sections/theme";
import { LanguageSection } from "./sections/language";

export function StructureSidebar() {
  return (
    <aside className="w-full h-full p-6  max-md:pr-2 max-md:pl-2  overflow-y-auto">
      <TemplatesListSection />
      <Separator className="my-5" />
      <LayoutSection />
      <Separator className="my-5" />
      <ThemeSection />
      <Separator className="my-5" />
      <LanguageSection />
    </aside>
  );
}
