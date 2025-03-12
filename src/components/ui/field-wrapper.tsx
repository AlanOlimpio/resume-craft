import { ReactNode } from "react";
import { Label } from "./label";
import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";

type FieldWrapperProps = {
  label: string;
  children: ReactNode;
  className?: string;
  error?: FieldError;
  ref: null;
};
export function FieldWrapper({
  label,
  children,
  className,
  error,
  ref,
}: FieldWrapperProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)} ref={ref}>
      <Label>{label}</Label>
      {children}
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
