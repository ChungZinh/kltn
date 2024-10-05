import { Button } from "flowbite-react";
import {
  HiArrowCircleUp,
  HiClipboardList,
  HiCurrencyDollar,
  HiUsers,
} from "react-icons/hi";

export default function Dashboard() {
  return (
    <div className="h-full bg-slate-200 p-6 flex gap-6">
      <div className="w-2/3 ">
        <div className="border-b border-b-slate-400 pb-6 ">
          <h1 className="text-3xl font-semibold ">Dashboard</h1>
          <p className="text-slate-500">Tuesday, 2nd March 2021</p>
        </div>
        <div className="flex gap-6 mt-4">
          {/* TOTAL REVENUE */}
          <div className="p-4 bg-slate-600 w-1/3 rounded-md shadow-md flex flex-col justify-between gap-4">
            <div className="flex gap-2">
              <div className="flex w-10 h-10 justify-center items-center bg-slate-400 rounded-md">
                <HiCurrencyDollar className="text-slate-300" size={30} />
              </div>
              <div className="flex items-center">
                <p className="text-lime-500 fon font-semibold">+5%</p>
                <HiArrowCircleUp size={30} className="text-lime-500" />
              </div>
            </div>
            <div className="">
              <h1 className="text-3xl font-semibold text-slate-300">
                $ 1,204.00
              </h1>
            </div>
            <div className="">
              <p className="text-slate-300">Total Revenue</p>
            </div>
          </div>

          {/* TOTAL DISH ORDERS */}
          <div className="p-4 bg-slate-600 w-1/3 rounded-md shadow-md flex flex-col justify-between gap-4">
            <div className="flex gap-2">
              <div className="flex w-10 h-10 justify-center items-center bg-slate-400 rounded-md">
                <HiClipboardList className="text-slate-300" size={30} />
              </div>
              <div className="flex items-center">
                <p className="text-red-500 fon font-semibold">-5%</p>
                <HiArrowCircleUp size={30} className="text-red-500" />
              </div>
            </div>
            <div className="">
              <h1 className="text-3xl font-semibold text-slate-300">24,500</h1>
            </div>
            <div className="">
              <p className="text-slate-300">Total Dish Orders</p>
            </div>
          </div>

          {/* TOTAL CUSTOMERS */}
          <div className="p-4 bg-slate-600 w-1/3 rounded-md shadow-md flex flex-col justify-between gap-4">
            <div className="flex gap-2">
              <div className="flex w-10 h-10 justify-center items-center bg-slate-400 rounded-md">
                <HiUsers className="text-slate-300" size={30} />
              </div>
              <div className="flex items-center">
                <p className="text-lime-500 fon font-semibold">+5%</p>
                <HiArrowCircleUp size={30} className="text-lime-500" />
              </div>
            </div>
            <div className="">
              <h1 className="text-3xl font-semibold text-slate-300">1,204</h1>
            </div>
            <div className="">
              <p className="text-slate-300">Total Customers</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="border-b border-b-slate-400 pb-6 mt-6">
            <h1 className="text-3xl font-semibold ">Recent Orders</h1>
            <p className="text-slate-500">Recent orders from customers</p>
          </div>
          <div className="mt-6">
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="flex justify-between items-center">
                <div className="">
                  <h1 className="text-xl font-semibold">Order #1234</h1>
                  <p className="text-slate-500">2 items</p>
                </div>
                <div className="">
                  <p className="text-slate-500">2 mins ago</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-slate-400 rounded-md"></div>
                    <div className="">
                      <h1 className="text-lg font-semibold">Chicken Burger</h1>
                      <p className="text-slate-500">1 x $ 10.00</p>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-slate-500">$ 10.00</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="w-10 h-10 bg-slate-400 rounded-md"></div>
                      <div className="">
                        <h1 className="text-lg font-semibold">
                          Chicken Burger
                        </h1>
                        <p className="text-slate-500">1 x $ 10.00</p>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-slate-500">$ 10.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button className="bg-slate-600">View Order</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="border-b border-b-slate-400 pb-6">
            <h1 className="text-3xl font-semibold ">Recent Customers</h1>
            <p className="text-slate-500">Recent customers who ordered</p>
          </div>
          <div className="mt-6">
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-slate-400 rounded-md"></div>
                  <div className="">
                    <h1 className="text-lg font-semibold">John Doe</h1>
                    <p className="text-slate-500">
                      <span className="text-slate-400">Order #1234</span>
                    </p>
                    <p className="text-slate-500">2 items</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 bg-slate-100">
        {/* CHART */}
        <div className="">

        </div>
      </div>
    </div>
  );
}
