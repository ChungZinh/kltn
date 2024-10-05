import { useState } from "react";
import logo from "../assets/imgs/logo.png";
import CardProduct from "../assets/components/CardProduct";
import CardOrder from "../assets/components/CardOrder";

const categories = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Drinks",
  "Desserts",
];

const products = [
  {
    id: 1,
    name: "Burger",
    category: "Lunch",
    price: 10,
  },
  {
    id: 2,
    name: "Pizza",
    category: "Dinner",
    price: 15,
  },
  {
    id: 3,
    name: "Pasta",
    category: "Dinner",
    price: 12,
  },
  {
    id: 4,
    name: "Coke",
    category: "Drinks",
    price: 2,
  },
  {
    id: 5,
    name: "Ice Cream",
    category: "Desserts",
    price: 5,
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col justify-between h-screen border shadow-md bg-slate-50">
      <div className=" mx-auto max-w-screen-lg px-8 ">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <div className="mt-8 flex ">
          <div className="w-1/6 border-r px-2">
            <div className="flex flex-col gap-4">
              {categories.map((category) => (
                <div
                  key={category}
                  className={`w-full  rounded-md duration-500 shadow-md ${
                    selectedCategory === category
                      ? "bg-slate-500 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className="text-sm font-semibold  py-2 gap-2 h-full w-full"
                  >
                    <p className="text-center">{category}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="w-5/6  px-4 grid grid-cols-3 gap-y-8 gap-x-8 overflow-y-scroll max-h-[800px]">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
      </div>
      <div className="h-1/5 border-t p-4">
        <div className="">
          <p className="text-lg font-semibold">List of Orders</p>
        </div>
        <div className="mt-2 max-h-[120px] overflow-y-scroll">
          <CardOrder />
          <CardOrder />
          <CardOrder />
        </div>

        <div className="mt-4 flex items-center gap-8">
          <button className="w-full bg-red-500 text-white rounded-md py-2">
            Clear
          </button>
          <button className="w-full bg-slate-500 text-white rounded-md py-2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
