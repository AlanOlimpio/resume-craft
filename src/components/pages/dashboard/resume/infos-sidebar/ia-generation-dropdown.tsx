import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export function IaGenerationDropdown() {
  return (
    <Button className="gap-2 text-xs px-2.5 py-1 h9 max-w-[100%] text-wrap">
      <Bot size={20} />
      Inteligência Artificial
    </Button>
  );
}
