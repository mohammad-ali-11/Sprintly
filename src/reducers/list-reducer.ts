import type { Draft } from "immer";

import type { ListType } from "@/types/list";
import type { ListItemType } from "@/types/list.item";

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

    default: {
      throw new Error("Unknow actives");
    }
  }
}
