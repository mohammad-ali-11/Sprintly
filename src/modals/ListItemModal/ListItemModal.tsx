import {
  type ComponentProps,
  type FormEvent,
  type ReactNode,
  use,
  useRef,
} from "react";

import { toast } from "react-toastify";

import clsx from "clsx";

import { BoardContext } from "@/contect/board-context";


import styles from "./ListItemModal.module.css";
import TextInput from "@/components/TextInput/TextInput";
import Button from "@/components/Button/Button";
import Modal from "../Modal/Modal";

type props = Omit<ComponentProps<typeof Modal>, "children" | "heading"> & {
  listIndex: number;
};
export default function ListItemModal({
  ref,
  listIndex,
  contentClassName,
  ...otherProps
}: props): ReactNode {
  const formRef = useRef<HTMLFormElement>(null);
  const { dispatchList } = use(BoardContext);

  const handelFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = globalThis.crypto.randomUUID();
    const title = formData.get("title") as string;
    if (!title||title.trim()==='') {
    toast.error("لطفاً عنوان را وارد کنید!");
    return
    }
    dispatchList({ type: "item-created", listIndex, item: { id, title } });
    toast.success("Item Create succsess");
    formRef.current?.reset()
    ref.current?.close();
    
  };

  const handelCancelItemClick = (): void => {
    ref.current?.close();
  };
  const handleCloseModal = (): void => {
    formRef.current?.reset();
  };

  return (
    <Modal
      ref={ref}
      heading="create new item"
      onClick={handleCloseModal}
      contentClassName={clsx(
        styles["create-list-item-modal"],
        contentClassName,
      )}
      {...otherProps}
    >
      <form onSubmit={handelFormSubmit} ref={formRef}>
        <TextInput label="titel" name="title" type="text" />
        <div className={styles.actions}>
          <Button color="primary" onClick={(e) => e.stopPropagation()}>
            submit
          </Button>
          <Button onClick={handelCancelItemClick} type="reset">
            cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}
