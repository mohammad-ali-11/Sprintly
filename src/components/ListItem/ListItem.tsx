import { use, type MouseEvent, type ReactNode } from "react";

import type { ListItemType } from "@/types/list.item";

import styles from "./ListItem.module.css";
import IconButton from "../IconButton/IconButton";
import MingcuteDelete2Line from "@/icons/MingcuteDelete2Line";
import { BoardContext } from "@/contect/board-context";
import { ActiveItemContext } from "@/contect/active-item-context";
import clsx from "clsx";
import { toast } from "react-toastify";
type props = {
  listId: string;
  item: ListItemType;
};
export default function ListItem({ item, listId }: props): ReactNode {
  const {dispatchList}=use(BoardContext)
    const {activeItemId,activate,deactive}=use(ActiveItemContext )
 
    const handelListItemClick = (): void => {
      if (item.id===activeItemId) {
       deactive()
         console.log('activw');
         
       
      }else{
          activate(listId,item.id)
        
        console.log('no');
        
      }
    activate(listId,item.id)

   
  };

  const handelRemoveButtonClick=(e:MouseEvent<HTMLButtonElement>) :void=>{
    e.stopPropagation()
    dispatchList({type:'removed',listId,ItemId:item.id})
  
    toast.success('Iteam remove succeddfully')
     deactive()
  }
  
  return (
    <div
      className={clsx(styles["list-item"],item.id===activeItemId&&styles.active) }
      onClick={handelListItemClick}
    >
      {item.title}
      <IconButton className={styles["remove-icon"]} onClick={handelRemoveButtonClick}>
        <MingcuteDelete2Line/>
      </IconButton>
    </div>
  );
}
