import { FloatingLabel, TextInput } from "flowbite-react";
import bg2 from "../assets/imgs/bg4.png";
import { HiSearch } from "react-icons/hi";
import FoodCard from "../components/FoodCard";
export default function Product() {
  return (
    <div className="">
      <div
        className="w-screen h-[400px] mt-[80px] flex justify-center items-center  bg-opacity-70 backdrop-blur-sm"
        style={{
          backgroundImage: `url(${bg2})`,
          // backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-center text-6xl font-playwrite mb-[80px]">
          Tất cả sản phẩm
        </h1>
      </div>

      {/* SAN PHAM*/}
      <div className="max-w-screen-2xl  mx-auto mb-[80px]">
        <div className="max-w-screen-md mx-auto">
          <div className="relative">
            <FloatingLabel
              variant="filled"
              label="Tìm kiếm"
              className="w-full"
            />
            <button className="absolute right-0 top-0 h-full w-[60px] flex justify-center items-center rounded-tr-md bg-slate-600 text-white">
              <HiSearch className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className=" w-full flex justify-between mt-[50px]">
          <div className="w-1/4">
            {/* CATEGOries */}
            <div className="flex flex-col gap-4 my-4 ">
              <button className="p-4  text-slate-600 hover:bg-slate-200 duration-300 border">
                Món phụ
              </button>
              <button className="p-4  text-slate-600 hover:bg-slate-200 duration-300  border ">
                Món chính
              </button>
              <button className="p-4  text-slate-600 hover:bg-slate-200 duration-300  border">
                Thức uống
              </button>
            </div>
          </div>
          <div className="w-3/4 flex justify-center flex-wrap gap-[50px] ">
            <FoodCard size={"small"} />
            <FoodCard size={"small"} />
            <FoodCard size={"small"} />
            <FoodCard size={"small"} />
            <FoodCard size={"small"} />
            <FoodCard size={"small"} />
          </div>
        </div>
      </div>
    </div>
  );
}
