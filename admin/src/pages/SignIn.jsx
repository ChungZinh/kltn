import { Carousel, FloatingLabel, Label, TextInput } from "flowbite-react";

import slide from "../assets/imgs/slides/slide1.jpg";
import slide2 from "../assets/imgs/slides/slide2.jpg";

export default function SignIn() {
  return (
    <div className="p-28 h-screen bg-slate-200">
      <div className="h-full flex  bg-white rounded-lg shadow-md shadow-neutral-200">
        <div className="w-1/2 h-full bg-slate-300">
          <Carousel>
            <img src={slide} alt="slide" className="object-cover h-full" />
            <img src={slide2} alt="slide" className="object-cover  h-full" />
          </Carousel>
        </div>
        <div className="w-1/2 p-6 flex flex-col justify-center items-center space-y-[80px]">
          <div className="">
            <h1 className="text-center mt-10 text-4xl font-semibold text-slate-600">
              Sign In
            </h1>
            <p className="text-center mt-2 text-slate-400">
              Sign in to your account to continue
            </p>
          </div>

          <div className="lg:w-[500px] md:w-[250px] ">
            <div className="space-y-10">
              <FloatingLabel variant="outlined" className="" label="Username" />
              <FloatingLabel variant="outlined" className="" label="Password" />
            </div>
            <p className="text-slate-400 text-sm text-end">
              <a href="#" className="text-slate-600">
                Forgot Password?
              </a>
            </p>
            <div className="mt-10">
              <button className="w-full bg-slate-600 text-white py-2 rounded-lg">
                Sign In
              </button>
              <p className="text-slate-400 text-sm mt-4 text-center">
                Don't have an account?{" "}
                <a href="#" className="text-slate-600">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
