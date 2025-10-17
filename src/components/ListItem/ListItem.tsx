import { type MouseEvent, type ReactNode, use, useRef } from "react";

import { toast } from "react-toastify";

import { BoardContext } from "@/contect/board-context";

import MingcuteDelete2Line from "@/icons/MingcuteDelete2Line";

import type { ListItemType } from "@/types/list.item";

import IconButton from "../IconButton/IconButton";

import styles from "./ListItem.module.css";
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';
import clsx from "clsx";

type props = {
  pressentational?:boolean;
  listIndex: number;
  item: ListItemType;
  itemIndex:number
};
export default function ListItem({
   item,
  listIndex,
  itemIndex,
  pressentational
   }: props): ReactNode {
 const{
  attributes,
  listeners,
  setNodeRef,
  transform,
  transition,
  isDragging ,
  over
}= useSortable({
   id:item.id,
    data:{isList:false,listIndex,itemIndex,item}
  })
  const overListIndex=over?.data.current?.listIndex
  const { dispatchList } = use(BoardContext);
  const handelRemoveButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatchList({ type: "item-removed", listIndex, itemIndex});

    toast.success("Iteam remove succeddfully");
  };

  return (
    <div ref={setNodeRef}
     className={clsx(styles["list-item"],pressentational&&styles.pressentational) }
     style={{
      opacity:isDragging?'0.5':undefined,
      transform: CSS.Translate.toString(transform),
    transition:listIndex===overListIndex?transition:undefined
     }}
     {...listeners}
     {...attributes}
     >
      {item.title}
      <IconButton
        className={styles["remove-icon"]}
        onPointerDown={handelRemoveButtonClick}
      >
        <MingcuteDelete2Line />
      </IconButton>
    </div>
  );
}
