// import type { ListItemType } from "@/types/list.item";
import { type ActionDispatch, createContext } from "react";

import type { ListAction } from "@/reducers/list-reducer";

import type { ListType } from "@/types/list";

type contextValue = {
  list: ListType[];
  dispatchList: ActionDispatch<[action: ListAction]>;
  // create:(listId: string, item: ListItemType)=>void
  // move:(fromlistId: string, ItemId: string, tolistId: string)=>void
  // remove:(listId: string, ItemId: string)=>void
};
export const BoardContext = createContext<contextValue>({
  list: [],
  dispatchList: () => {},
  // create:()=>{},
  // move:()=>{},
  // remove:()=>{},
});
