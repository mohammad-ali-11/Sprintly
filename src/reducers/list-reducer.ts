import type { Draft } from "immer";

import type { ListType } from "@/types/list";
import type { ListItemType } from "@/types/list.item";
import { arrayMove } from "@dnd-kit/sortable";

export type ListAction =
  | {
      type: "item-created";
      listIndex: number;
      item: ListItemType;
    }
  | {
      type: "item-removed";
      listIndex: number;
      ItemIndex: number;
    }
    | {
      type: "item-dragged-end";
      activeListIndex: number;
      activeItemIndex: number;
      overItemIndex:number
    }
    | {
      type: "item-dragged-over";
      activeListIndex: number;
      activeItemIndex: number;
      overListIndex: number;
      overItemIndex?:number
    };
export default function ListReducer(
  draft: Draft<ListType[]>,
  action: ListAction,
): void {
  switch (action.type) {
    case "item-created": {
      const list = draft[action.listIndex];

      list.items.push(action.item);

      return;
    }
    case "item-removed": {
      const list = draft[action.listIndex];
      list.items.splice(action.ItemIndex, 1);
      return;
    }
    case "item-dragged-over": {
      const {activeItemIndex,activeListIndex,overListIndex,overItemIndex}=action
      if (activeListIndex===overListIndex ) {
        return
      }
      const activeList=draft[activeListIndex ]
      const activeItem=activeList.items[activeItemIndex]
      const overList=draft[overListIndex]
     const newIndex=overItemIndex??overList.items.length 

     overList.items.splice(newIndex,1)
     activeList.items.splice(activeItemIndex,1)
      return;
    }
     case "item-dragged-end": {
      const {activeItemIndex,activeListIndex,overItemIndex}=action
      if (activeItemIndex===overItemIndex ) {
        return
      }
      const activeList=draft[activeListIndex ]
      activeList.items=arrayMove(
        activeList.items,
        activeItemIndex,
        overItemIndex
      )
      return;
    }
 
    default: {
      throw new Error("Unknow actives");
    }
  }
}
