import { HiMinus, HiPlus } from "react-icons/hi";

export default function CardOrder() {
  return (
    <div className="">
      <div className="flex justify-between items-center p-2 border-t">
        <div className="">
          <p className="text-sm font-semibold">Burger</p>
          <p>$10</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-slate-600 text-white rounded-md hover:bg-slate-300 duration-300 px-1 py-1">
            <HiMinus className="text-xl" />
          </button>
          <span className="px-2">1</span>
          <button className="bg-slate-600 text-white rounded-md hover:bg-slate-300 duration-300 px-1 py-1">
            <HiPlus className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
