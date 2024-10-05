import bg2 from "../assets/imgs/bg4.png";

export default function About() {
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
          Giới thiệu
        </h1>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <div className="max-w-7xl mx-auto p-8">
          {/* Section Title */}
          <h1 className="text-3xl font-bold text-center mb-8">
            Hệ Thống Quản Lý Căng Tin Không Dùng Tiền Mặt Trường Đại Học Công
            Nghiệp TP. Hồ Chí Minh
          </h1>

          {/* Introduction */}
          <p className="text-lg mb-6">
            Chào mừng bạn đến với hệ thống quản lý căng tin không dùng tiền mặt
            tại Trường Đại học Công nghiệp TP. Hồ Chí Minh, giải pháp hiện đại
            hóa quy trình mua sắm và thanh toán trong khuôn viên trường học. Hệ
            thống này giúp sinh viên, giảng viên và nhân viên dễ dàng quản lý
            các bữa ăn, đặt món trước, và thanh toán một cách nhanh chóng, an
            toàn thông qua các phương thức không dùng tiền mặt.
          </p>

          {/* Features Section */}
          <h2 className="text-2xl font-semibold mb-4">Tính Năng Nổi Bật:</h2>
          <ul className="list-disc list-inside space-y-3">
            <li className="text-lg">
              <strong>Quản Lý Thực Đơn:</strong> Theo dõi và chọn các món ăn
              theo thực đơn hàng ngày ngay trên website hoặc ứng dụng di động.
            </li>
            <li className="text-lg">
              <strong>Đặt Trước Món Ăn:</strong> Tiện lợi hơn với tính năng đặt
              món trước, giúp bạn tiết kiệm thời gian xếp hàng.
            </li>
            <li className="text-lg">
              <strong>Thanh Toán Không Dùng Tiền Mặt:</strong> Tích hợp các
              phương thức thanh toán hiện đại như ví điện tử, thẻ ngân hàng, và
              ZaloPay.
            </li>
            <li className="text-lg">
              <strong>Quét Mã QR:</strong> Lấy hóa đơn và nhận món ăn nhanh
              chóng chỉ với một lần quét mã QR.
            </li>
            <li className="text-lg">
              <strong>Báo Cáo Quản Lý:</strong> Hệ thống cung cấp các báo cáo
              chi tiết giúp nhà quản lý dễ dàng theo dõi và điều chỉnh hoạt động
              căng tin.
            </li>
          </ul>

          {/* Benefits Section */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Lợi Ích:</h2>
          <ul className="list-disc list-inside space-y-3">
            <li className="text-lg">
              <strong>Tiện Lợi & An Toàn:</strong> Hạn chế tiếp xúc tiền mặt,
              giảm rủi ro về vệ sinh và gian lận.
            </li>
            <li className="text-lg">
              <strong>Tiết Kiệm Thời Gian:</strong> Đặt món và thanh toán trước,
              không phải chờ đợi khi đến căng tin.
            </li>
            <li className="text-lg">
              <strong>Quản Lý Hiệu Quả:</strong> Đơn giản hóa quy trình quản lý
              căng tin với các công cụ hỗ trợ hiện đại.
            </li>
          </ul>

          {/* Conclusion */}
          <p className="text-lg mt-6">
            Hệ thống giúp trường nâng cao trải nghiệm người dùng, đồng thời tối
            ưu hóa hoạt động quản lý căng tin, mang lại sự tiện ích và an toàn
            cho tất cả mọi người.
          </p>
        </div>
      </div>
    </div>
  );
}
