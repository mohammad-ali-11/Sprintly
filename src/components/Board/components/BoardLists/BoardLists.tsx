import { type ReactNode, use } from "react";

import { SortableContext } from "@dnd-kit/sortable";

import { BoardContext } from "@/contect/board-context";

import List from "@/components/list/list";

import styles from "./BoardLists.module.css";

export default function BoardLists(): ReactNode {
  const { list } = use(BoardContext);

  return (
    <SortableContext id="board" items={list.map((list) => list.id)}>
      <ul className={styles["board-lists"]}>
        {list.map((item, listIndex) => (
          <li key={item?.id}>
            <List listIndex={listIndex} list={item} />
          </li>
        ))}
      </ul>
    </SortableContext>
  );
}
