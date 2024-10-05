import { Button, Carousel } from "flowbite-react";
import logo from "../assets/imgs/logo.png";
import { GiForkKnifeSpoon, GiPaperTray } from "react-icons/gi";
import { RiDrinksFill } from "react-icons/ri";
import bg from "../assets/imgs/bg1.jpg";
import FoodCard from "../components/FoodCard";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
export default function Home() {
  return (
    <div className="mt-[80px]">
      {/* SLIDER */}

      <div className="w-full h-[600px] ">
        <Carousel leftControl=" " rightControl=" ">
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
            className="rounded-none"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>

      {/* GIOI THIEU */}

      <div className="w-full h-[400px] flex justify-center items-center gap-[150px] ">
        <div className="p-12 w-[250px] h-[250px] flex justify-center items-center rounded-xl shadow-md shadow-neutral-400 bg-slate-400">
          <img src={logo} alt="" className="w-[150px]" />
        </div>
        <div className="space-y-8">
          <h1 className="text-3xl ">Chào mừng bạn đến với canteen IUH</h1>
          <div className="flex gap-6">
            <div className="w-[100px] h-[100px] rounded-full bg-slate-200 flex justify-center hover:bg-slate-400 duration-500 items-center border border-slate-600 ">
              <GiForkKnifeSpoon className="w-10 h-10 hover:w-12 hover:h-12 duration-300" />
            </div>
            <div className="w-[100px] h-[100px] rounded-full bg-slate-200 flex justify-center hover:bg-slate-400 duration-500 items-center border border-slate-600">
              <RiDrinksFill className="w-10 h-10 hover:w-12 hover:h-12 duration-300" />
            </div>
            <div className="w-[100px] h-[100px] rounded-full bg-slate-200 flex justify-center hover:bg-slate-400 duration-500 items-center border border-slate-600">
              <GiPaperTray className="w-10 h-10 hover:w-12 hover:h-12 duration-300" />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg ">
              Canteen IUH là nơi cung cấp các món ăn ngon, chất lượng và giá cả
              phải chăng
            </p>
            <button className="bg-slate-400 text-white px-4 py-2 rounded-md hover:bg-slate-500 duration-300">
              Đặt món ngay
            </button>
          </div>
        </div>
      </div>

      {/* MENU */}
      <div>
        <div className="mt-[100px]">
          <h1 className="text-center text-6xl font-playwrite mb-[50px]">
            Menu
          </h1>
        </div>
        <div
          className="w-full h-[780px] mt-[20px]  bg-opacity-70 backdrop-blur-sm"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className=" p-8">
            <div className="flex justify-center items-center gap-8">
              <div className="w-[200px] h-[40px] bg-slate-400 font-semibold shadow-md shadow-neutral-400 flex justify-center items-center rounded-lg">
                <p>Món phụ</p>
              </div>
              <div className="w-[200px] h-[40px] bg-slate-400 font-semibold shadow-md shadow-neutral-400 flex justify-center items-center rounded-lg">
                <p>Món chính</p>
              </div>
              <div className="w-[200px] h-[40px] bg-slate-400 font-semibold shadow-md shadow-neutral-400 flex justify-center items-center rounded-lg">
                <p>Thức uống</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex justify-center items-center gap-12 mt-8">
              <FoodCard />
              <FoodCard />
              <FoodCard />
            </div>
            <div className="flex justify-center items-center mt-6 gap-4">
              <HiArrowLeftCircle className="w-12 h-12 text-white bg-slate-400 rounded-full hover:bg-slate-500 duration-300" />
              <HiArrowRightCircle className="w-12 h-12 text-white bg-slate-400 rounded-full hover:bg-slate-500 duration-300" />
            </div>
            <div className="flex justify-center items-center mt-4">
              <Button className="bg-slate-400 px-4 rounded-md hover:bg-slate-500 duration-300 text-black">
                Xem thêm
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* SAN PHAM BAN CHAY */}
      <div className="mt-[100px] mb-[100px]">
        <h1 className="text-center text-6xl font-playwrite mb-[80px]">
          Sản phẩm bán chạy
        </h1>
        <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-y-10 mt-[50px]">
          <FoodCard size="small" />
          <FoodCard size="small" />
          <FoodCard size="small" />
          <FoodCard size="small" />
          <FoodCard size="small" />
          <FoodCard size="small" />
          <FoodCard size="small" />
          <FoodCard size="small" />
        </div>
      </div>
    </div>
  );
}
