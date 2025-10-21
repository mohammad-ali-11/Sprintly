import { type PropsWithChildren, type ReactNode, useEffect } from "react";

import { useImmerReducer } from "use-immer";

import { BoardContext } from "@/context/board-context";

import { listData } from "@/data/list-data";

import ListReducer from "@/reducers/list-reducer";

import type { ListType } from "@/types/list";

// import type { ListItemType } from "@/types/list.item";

type props = PropsWithChildren;

function save(list: ListType[]): void {
  localStorage.setItem("list", JSON.stringify(list));
}
function load(): ListType[] {
  const item = localStorage.getItem("list");
  if (!item) {
    return listData;
  }
  return JSON.parse(item);
}

export default function BoardProviders({ children }: props): ReactNode {
  // const [list, setList] = useState<ListType[]>(load);
  const [list, dispatchList] = useImmerReducer(ListReducer, load());

  useEffect(() => {
    save(list);
  }, [list]);

  return <BoardContext value={{ dispatchList, list }}>{children}</BoardContext>;
}
