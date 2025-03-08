import { LucideIcon } from "lucide-react";

type SectionTitleProps = {
  icon: LucideIcon;
  title: string;
};

export function SectionTitle({ icon: Icon, title }: SectionTitleProps) {
  return (
    <aside className="flex items-center gap-2">
      <Icon size={20} />
      <h3 className="text-sm font-bold">{title}</h3>
    </aside>
  );
}
