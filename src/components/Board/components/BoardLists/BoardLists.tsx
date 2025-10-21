import { type ReactNode, use } from "react";

import { SortableContext } from "@dnd-kit/sortable";


import List from "@/components/list/list";

import styles from "./BoardLists.module.css";
import { BoardContext } from "@/context/board-context";

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
