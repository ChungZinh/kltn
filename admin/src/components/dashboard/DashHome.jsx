import { Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiMinus, HiPlus, HiSearch, HiViewBoards } from "react-icons/hi";
import FoodCard from "../FoodCard";
import food from "../../assets/imgs/img1.png";
export default function DashHome() {
  const [activeCategory, setActiveCategory] = useState("All");
  const orders = [
    {
      name: "Spicy seasoned...",
      price: 2.29,
      quantity: 2,
      total: 4.58,
      note: "Please, just a little bit spicy only.",
    },
    {
      name: "Salted pasta...",
      price: 2.69,
      quantity: 1,
      total: 2.69,
      note: "Order Note...",
    },
    {
      name: "Spicy instant noodles",
      price: 3.49,
      quantity: 3,
      total: 10.47,
      note: "Order Note...",
    },
    {
      name: "Healthy noodle...",
      price: 3.29,
      quantity: 1,
      total: 3.29,
      note: "Order Note...",
    },
    {
      name: "Healthy noodle...",
      price: 3.29,
      quantity: 1,
      total: 3.29,
      note: "Order Note...",
    },
    {
      name: "Healthy noodle...",
      price: 3.29,
      quantity: 1,
      total: 3.29,
      note: "Order Note...",
    },
    {
      name: "Healthy noodle...",
      price: 3.29,
      quantity: 1,
      total: 3.29,
      note: "Order Note...",
    },
  ];
  const categories = [
    "All",
    "Hot Dishes",
    "Cold Dishes",
    "Soup",
    "Grill",
    "Appetizer",
    "Dessert",
    "Drink",
  ];
  return (
    <div className="flex h-screen bg-slate-200 ">
      <div className=" w-3/5 p-6 overflow-y-scroll">
        <div className="flex justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-slate-700">
              Jaegar Resto
            </h1>
            <p className="font-light">Tuesday, 2 Feb 2021</p>
          </div>
          <div className="">
            <TextInput
              rightIcon={HiSearch}
              placeholder="Search for food, coffe, etc..."
            />
          </div>
        </div>
        <div className="mt-8 ">
          <div className="flex lg:space-x-8 md:space-x-4 border-b border-b-slate-300 ">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`text-neutral-700 font-semibold hover:text-neutral-400  duration-300 ${
                  activeCategory === category
                    ? "text-slate-600 border-b-4 pb-4 border-slate-600"
                    : "text-neutral-600 pb-4 "
                } ${index === 0 ? "ml-0" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-700">
                Choose Dishes
              </h2>
              <Select className="min-w-28">
                <option value="1">Dine in</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
            </div>
          </div>
          {/* LIST CARD */}
          <div className="mt-8 flex flex-wrap md:gap-4 lg:gap-8 justify-around">
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </div>
        </div>
      </div>
      <div className="w-2/5 flex flex-col justify-between bg-slate-400 rounded-l-xl shadow-md shadow-neutral-400  p-6">
        <div className="">
          <h2 className="text-xl font-bold mb-4">Orders #34562</h2>

          {/* Tab Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="bg-slate-300 px-4 py-2 rounded-full">
              Dine In
            </button>
            <button className="bg-slate-600 px-4 py-2 rounded-full">
              To Go
            </button>
            <button className="bg-slate-600 px-4 py-2 rounded-full">
              Delivery
            </button>
          </div>

          {/* Order Items */}
          <div className="flex text-base mb-4 border-b border-slate-500 pb-4">
            <div className="w-4/6">Item</div>
            <div className="w-1/6">Qty</div>
            <div className="w-1/6">Price</div>
          </div>

          {/* Order Item List */}
          <div className="space-y-4 overflow-y-scroll h-[640px]">
            {orders.map((order, index) => (
              <OrderItem
                key={index}
                name={order.name}
                price={order.price}
                quantity={order.quantity}
                total={order.total}
                note={order.note}
              />
            ))}
          </div>
        </div>

        {/* Discount and Subtotal */}
        <div className="">
          <div className="flex justify-between mt-4">
            <span>Discount</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between mt-2 font-bold">
            <span>Sub total</span>
            <span>$21.03</span>
          </div>

          {/* Payment Button */}
          <button className="bg-slate-600 shadow-md shadow-slate-600 hover:bg-slate-500 duration-500 text-center py-3 w-full rounded-lg mt-6 text-white font-semibold">
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

const OrderItem = ({ name, price, quantity, total, note }) => {
  return (
    <div className="flex gap-2 justify-center items-center bg-slate-600 border p-2 border-slate-500 rounded-md">
      <div className="flex flex-col w-4/6 ">
        <div className="">
          <div className="flex items-center gap-2">
            <img src={food} alt="Food" className="w-10 h-10 rounded-full" />
            <div className="">
              <p className="font-semibold text-slate-200">{name}</p>
              <p className="text-sm font-light text-slate-200"> ${price}</p>
            </div>
          </div>
          <TextInput placeholder="Add Note" className="mt-2" />
        </div>
      </div>
      <div className="w-2/6 space-y-4">
        <div className="flex  gap-1 justify-center items-center">
          <button className="w-6 h-6 bg-slate-400 text-white rounded-md flex justify-center items-center">
            <HiMinus className="w-4 h-4" />
          </button>
          <TextInput sizing="sm" value={quantity} className="w-8" />
          <button className="w-6 h-6 bg-slate-400 text-white rounded-md flex justify-center items-center">
            <HiPlus className="w-4 h-4" />
          </button>
        </div>

        <div className="flex justify-center mt-2">
          <p className="text-xl font-semibold text-slate-200">${total}</p>
        </div>
      </div>
    </div>
  );
};
