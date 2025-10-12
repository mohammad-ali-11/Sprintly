import { ActiveItemContext } from "@/contect/active-item-context"
import { useEffect, useState, type PropsWithChildren, type ReactNode } from "react"

type props=PropsWithChildren
export default function ActiveItemProvider({children}:props):ReactNode {
      const [activeListId, setActiveListId] = useState<string | null>(null);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const activate=(listId:string,ItemId:string):void=>{
    setActiveListId(listId);
    setActiveItemId(ItemId);
  }
  const deactive=():void=>{
       setActiveListId(null);
    setActiveItemId(null);
  }

   useEffect(() => {
    const handelDocumentKeydown = (e: KeyboardEvent): void => {
      console.log("ee");
      if (e.code !== "Escape") {
        return;
      }
      deactive()
    };
    document.addEventListener("keydown", handelDocumentKeydown);
    return (): void => {
      document.removeEventListener("keydown", handelDocumentKeydown);
    };
  }, []);

  return  (
    <ActiveItemContext value={{activeListId,activeItemId,activate,deactive}}>
        {children}
    </ActiveItemContext>
  )
}