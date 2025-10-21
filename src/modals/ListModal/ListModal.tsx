import {
  type ComponentProps,
  type FormEvent,
  type ReactNode,
  use,
  useRef,
} from "react";

import { toast } from "react-toastify";

import { BoardContext } from "@/contect/board-context";

import Button from "@/components/Button/Button";
import TextInput from "@/components/TextInput/TextInput";

import type { ListType } from "@/types/list";

import FormModal from "../FormModal/FormModal";

type props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  listIndex?: number;
};
type values = Omit<ListType, "id" | "items">;

export default function ListModal({ modalRef, listIndex }: props): ReactNode {
  const formRef = useRef<HTMLFormElement>(null);

  const { dispatchList } = use(BoardContext);

  const handleRemoveButtonClick = (): void => {
    if (listIndex===undefined) {
      return
    }
    dispatchList({ type: "list-remove", listIndex });
    toast.success("list Remove succsess");
    modalRef.current?.close();
  };

  const handelFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values: values = {
      title: formData.get("title") as string,
    };
   
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
      extraActions={
        listIndex!==undefined&&(
          <Button
          type="button"
          variant="text"
          color="danger"
          onClick={handleRemoveButtonClick}
        >
          Remove
        </Button>
        )
      }
    >
      <TextInput label="titel" name="title" type="text" />
    </FormModal>
  );
}
