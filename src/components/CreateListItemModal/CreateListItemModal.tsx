import { use, useRef, type ComponentProps, type FormEvent, type ReactNode } from "react";

import clsx from "clsx";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";

import styles from "./CreateListItemModal.module.css";
import { BoardContext } from "@/contect/board-context";
import { toast } from "react-toastify";

type props = Omit<ComponentProps<typeof Modal>, "children" | "heading">&{
  listId:string
}
export default function CreateListItemModal({
  ref,
  listId,
  contentClassName,
  ...otherProps
}: props): ReactNode {
    const formRef=useRef<HTMLFormElement>(null)
   const{dispatchList}= use(BoardContext)
   const handelCancelItemClick=():void=>{
    ref.current?.close()
   }
   const handleCloseModal=():void=>{
    formRef.current?.reset()
   }
    const handelFormSubmit=(e:FormEvent<HTMLFormElement>):void=>{
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const id = globalThis.crypto.randomUUID();
        const title=formData.get('titel') as string
        dispatchList({type:'created',listId,item:{id,title}})
       
        
        toast.success('Item Create succsess')
        ref.current?.close()
    }
  return (
    <Modal
      ref={ref}
      heading="create new item"
      onClick={handleCloseModal}
      contentClassName={clsx(styles["create-list-item-modal"],contentClassName,)}
      {...otherProps}
    >
      <form onSubmit={handelFormSubmit} ref={formRef}>
        <TextInput label="titel" name="titel" type="text"/>
        <div className={styles.actions}>
          <Button color="primary">submit</Button>
          <Button onClick={handelCancelItemClick} type='reset'>cancel</Button>
        </div>
      </form>
    </Modal>
  );
}
