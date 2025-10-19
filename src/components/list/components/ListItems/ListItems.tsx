import type { ReactNode } from "react";

import { useDraggable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import ListItem from "@/components/ListItem/ListItem";

import type { ListType } from "@/types/list";

import styles from "./ListItems.module.css";

type props = {
  pressentational?:boolean;
  listIndex: number;
  list: ListType;
};
export default function ListItems({pressentational, listIndex, list }: props): ReactNode {
  const { setNodeRef } = useDraggable({
    id: list.id,
    data: { isList: true, listIndex, list },
  });
  return (
    <div className={styles["list-items"]}>
      <SortableContext id={list.id} items={list.items.map((item) => item?.id)}>
        <ul ref={setNodeRef} className={styles.items}>
          {list.items?.map((item, itemIndex) => (
            <li key={item?.id}>
              <ListItem
              pressentational={pressentational}
                item={item}
                listIndex={listIndex}
                itemIndex={itemIndex}
              />
            </li>
          ))}
        </ul>
      </SortableContext>
    </div>
  );
}

