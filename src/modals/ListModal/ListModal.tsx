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

import type { ListType } from "@/types/list";

import FormModal from "../FormModal/FormModal";

type props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {};
type values = Omit<ListType, "id" | "items">;
export default function ListModal({ modalRef }: props): ReactNode {
  const formRef = useRef<HTMLFormElement>(null);
  const { dispatchList } = use(BoardContext);

  const handelFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values: values = {
      title: formData.get("title") as string,
    };
    console.log(values, "d");
    if (!validateTitel(values.title)) {
      return;
    }
    const id = globalThis.crypto.randomUUID();
    // const title = formData.get("title") as string;

    // if (!title || title.trim() === "") {
    //   toast.error("لطفاً عنوان را وارد کنید!");
    //   return;
    // }
    dispatchList({ type: "list-created", list: { id, items: [], ...values } });
    console.log(formData, "s");

    toast.success("list Create succsess");
    formRef.current?.reset();
    modalRef.current?.close();
  };
  const validateTitel = (title: string): boolean => {
    if (title.length === 0) {
      return false;
    }
     return true;
  };

  return (
    <FormModal
      // onReset={handleFormReset}
      modalRef={modalRef}
      heading="create new list"
      onSubmit={handelFormSubmit}
    >
      <TextInput label="titel" name="title" type="text" />
    </FormModal>
  );
}
