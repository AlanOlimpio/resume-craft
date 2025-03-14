import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { Copy, Download, Home, Trash } from "lucide-react";
import Link from "next/link";

export function NavigationHeader() {
  return (
    <header className="absolute w-full left-0 top-0 z-10 p-2 bg-background border-b border-muted flex items-center justify-between gap-2  flex-wrap">
      <div className="flex items-center gap-2 justify-between flex-wrap">
        <Tooltip content="Voltar ao painel">
          <Link href="/dashboard/resumes" passHref>
            <Button
              variant="ghost"
              className="w-8 h-8 bg-transparent"
              size="icon"
            >
              <Home size={18} />
            </Button>
          </Link>
        </Tooltip>
        <span className="text-muted-foreground">/</span>
        <p className="text-lg font-title font-bold ml-1">Título do currículo</p>
      </div>
      <div className="flex gap-1">
        <Tooltip content="Deletar Currículo">
          <Button
            variant="secondary"
            className="w-8 h-8 bg-transparent"
            size="icon"
          >
            <Trash />
          </Button>
        </Tooltip>
        <Tooltip content="Duplicar Currículo">
          <Button
            variant="secondary"
            className="w-8 h-8 bg-transparent"
            size="icon"
          >
            <Copy />
          </Button>
        </Tooltip>
        <Tooltip content="Baixar PDF">
          <Button
            variant="secondary"
            className="w-8 h-8 bg-transparent"
            size="icon"
          >
            <Download />
          </Button>
        </Tooltip>
      </div>
    </header>
  );
}
