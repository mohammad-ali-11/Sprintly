import type { ListType } from "@/types/list";
import { createContext } from "react";
type contextValue={
list:ListType[],
create:()=>void
move:(fromlistId: string, ItemId: string, tolistId: string)=>void
remove:(listId: string, ItemId: string)=>void
}
export const BoardContext=createContext<contextValue>({
list:[],
create:()=>{},
move:()=>{},
remove:()=>{},
})