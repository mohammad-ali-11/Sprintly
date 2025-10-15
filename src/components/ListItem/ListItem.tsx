import { type MouseEvent, type ReactNode, use } from "react";

import { toast } from "react-toastify";

import { BoardContext } from "@/contect/board-context";

import MingcuteDelete2Line from "@/icons/MingcuteDelete2Line";

import type { ListItemType } from "@/types/list.item";

import IconButton from "../IconButton/IconButton";

import styles from "./ListItem.module.css";
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';

type props = {
  listIndex: number;
  item: ListItemType;
  ItemIndex:number
};
export default function ListItem({ item, listIndex,ItemIndex }: props): ReactNode {
 const{attributes,listeners,setNodeRef,transform,transition}= useSortable({
    id:item.id,
    data:{isList:false,listIndex,ItemIndex,item}
  })
  const { dispatchList } = use(BoardContext);
  const handelRemoveButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatchList({ type: "item-removed", listIndex, ItemIndex});

    toast.success("Iteam remove succeddfully");
  };

  return (
    <div ref={setNodeRef}
     className={styles["list-item"]}
     style={{
      transform: CSS.Translate.toString(transform),
    transition,
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
