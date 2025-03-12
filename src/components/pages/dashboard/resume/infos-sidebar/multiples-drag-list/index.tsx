import { GripVertical, LucideIcon, Plus } from "lucide-react";
import { SectionTitle } from "../sections/section-title";
import { useFieldArray, useFormContext } from "react-hook-form";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";

export type ResumeArrayKeys = Exclude<
  keyof ResumeContentData,
  "image" | "infos" | "summary"
>;

export type MultipleDragItemData = {
  formKey: ResumeArrayKeys;
  title: string;
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
};

type MultipleDragListProps = {
  data: MultipleDragItemData;
  onAdd: () => void;
  onEdit: (index: number) => void;
};

export function MultipleDragList({
  data,
  onAdd,
  onEdit,
}: MultipleDragListProps) {
  const { control } = useFormContext<ResumeData>();
  const { fields, move } = useFieldArray({
    control,
    name: `content.${data.formKey}`,
  });

  function handleDrag({ source, destination }: DropResult) {
    if (!destination) return;
    move(source.index, destination.index);
  }
  const isEmpty = fields.length === 0;

  return (
    <div>
      <SectionTitle title={data.title} icon={data.icon} />
      <div className="mt-4 flex flex-col">
        {isEmpty && (
          <Button variant="ghost" className="w-full gap-2" onClick={onAdd}>
            <Plus size={24} />
            Adicionar item
          </Button>
        )}
        {!!fields.length && (
          <DragDropContext onDragEnd={handleDrag}>
            <Droppable droppableId={`droppable-${data.formKey}`}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  className="rounded overflow-hidden border border-muted"
                  ref={provided.innerRef}
                >
                  {fields.map((field, index) => {
                    const titleKey = data.titleKey as keyof typeof field;
                    const descriptionKey =
                      data.descriptionKey as keyof typeof field;

                    const isLastItem = index === fields.length - 1;

                    return (
                      <Draggable
                        key={`droppable-item-${data.formKey}-${index}`}
                        draggableId={`droppable-item-${data.formKey}-${index}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            key={field.id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className={cn(
                              "h-[70px] w-full bg-muted/50 flex",
                              !isLastItem && "border-b border-muted"
                            )}
                          >
                            <div
                              {...provided.dragHandleProps}
                              className="w-6 h-full bg-muted/50 flex items-center justify-center hover:brightness-125 transition-all"
                            >
                              <GripVertical size={14} />
                            </div>
                            <Tooltip content="Clique para editar">
                              <div
                                onClick={() => onEdit(index)}
                                className="flex-1 flex flex-col justify-start p-2 overflow-auto cursor-pointer hover:bg-muted/80 transition-all"
                              >
                                <p className="text-sm font-title font-bold">
                                  {field[titleKey]}
                                </p>
                                <p className="text-xs text-muted-foreground p-2 break-words">
                                  {field[descriptionKey]}
                                </p>
                              </div>
                            </Tooltip>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
        {!isEmpty && (
          <Button
            variant="ghost"
            className="w-max gap-2 ml-auto mt-4"
            onClick={onAdd}
          >
            <Plus size={24} />
            Adicionar item
          </Button>
        )}
      </div>
    </div>
  );
}
