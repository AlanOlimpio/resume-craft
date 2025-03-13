import { TemplatesListSection } from "./sections/templates-list";

export function StructureSidebar() {
  return (
    <aside className="w-full h-full p-6 overflow-hidden flex items-center justify-center relative bg-muted dark:bg-background">
      <TemplatesListSection />
    </aside>
  );
}
