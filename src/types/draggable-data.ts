import type { ListType } from "./list";
import type { ListItemType } from "./list.item";

type ListDraggable = {
  isList: true;
  listIndex: number;
  list: ListType;
};
type ListItemDraggableData = {
  isList: false;
  listIndex: number;
  itemIndex: number;
  item: ListItemType;
};
export type DraggableData = ListItemDraggableData | ListDraggable;
