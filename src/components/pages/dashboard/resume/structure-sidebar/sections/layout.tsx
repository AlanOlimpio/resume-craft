import { Columns3 } from "lucide-react";
import { SectionTitle } from "../../infos-sidebar/sections/section-title";
import { useFieldArray, useFormContext } from "react-hook-form";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import { LayoutDragList } from "../layout-drag-list";

export function LayoutSection() {
  const { control } = useFormContext<ResumeData>();

  const {
    fields: mainFields,
    move: moveMainField,
    insert: insertMainField,
    remove: removeMainField,
  } = useFieldArray({
    control,
    name: "structure.layout.mainSections",
  });

  const {
    fields: sidebarFields,
    move: moveSidebarField,
    insert: insertSidebarField,
    remove: removeSidebarField,
  } = useFieldArray({
    control,
    name: "structure.layout.sidebarSections",
  });

  function onDragEnd({ source, destination }: DropResult) {
    if (!destination) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      switch (destination.droppableId) {
        case "mainFields":
          insertMainField(destination.index, sidebarFields[source.index]);
          removeSidebarField(source.index);
          break;
        case "sidebarFields":
          insertSidebarField(destination.index, mainFields[source.index]);
          removeMainField(source.index);
          break;
      }
    }

    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === "mainFields") {
        moveMainField(source.index, destination.index);
      } else if (source.droppableId === "sidebarFields") {
        moveSidebarField(source.index, destination.index);
      }
    }
  }

  return (
    <div>
      <SectionTitle title="Estrutura" icon={Columns3} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-2 gap-4 mt-4 max-lg:grid-cols-1">
          <Droppable droppableId="mainFields">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <LayoutDragList title="Seções Principais" fields={mainFields} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="sidebarFields">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <LayoutDragList title="Barra Lateral" fields={sidebarFields} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}
