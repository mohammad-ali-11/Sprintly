import { type PropsWithChildren, type ReactNode, use, useState } from "react";

import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import ListItem from "@/components/ListItem/ListItem";

import type { DraggableData } from "@/types/draggable-data";
import { BoardContext } from "@/contect/board-context";

type props = PropsWithChildren;
export default function DndProvider({ children }: props): ReactNode {
 const{dispatchList} =use(BoardContext)

  const [activeData, setActiveData] = useState<DraggableData | null>(null);
  const handleDragStart = (e: DragStartEvent): void => {
    setActiveData(e.active.data.current as DraggableData);
  };
    const handleDragOver = (e:DragEndEvent): void => {
    // setActiveData(null);
    if (!e.over) {
      return
    }
    dispatchList({type:'item-dragged-over',
       activeListIndex: e.active.data.current!.listIndex,
      activeItemIndex:  e.active.data.current!.itemIndex,
      overListIndex:  e.over.data.current!.listIndex,
      overItemIndex: e.over.data.current!.itemIndex,
    })
  };


  const handleDragEnd = (e:DragEndEvent): void => {
    setActiveData(null);
    if (!e.over) {
      return
    }
    dispatchList({type:'item-dragged-end',
       activeListIndex: e.active.data.current!.listIndex,
      activeItemIndex:  e.active.data.current!.itemIndex,
      overItemIndex: e.over.data.current!.itemIndex,
    })
  };
  const sensors = useSensors(useSensor(PointerSensor));
  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
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
