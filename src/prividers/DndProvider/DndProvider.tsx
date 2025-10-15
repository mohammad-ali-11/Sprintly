import { type PropsWithChildren, type ReactNode, useState } from "react";

import {
  DndContext,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import ListItem from "@/components/ListItem/ListItem";

import type { DraggableData } from "@/types/draggable-data";

type props = PropsWithChildren;
export default function DndProvider({ children }: props): ReactNode {
  const [activeData, setActiveData] = useState<DraggableData | null>(null);
  const handleDragStart = (e: DragStartEvent): void => {
    setActiveData(e.active.data.current as DraggableData);
  };
  const handleDragEnd = (): void => {
    setActiveData(null);
  };
  const sensors = useSensors(useSensor(PointerSensor));
  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {children}
      <DragOverlay>
        {activeData &&
          (activeData.isList ? null : (
            <ListItem
            pressentational={true}
              listIndex={activeData.listIndex}
              ItemIndex={activeData.itemIndex}
              item={activeData.item}
            />
          ))}
      </DragOverlay>
    </DndContext>
  );
}
