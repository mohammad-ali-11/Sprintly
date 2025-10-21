import type { Draft } from "immer";

import { arrayMove } from "@dnd-kit/sortable";

import type { ListType } from "@/types/list";
import type { ListItemType } from "@/types/list.item";

export type ListAction =
  | {
      type: "list-created";
      list: ListType;
    }
  | {
      type: "list-edited";
      listIndex: number;
      list:Partial<ListType>
    }
  | {
      type: "list-remove";
      listIndex: number;
    }
  | {
      type: "list-dragged-end";
      activeListIndex: number;
      overListIndex: number;
    }
  | {
      type: "item-created";
      listIndex: number;
      item: ListItemType;
    }
  | {
      type: "item-removed";
      listIndex: number;
      itemIndex: number;
    }
  | {
      type: "item-dragged-end";
      activeListIndex: number;
      activeItemIndex: number;
      overItemIndex: number;
    }
  | {
      type: "item-dragged-over";
      activeListIndex: number;
      activeItemIndex: number;
      overListIndex: number;
      overItemIndex?: number;
    };

export default function ListReducer(
  draft: Draft<ListType[]>,
  action: ListAction,
): void {
  switch (action.type) {
     case "list-created": {
      draft.push(action.list)
      return;
    }
     case "list-edited": {
      draft[action.listIndex]={...draft[action.listIndex],...action.list}
      return;
    }
    case "list-remove": {
      draft.splice(action.listIndex,1)
      return;
    }
    case "item-dragged-end": {
      const { activeItemIndex, activeListIndex, overItemIndex } = action;
      if (activeItemIndex === overItemIndex) {
        return;
      } 
      const activeList = draft[activeListIndex];
      activeList.items = arrayMove(
        activeList.items,
        activeItemIndex,
        overItemIndex,
      );
      return;
    }
    case "item-created": {
      const list = draft[action.listIndex];

      list.items.push(action.item);

      return;
    }
    case "item-removed": {
      const list = draft[action.listIndex];
      list.items.splice(action.itemIndex, 1);
      return;
    }
    case "item-dragged-over": {
      const { activeItemIndex, activeListIndex, overListIndex, overItemIndex } =
        action;
      if (activeListIndex === overListIndex) {
        return;
      }
      const activeList = draft[activeListIndex];
      const activeItem = activeList.items[activeItemIndex];
      const overList = draft[overListIndex];
      const newIndex = overItemIndex ?? overList.items.length;

      overList.items.splice(newIndex, 0, activeItem);
      activeList.items.splice(activeItemIndex, 1);
      return;
    }

    case "list-dragged-end": {
      const { activeListIndex, overListIndex } = action;
      if (activeListIndex === overListIndex) {
        return;
      }
      const activeList = draft[activeListIndex];

      draft.splice(activeListIndex, 1);
      draft.splice(overListIndex, 0, activeList);

      return;
    }

    default: {
      throw new Error("Unknow actives");
    }
  }
}
