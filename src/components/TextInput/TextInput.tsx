import {useId, type ComponentProps, type ReactNode,} from "react";
import clsx from "clsx";
import styles from "./TextInput.module.css";

type props = ComponentProps<"input"> & {
  label: string;
};
export default function TextInput({
  className,
  label,
  ...otherProps
}: props): ReactNode {
  const id=useId()
  return (
    <div className={clsx(styles["text-input"], className)}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...otherProps} />
    </div>
  );
}
