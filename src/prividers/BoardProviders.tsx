import {
  type PropsWithChildren,
  type ReactNode,
  useEffect,
  useState,
} from "react";

import { BoardContext } from "@/contect/board-context";

import { listData } from "@/data/list-data";

import type { ListType } from "@/types/list";

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
  const [list, setList] = useState<ListType[]>(load);
  console.log(list);

  useEffect(() => {
    save(list);
  }, [list]);

  const create = (): void => {
    setList((old) => {
      const clone = [...old];
      const id = globalThis.crypto.randomUUID();
      clone[0] = { ...clone[0], items: [...clone[0].items, { id, title: id }] };
      return clone;
    });
  };
  const move = (fromlistId: string, ItemId: string, tolistId: string): void => {
    setList((old) => {
      const fromListIndex = old.findIndex((list) => list.id === fromlistId);
      const toListIndex = old.findIndex((list) => list.id === tolistId);
      if (fromListIndex === -1 || toListIndex === -1) {
        console.error("cannot find desired list");
        return old;
      }
      const clone = [...old];
      const list = {
        ...clone[fromListIndex],
        items: [...clone[fromListIndex].items],
      };
      const toList = {
        ...clone[toListIndex],
        items: [...clone[toListIndex].items],
      };

      const ItemIndex = list.items.findIndex(
        (item) => item.id === ItemId,
      );
      if (ItemIndex === -1) {
        console.error("cannot find desired Item");
        return old;
      }
      const [activesItem] = list.items.splice(ItemIndex, 1);
      toList.items.push(activesItem);
      clone[fromListIndex] = list;
      clone[toListIndex] = toList;

      return clone;
    });
  };
  const remove = (listId: string, ItemId: string): void => {
    setList((old) => {
      const ListIndex = old.findIndex((list) => list.id === listId);
      console.log(ListIndex);
      if (ListIndex === -1) {
        console.log("cannot find desired list");
        return old;
      }
      const clone = [...old];
      const list = {
        ...clone[ListIndex],
        items: [...clone[ListIndex].items],
      };

      const ItemIndex = list.items.findIndex(
        (item) => item.id === ItemId,
      );
      console.log(ItemIndex);
      if (ItemIndex === -1) {
        console.log("cannot find desired Item");
        return old;
      }
      list.items.splice(ItemIndex, 1);
      clone[ListIndex] = list;
      return clone;
    });
  };
  return (
    <BoardContext value={{ remove, move, create, list }}>
      {children}
    </BoardContext>
  );
}
