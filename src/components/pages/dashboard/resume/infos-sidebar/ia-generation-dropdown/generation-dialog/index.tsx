import { BaseDialogProps, Dialog } from "@/components/ui/dialog";

type GenerationDialogProps = BaseDialogProps & {
  mode: AIGenerationMode;
  setOpen: (open: boolean) => void;
};

export const GenerationDialog = ({ mode, ...props }: GenerationDialogProps) => {
  const onClose = () => {
    props.setOpen(false);
  };

  const configPerMode: Record<AIGenerationMode, JSX.Element> = {
    JOB_TITLE: <div>Gerar conteúdo para vaga de emprego</div>,
    FIX_CONTENT: <div>Melhorar e corrigir conteúdo existente</div>,
    TRANSLATE_CONTENT: <div>Traduzir conteúdo existentes</div>,
  };

  const content = configPerMode[mode];

  return (
    <Dialog
      {...props}
      title="Inteligência Artificial"
      description="O conteúdo gerado sobrescreverá os campos existentes. Cada geração custa 1 crédito."
      content={content}
    />
  );
};
