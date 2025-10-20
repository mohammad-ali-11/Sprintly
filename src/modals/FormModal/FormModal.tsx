import {
  type ComponentProps,
  type FormEvent,
  type ReactNode,
  type RefObject,
  use,
  useRef,
} from "react";

import { toast } from "react-toastify";

import clsx from "clsx";

import { BoardContext } from "@/contect/board-context";

import Button from "@/components/Button/Button";
import TextInput from "@/components/TextInput/TextInput";

import Modal from "../Modal/Modal";

import styles from "./FormModal.module.css";

type ModalProps = {
  modalRef: ComponentProps<typeof Modal>["ref"];
  heading: ComponentProps<typeof Modal>["heading"];
};

type FormProps = Omit<ComponentProps<"form">, "ref"> & {
  formRef?: RefObject<HTMLFormElement | null>;
  extraActions?: ReactNode;
};

type props = ModalProps & FormProps;

export default function FormModal({
  modalRef,
  heading,
  formRef,
  extraActions,
  children,
  ...otherProps
}: props): ReactNode {
  const internalFormRef= useRef<HTMLFormElement>(null);

  const handelCancelItemClick = (): void => {
    modalRef.current?.close();
  };
  const handleCloseModal = (): void => {
    internalFormRef.current?.reset();
  };

  return (
    <Modal
      ref={modalRef}
      heading={heading}
      onClose={handleCloseModal}
      contentClassName={styles["form-modal"]}
    
    >
      <form ref={(node)=>{
        internalFormRef.current=node
        if (formRef) {
            formRef.current=node
        }
      }} {...otherProps}> 
        {children}
        <div className={styles.actions}>
            {extraActions}
          <Button color="primary" onClick={(e) => e.stopPropagation()}>
            submit
          </Button>
          <Button onClick={handelCancelItemClick} type="reset" className={styles.cancel}>
            cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}
