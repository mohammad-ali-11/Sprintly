import {
  type ComponentProps,
  type FormEvent,
  type ReactNode,
  use,
  useRef,
} from "react";

import { toast } from "react-toastify";
import { BoardContext } from "@/contect/board-context";

import TextInput from "@/components/TextInput/TextInput";

import FormModal from "../FormModal/FormModal";

import type { ListItemType } from "@/types/list.item";

type props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  listIndex: number;
};
type values=Omit<ListItemType,'id'>
export default function ListItemModal({
  modalRef,
  listIndex,
}: props): ReactNode {
  const formRef = useRef<HTMLFormElement>(null);
  const { dispatchList } = use(BoardContext);

  const handelFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values:values={
      title:formData.get('title') as string
    }
     if (!validateTitel(values.title)) {
      return
    }
    const id = globalThis.crypto.randomUUID();
    // const title = formData.get("title") as string;
   
    // if (!title || title.trim() === "") {
    //   toast.error("لطفاً عنوان را وارد کنید!");
    //   return;
    // }
    dispatchList({ type: "item-created", listIndex, item: { id, ...values } });
    toast.success("Item Create succsess");
    formRef.current?.reset();
    modalRef.current?.close();
  };
  const validateTitel=(title:string):boolean=>{
    if (title.length===0) {
      return false
    }
  }

  return (
    <FormModal
      // onReset={handleFormReset}
      modalRef={modalRef}
      heading="create new item"
      onSubmit={handelFormSubmit}
    >
      <TextInput label="titel" name="title" type="text" />
    </FormModal>
  );
}
