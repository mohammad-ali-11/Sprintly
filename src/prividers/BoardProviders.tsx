import {
  type PropsWithChildren,
  type ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";

import { BoardContext } from "@/contect/board-context";

import { listData } from "@/data/list-data";

import type { ListType } from "@/types/list";
import ListReducer from "@/reducers/list-reducer";
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
 const [list,dispatchList] =useReducer(ListReducer,load())
  console.log(list);

  useEffect(() => {
    save(list);
  }, [list]);

  // const create = (listId: string, item: ListItemType): void => {
  //   // setList((old) => {
    
  //   // });
  //   dispatch({type:'created',listId,item})
  // };
  // const move = (fromlistId: string, ItemId: string, tolistId: string): void => {
  //   // setList((old) => {
     
  //   // });
  //   dispatch({type:'moved',fromlistId,ItemId,tolistId})
  // };
  // const remove = (listId: string, ItemId: string): void => {
  //   // setList((old) => {
    
  //   // });
  //   dispatch({type:'removed',listId,ItemId})
  // };
  return (
    <BoardContext value={{ dispatchList, list }}>
      {children}
    </BoardContext>
  );
}
