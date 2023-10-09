"use client";
import { ChangeEvent, useState } from "react";
import ShoopingItemCard from "./components/Card/ShoppingItemCard";
import { Product } from "./mocks/initialData";
import { mockProducts } from "./mocks/initialData";
import { FaFont } from "react-icons/fa6";
import { ListItems } from "./components/ListItems/ListItems";

interface TextSizeState {
  value: number;
  label: string;
}

export default function Home() {
  const [textSize, setTextSize] = useState<TextSizeState>({
    value: 1,
    label: "text-base",
  });

  const textSizes: TextSizeState[] = [
    { value: 0, label: "text-sm" },
    { value: 1, label: "text-base" },
    { value: 2, label: "text-lg" },
    { value: 3, label: "text-xl" },
    { value: 4, label: "text-2xl" },
    { value: 5, label: "text-3xl" },
  ];

  const handleTextSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    const selectedSize = textSizes.find((size) => size.value === newValue);

    if (selectedSize) {
      setTextSize(selectedSize);
    }
  };

  return (
    <main className="container mx-auto flex min-h-screen flex-col py-20 px-4">
      <div className="flex flex-col items-center mb-16 gap-2">
        <p className="text-center uppercase text-gray-400 font-semibold">
          Style and comfort
        </p>
        <h2 className="text-center capitalize text-3xl font-bold text-gray-800 mb-4">
          Discover your style with our clothing collection
        </h2>
        <p className="text-center w-full text-gray-400 lg:w-[860px]">
          Explore our wide range of high-quality clothing designed to provide
          you with unparalleled style and comfort. From elegant suits to casual
          and sportswear, we have everything you need to look and feel great on
          any occasion.
        </p>
      </div>
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
        <div className="w-60">
          <label className="block mb-2 font-medium text-gray-900">
            Tamaño del titulo
          </label>
          <div className="flex items-center gap-2">
            <FaFont />
            <input
              id="default-range"
              type="range"
              min="0"
              max="5"
              className="w-full h-2 bg-gray-200 accent-green-800 rounded-lg appearance-none cursor-pointer"
              value={textSize.value.toString()}
              onChange={handleTextSizeChange}
            />
            <FaFont size={24} />
          </div>
        </div>
        <ListItems />
      </div>
      <div className="grid grid-cols-1 gap-4 my-6 md:grid-cols-2 lg:grid-cols-4">
        {mockProducts.map((product: Product) => (
          <ShoopingItemCard
            product={product}
            key={product.id}
            textSize={textSize.label}
          />
        ))}
      </div>
    </main>
  );
}
