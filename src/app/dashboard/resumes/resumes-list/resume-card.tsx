import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";
type ResumesCardButton = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export function ResumesCardButton({
  title,
  icon,
  description,
}: ResumesCardButton) {
  return (
    <Button
      className={cn(
        "text-foreground  w-full h-[300px] bg-white hover:bg-gray-200 rounded border border-muted-foreground/20",
        "flex items-center justify-center relative outline-none  overflow-hidden",
        "dark:bg-muted hover:brightness-105 dark:hover:brightness-125 transition-all"
      )}
    >
      {icon}
      <span className="absolute w-full left-0 bottom-0 p-3 text-left bg-gradient-to-t from-background/90">
        <p className="text-sm font-semibold font-title">{title}</p>
        <span className="block text-xs text-muted-foreground">
          {description}
        </span>
      </span>
    </Button>
  );
}
export function ResumeCard() {
  return (
    <Link href="/dashboard/resumes/example" className="block w-full">
      <ResumesCardButton
        title="Meu currículo"
        description="Última atualização há 22 minutos"
      />
    </Link>
  );
}
