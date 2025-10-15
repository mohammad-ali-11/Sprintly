import { type ReactNode } from "react";

import type { ListType } from "@/types/list";

import ListHeader from "./components/ListHeader/ListHeader";
import ListItems from "./components/ListItems/ListItems";

import styles from "./list.module.css";

type props = {
  listIndex: number;
  list: ListType;
};
export default function List({ list, listIndex }: props): ReactNode {
  return (
    <div className={styles.list}>
      <ListHeader title={list.title} listIndex={listIndex} />
      <ListItems listIndex={listIndex} list={list} />
    </div>
  );
}
