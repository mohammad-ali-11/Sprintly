import { type ReactNode } from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import type { ListType } from "@/types/list";

import ListHeader from "./components/ListHeader/ListHeader";
import ListItems from "./components/ListItems/ListItems";

import styles from "./list.module.css";
import clsx from "clsx";

type props = {
   pressentational?:boolean;
  listIndex: number;
  list: ListType;
};
export default function List({pressentational, list, listIndex }: props): ReactNode {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: list.id,
    data: { isList: true, listIndex, list },
  });
  return (
    <div
      ref={setNodeRef}
      className={clsx(styles.list,pressentational&& styles.pressentational)}
      style={{
        opacity: isDragging ? "0.5" : undefined,
        transform: CSS.Translate.toString(transform),
        transition,
      }}
      {...attributes}
    >
      <ListHeader list={list}  listeners={listeners} listIndex={listIndex} />
      <ListItems pressentational={pressentational} listIndex={listIndex} list={list} />
    </div>
  );
}
