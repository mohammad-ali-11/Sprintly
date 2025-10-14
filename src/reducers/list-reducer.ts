import type { ListType } from "@/types/list";
import type { ListItemType } from "@/types/list.item";

export type ListAction =
  | {
      type: "created";
      listId: string;
      item: ListItemType;
    }
  | {
      type: "moved";
      fromlistId: string;
      ItemId: string;
      tolistId: string;
    }
  | {
      type: "removed";
      listId: string;
      ItemId: string;
    };
export default function ListReducer(
  state: ListType[],
  action: Action,
): ListType[] {
  switch (action.type) {
    case "created": {
       const ListIndex = state.findIndex((list) => list.id === action.listId);
      console.log(ListIndex);
      if (ListIndex === -1) {
        console.log("cannot find desired list");
        return state;
      }
      const clone = [...state];
      const list = {
        ...clone[ListIndex],
        items: [...clone[ListIndex].items],
      };
      list.items.push(action.item)
      clone[ListIndex]=list
      return clone
      // const clone = [...state];
      // const id = globalThis.crypto.randomUUID();
      // clone[0] = { ...clone[0], items: [...clone[0].items, { id, title: id }] };
      // return clone;
    }
    case "moved": {
      const fromListIndex = state.findIndex(
        (list) => list.id === action.fromlistId,
      );
      const toListIndex = state.findIndex(
        (list) => list.id === action.tolistId,
      );
      if (fromListIndex === -1 || toListIndex === -1) {
        console.error("cannot find desired list");
        return state;
      }
      const clone = [...state];
      const list = {
        ...clone[fromListIndex],
        items: [...clone[fromListIndex].items],
      };
      const toList = {
        ...clone[toListIndex],
        items: [...clone[toListIndex].items],
      };

      const ItemIndex = list.items.findIndex(
        (item) => item.id === action.ItemId,
      );
      if (ItemIndex === -1) {
        console.error("cannot find desired Item");
        return state;
      }
      const [activesItem] = list.items.splice(ItemIndex, 1);
      toList.items.push(activesItem);
      clone[fromListIndex] = list;
      clone[toListIndex] = toList;

      return clone;
    }
    case "removed": {
      const ListIndex = state.findIndex((list) => list.id === action.listId);
      console.log(ListIndex);
      if (ListIndex === -1) {
        console.log("cannot find desired list");
        return state;
      }
      const clone = [...state];
      const list = {
        ...clone[ListIndex],
        items: [...clone[ListIndex].items],
      };

      const ItemIndex = list.items.findIndex(
        (item) => item.id === action.ItemId,
      );
      console.log(ItemIndex);
      if (ItemIndex === -1) {
        console.log("cannot find desired Item");
        return state;
      }
      list.items.splice(ItemIndex, 1);
      clone[ListIndex] = list;
      return clone;
    }

    default: {
      throw new Error("Unknow actives");
    }
  }
}
