import food from "../assets/imgs/img1.png";
export default function FoodCard({ size }) {
  return (
    <div className="">
      {size === "small" ? (
        <div className="w-[280px] h-[380px] bg-white shadow-md flex flex-col border shadow-neutral-400 rounded-2xl">
          <div className=" h-4/6 flex justify-center items-center border-b">
            <div className="w-36 h-36 rounded-full overflow-hidden ">
              <img src={food} className="w-36 h-36 object-cover" />
            </div>
          </div>
          <div className="h-1/6 p-4 mt-6">
            <p className="text-center inria-sans-bold-italic  text-md">
              Bánh Mì
            </p>
            <div className="flex justify-between items-center ">
              <p className="text-center inria-sans-light-italic text-md">
                Giá: 20.000đ
              </p>
              <button className=" bg-primary-500 text-slate-500 border font-semibold rounded-lg p-2 mt-2">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[380px] border h-[500px] bg-white shadow-md flex flex-col shadow-neutral-400 rounded-2xl">
          <div className=" h-4/5  flex justify-center items-center border-b">
            <div className="w-52 h-52 rounded-full overflow-hidden ">
              <img src={food} className="w-52 h-52 object-cover" />
            </div>
          </div>
          <div className="h-1/6 p-4">
            <p className="text-center inria-sans-bold-italic  text-lg">
              Bánh Mì
            </p>
            <div className="flex justify-between items-center ">
              <p className="text-center inria-sans-light-italic text-md">
                Giá: 20.000đ
              </p>
              <button className=" bg-primary-500 text-slate-500 border font-semibold rounded-lg p-2 mt-2">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
