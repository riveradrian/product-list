"use client";
import { useTotals } from "@/app/providers/TotalsProvider";
import * as React from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";

const ShoppingItemCardQuantity = ({ id }: { id: string }) => {
  const { items, set, subtract, add } = useTotals();

  return (
    <>
      <button onClick={() => subtract(id)}>
        <HiMinus className="stroke-current shrink-0" />
      </button>
      <input
        type="number"
        name="price"
        id="price"
        value={items[id]?.quantity || 0}
        onChange={(e) => {
          const quantity = parseInt(e.currentTarget.value);

          if (isNaN(quantity)) {
            return;
          }

          set(id, quantity);
        }}
        className="w-16 text-center px-4 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"
        placeholder="0"
      />
      <button onClick={() => add(id)}>
        <HiPlus className="stroke-current shrink-0" />
      </button>
    </>
  );
};

export default ShoppingItemCardQuantity;
