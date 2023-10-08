import * as React from "react";
import Image from "next/image";
import ShoppingItemCardQuantity from "./ShoppingItemCardQuantity";
import { Product } from "@/app/mocks/initialData";
import DynamicTitle from "./DynamicTitle";

interface IProps {
  product: Product;
  textSize: string;
}

export default function ShoopingItemCard(props: IProps) {
  const { id, title, description, image, price } = props.product;

  return (
    <div className="flex flex-col justify-between p-4 border rounded gap-4 shadow-sm transition ease-in-out hover:scale-[1.03] duration-300">
      <div className="flex flex-col gap-4">
        <figure>
          <Image
            className="relative"
            src={image}
            alt="Image product"
            width={600}
            height={50}
            priority
          />
        </figure>
        <DynamicTitle title={title} textSize={props.textSize} />

        <div className="flex items-center gap-8">
          <span>${price}</span>
          <div className="flex gap-1 border rounded-md p-2">
            <ShoppingItemCardQuantity id={id} />
          </div>
        </div>
        <p className="text-gray-500 font-light mb-2">{description}</p>
      </div>
      <div className="flex flex-col gap-3">
        <button className="bg-slate-900 text-slate-50 rounded-md p-3 hover:bg-green-800">
          Add to cart
        </button>
        <button className="border border-slate-900 rounded-md p-3 hover:ring-1 hover:ring-inset hover:ring-green-800 hover:text-green-800">
          Learn more
        </button>
      </div>
    </div>
  );
}
