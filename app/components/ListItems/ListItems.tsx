import { mockProducts } from "@/app/mocks/initialData";
import { useTotals } from "@/app/providers/TotalsProvider";

export const ListItems = () => {
  const { items } = useTotals();
  const data = mockProducts;
  if (Object.keys(items).length === 0 && items.constructor === Object) return;
  return (
    <div className="flex flex-col items-start gap-0.5 w-full bg-slate-100 p-3 rounded-xl md:items-end md:w-1/3">
      {Object.entries(items).map(([id, item]) => (
        <li key={id} className="w-full flex items-center justify-between">
          <span>{data.find((p) => p.id === id)?.title}:</span>
          <span className="font-semibold">
            ${(data.find((p) => p.id === id)?.price ?? 0) * item.quantity}
          </span>
        </li>
      ))}
      <hr className="border-1 w-full border-slate-300 py-1" />
      <div className="flex justify-between w-full">
        <span>Total:</span>
        <span className="font-semibold">
          $
          {data.reduce(
            (acc, item) => acc + (items[item.id]?.quantity || 0) * item.price,
            0
          )}
        </span>
      </div>
    </div>
  );
};
