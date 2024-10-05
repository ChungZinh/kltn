import { HiPlus } from "react-icons/hi";
import food from "../assets/imgs/img1.png";
export default function FoodCard() {
  return (
    <div className="flex flex-col justify-center items-center w-[200px] h-[350px]">
      <div className="w-[200px] h-[250px] bg-slate-400 relative flex  rounded-xl shadow-md shadow-neutral-300">
        <div className="absolute top-[-60px] flex justify-center items-center w-[200px]">
          <div className="w-32 h-32 rounded-full overflow-hidden  ">
            <img src={food} alt="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col self-end h-[200px] justify-center items-center space-y-2 p-4">
          <h3 className="text-md font-semibold text-center ">
            Spicy seasoned seafood noodles
          </h3>
          <p className="text-sm font-light">800 gr</p>
          <p className="text-sm font-light">Rp 2.900</p>
        </div>
        <div className="absolute right-1 bottom-1">
          <button className="w-[40px] h-[40px] py-2 bg-slate-600 text-white rounded-xl justify-center items-center flex">
            <HiPlus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
