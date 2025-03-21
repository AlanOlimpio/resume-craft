"use client";
import { ReactNode } from "react";
import {
  Tooltip as TooltipRoot,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./primitive";

type TooltipProps = {
  children: ReactNode;
  content: string | number | ReactNode;
};

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={300}>
        <TooltipTrigger asChild {...props}>
          {children}
        </TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
}
