import { ReactNode } from "react";
import { ResumeDto } from "@/db/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { formatDistanceToNow } from "date-fns";
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
    <div
      className={cn(
        "text-foreground  w-full  max-md:h-[200px] h-[300px] bg-white hover:bg-gray-200 rounded border border-muted-foreground/20",
        "flex items-center justify-center relative outline-none  overflow-hidden",
        "dark:bg-muted hover:brightness-105 dark:hover:brightness-125 transition-all cursor-pointer"
      )}
    >
      {icon}
      <span className="absolute w-full left-0 bottom-0 p-3 text-left bg-gradient-to-t from-background/90 text-wrap">
        <p className="text-sm font-semibold font-title">{title}</p>
        <span className="block text-xs text-muted-foreground">
          {description}
        </span>
      </span>
    </div>
  );
}

type ResumeCardProps = {
  resume: ResumeDto;
};

export function ResumeCard({ resume }: ResumeCardProps) {
  const formattedLastUpdate = formatDistanceToNow(new Date(resume.updatedAt), {
    addSuffix: true,
  });

  return (
    <Link href={`/dashboard/resumes/${resume.id}`} className="block w-full">
      <ResumesCardButton
        title={resume.title}
        description={`Última atualização ${formattedLastUpdate}`}
      />
    </Link>
  );
}
