import { BaseDialogPros, Dialog } from "@/components/ui/dialog";

export function NewResumeDialog(props: BaseDialogPros) {
  return (
    <Dialog
      {...props}
      title="Criar novo currículo"
      description="Para começar, escolha um título para seu currículo"
      content={<form></form>}
    />
  );
}
