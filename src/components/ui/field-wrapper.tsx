import { ReactNode } from "react";
import { Label } from "./label";

type FieldWrapperProps = {
  label: string;
  children: ReactNode;
};
export function FieldWrapper({ label, children }: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
