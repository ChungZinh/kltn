import { HR } from "flowbite-react";
import bg2 from "../assets/imgs/bg4.png";

export default function Contact() {
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
          Liên Hệ
        </h1>
      </div>

      <div className="">
        {/* Google Map */}
        <div className="h-[500px] mb-8">
          <iframe
            className="w-full h-full"
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.858237983225!2d106.68426511163688!3d10.822158889284907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174deb3ef536f31%3A0x8b7bb8b7c956157b!2sIndustrial%20University%20of%20Ho%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1726060336215!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="  p-6  rounded-lg max-w-screen-xl mx-auto flex justify-center items-center gap-12 my-[100px]">
          <div className="w-1/2 border rounded-md p-4">
            <h1 className="text-2xl text-center  font-semibold">Liên Hệ</h1>
            <HR.Trimmed />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-4 border rounded-md space-y-2 ">
                <p className="font-semibold">Địa chỉ chúng tôi</p>
                <p className="text-sm">
                  12 Nguyễn Văn Bảo, Phường 4, Gò Vấp, Hồ Chí Minh, Vietnam
                </p>
              </div>

              <div className="p-4 border rounded-md space-y-2 ">
                <p className="font-semibold">Email chúng tôi</p>
                <p className="text-sm">dhcn@iuh.edu.vn</p>
              </div>

              <div className="p-4 border rounded-md space-y-2 ">
                <p className="font-semibold">Số điện thoại</p>
                <p className="text-sm">02838940390</p>
              </div>
              <div className="p-4 border rounded-md space-y-2 ">
                <p className="font-semibold">Thời gian làm việc</p>
                <p className="text-sm">Thứ 2 - Thứ 6: 8:00 - 22:00</p>
                <p className="text-sm">Thứ 7 - Chủ Nhật: 7:00 - 18:00</p>
              </div>
            </div>
          </div>

          <div className="w-1/2 border rounded-md p-4">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Gửi thắc mắc cho chúng tôi
            </h2>
            <HR.Trimmed />
            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Họ tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Nhập họ tên của bạn"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Nhập email của bạn"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Câu hỏi
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Nhập câu hỏi của bạn"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-slate-400 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white  hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-slate-600 duration-300"
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
