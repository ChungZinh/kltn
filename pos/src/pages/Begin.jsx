import { Card } from "flowbite-react";
import logo from "../assets/imgs/logo.png";

export default function Begin() {
  return (
    <div className="mx-auto max-w-screen-lg h-screen p-8 border shadow-md bg-slate-500">
      <div className="absolute">
        <img src={logo} className="w-24 " alt="logo" />
      </div>
      <div className="flex justify-center items-center h-full space-x-8">
        <Card href="/home" className="min-w-64 min-h-80 flex justify-center items-center">
          <h1 className="text-4xl font-semibold text-center">Ăn tại chỗ</h1>
        </Card>
        <Card href="/home" className="min-w-64 min-h-80 flex justify-center items-center">
          <h1 className="text-4xl font-semibold text-center">Mua mang đi</h1>
        </Card>
      </div>
    </div>
  );
}
