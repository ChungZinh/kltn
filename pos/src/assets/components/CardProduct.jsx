import { HiMinus, HiPlus } from "react-icons/hi";

export default function CardProduct() {
  return (
    <div className="w-[160px] h-[200px] flex flex-col shadow-md rounded-md">
      <div className="h-3/4">
        <div className="">
          <img
            src="https://via.placeholder.com/150"
            alt="product"
            className=" object-cover rounded-t-md"
          />
        </div>
      </div>
      <div className="h-1/4 flex justify-between items-center p-2 border-t">
        <div className="">
          <p className="text-xl font-semibold">Burger</p>
          <p>$10</p>
        </div>
        <div className="">
          <button className="bg-slate-600 text-white rounded-md hover:bg-slate-300 duration-300 px-2 py-2">
            <HiPlus className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
