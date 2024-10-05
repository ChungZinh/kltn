import { TextInput } from "flowbite-react";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <h1 className="text-center text-4xl font-playwrite mb-[80px]">
          Đăng Nhập
        </h1>
        <form className="space-y-8 w-[400px] border p-6 py-12 rounded-md">
          {/* Email Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>

            <TextInput label="Họ tên" placeholder="Nhập email của bạn" />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <TextInput
              label="Email"
              placeholder="Nhập password của bạn"
              rightIcon={showPassword ? LuEye : LuEyeOff}
            />
          </div>
          {/* Submit Button */}
          <div className="text-center ">
            <button
              type="submit"
              className="w-full bg-slate-400 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white  hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-slate-600 duration-300"
            >
              Đăng Nhập
            </button>

            <div className="mt-4 text-sm">
              <span className="text-slate-400">Bạn chưa có tài khoản?</span>
              <a href="/sign-up" className="text-slate-600">
                Đăng ký
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
