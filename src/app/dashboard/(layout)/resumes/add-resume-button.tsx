import { Plus } from "lucide-react";
import { ResumesCardButton } from "./resumes-list/resume-card";

export function AddResumeButton() {
  return (
    <ResumesCardButton
      title="Criar novo currículo"
      description="Comece do zero"
      icon={<Plus size={50} />}
    />
  );
}
