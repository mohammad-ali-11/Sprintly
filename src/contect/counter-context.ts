import { createContext } from "react";

type contextValue = {
  count: number;
  increment: () => void;
  descrement: () => void;
  reset: () => void;
};
export const CounterContext = createContext<contextValue>({
  count: 0,
  increment: () => {},
  descrement: () => {},
  reset: () => {},
});
