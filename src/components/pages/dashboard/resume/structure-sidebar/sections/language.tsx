import { Controller, useFormContext } from "react-hook-form";
import { SectionTitle } from "../../infos-sidebar/sections/section-title";
import { Languages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type LanguageOption = {
  label: string;
  value: ResumeLanguages;
};

export const languagesOptions: LanguageOption[] = [
  {
    label: "Inglês",
    value: "english",
  },
  {
    label: "Espanhol",
    value: "spanish",
  },
  {
    label: "Francês",
    value: "french",
  },
  {
    label: "Alemão",
    value: "german",
  },
  {
    label: "Italiano",
    value: "italian",
  },
  {
    label: "Português",
    value: "portuguese",
  },
];

export function LanguageSection() {
  const { control } = useFormContext<ResumeData>();
  return (
    <div>
      <SectionTitle title="Linguagem" icon={Languages} />
      <Controller
        control={control}
        name="structure.language"
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="mt-4">
              <SelectValue placeholder="Selecione uma linguagem" />
            </SelectTrigger>
            <SelectContent>
              {languagesOptions.map((language) => (
                <SelectItem key={language.value} value={language.value}>
                  {language.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
}
