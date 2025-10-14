import type { ListAction } from "@/reducers/list-reducer";
import type { ListType } from "@/types/list";
// import type { ListItemType } from "@/types/list.item";
import { createContext, type ActionDispatch } from "react";
type contextValue={
list:ListType[],
dispatchList:ActionDispatch<[action: ListAction]>
// create:(listId: string, item: ListItemType)=>void
// move:(fromlistId: string, ItemId: string, tolistId: string)=>void
// remove:(listId: string, ItemId: string)=>void
}
export const BoardContext=createContext<contextValue>({
list:[],
dispatchList:()=>{}
// create:()=>{},
// move:()=>{},
// remove:()=>{},
})