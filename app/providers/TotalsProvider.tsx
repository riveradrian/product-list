"use client";

import * as React from "react";

type State = Record<string, { quantity: number }>;
type Action =
  | {
      type: "SET";
      payload: { quantity: number; id: string };
    }
  | {
      type: "ADD" | "SUBTRACT";
      payload: { id: string };
    };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET":
      return action.payload.quantity > 0
        ? {
            ...state,
            [action.payload.id]: {
              quantity: action.payload.quantity,
            },
          }
        : Object.fromEntries(
            Object.entries(state).filter(([id]) => id !== action.payload.id)
          );

    case "ADD":
      return {
        ...state,
        [action.payload.id]: {
          quantity: (state[action.payload.id]?.quantity ?? 0) + 1,
        },
      };

    case "SUBTRACT":
      return state[action.payload.id]?.quantity - 1 > 0
        ? {
            ...state,
            [action.payload.id]: {
              quantity: (state[action.payload.id]?.quantity ?? 0) - 1,
            },
          }
        : Object.fromEntries(
            Object.entries(state).filter(([id]) => id !== action.payload.id)
          );

    default:
      return state;
  }
};

const TotalsContext = React.createContext<{
  items: State;
  dispatch: React.Dispatch<Action>;
}>({ items: {}, dispatch: () => {} });

export const useTotals = () => {
  const context = React.useContext(TotalsContext);

  if (context === undefined) {
    throw new Error("useTotals must be used within a TotalsProvider");
  }

  return {
    items: context.items,
    add: (id: string) => context.dispatch({ type: "ADD", payload: { id } }),
    subtract: (id: string) =>
      context.dispatch({ type: "SUBTRACT", payload: { id } }),
    set: (id: string, quantity: number) =>
      context.dispatch({ type: "SET", payload: { id, quantity } }),
  };
};

const TotalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, dispatch] = React.useReducer(reducer, {});

  return (
    <TotalsContext.Provider value={{ items, dispatch }}>
      {children}
    </TotalsContext.Provider>
  );
};

export default TotalsProvider;
