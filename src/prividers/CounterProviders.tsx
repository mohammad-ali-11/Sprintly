import { CounterContext } from "@/context/counter-context";
import { type PropsWithChildren, type ReactNode, useState } from "react";


type props = PropsWithChildren;
export default function CounterProviders({ children }: props): ReactNode {
  const [count, setCount] = useState<number>(0);
  const increment = (): void => {
    setCount((old) => old + 1);
  };
  const descrement = (): void => {
    setCount((old) => old - 1);
  };
  const reset = (): void => {
    setCount(0);
  };
  return (
    <CounterContext value={{ count, increment, descrement, reset }}>
      {children}
    </CounterContext>
  );
}
