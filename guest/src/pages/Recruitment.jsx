import bg2 from "../assets/imgs/bg4.png";

export default function Recruitment() {
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
          Tuyển Dụng
        </h1>
      </div>
      <div className="">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Cơ Hội Nghề Nghiệp Tại Căng Tin Trường Đại học Công nghiệp TP. Hồ
            Chí Minh
          </h1>

          <p className="mb-4">
            Bạn có đam mê trong lĩnh vực ẩm thực và dịch vụ khách hàng? Hãy gia
            nhập đội ngũ căng tin của Trường Đại học Công nghiệp TP. Hồ Chí
            Minh, nơi bạn sẽ có cơ hội làm việc trong môi trường thân thiện,
            chuyên nghiệp, và đầy năng động. Chúng tôi luôn tìm kiếm những ứng
            viên nhiệt huyết, mong muốn mang lại những trải nghiệm tốt nhất cho
            sinh viên và nhân viên nhà trường.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Vị Trí Đang Tuyển Dụng
          </h2>

          <div className="job-position mb-6">
            <h3 className="text-xl font-bold mb-2">
              Nhân Viên Phục Vụ Căng Tin
            </h3>
            <p>Mô tả công việc:</p>
            <ul className="list-disc list-inside ml-4 mb-2">
              <li>Phục vụ đồ ăn và thức uống cho khách hàng.</li>
              <li>Hỗ trợ khách hàng trong việc chọn món và thanh toán.</li>
              <li>Giữ gìn vệ sinh khu vực làm việc.</li>
            </ul>
            <p>Yêu cầu:</p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Nhanh nhẹn, chăm chỉ, có tinh thần trách nhiệm.</li>
              <li>Kỹ năng giao tiếp tốt, thân thiện với khách hàng.</li>
            </ul>
          </div>

          <div className="job-position mb-6">
            <h3 className="text-xl font-bold mb-2">Nhân Viên Bếp</h3>
            <p>Mô tả công việc:</p>
            <ul className="list-disc list-inside ml-4 mb-2">
              <li>Chuẩn bị và chế biến các món ăn theo thực đơn.</li>
              <li>Đảm bảo chất lượng và vệ sinh thực phẩm.</li>
            </ul>
            <p>Yêu cầu:</p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Có kinh nghiệm nấu ăn là một lợi thế.</li>
              <li>Chăm chỉ, tỉ mỉ, có trách nhiệm trong công việc.</li>
            </ul>
          </div>

          <div className="job-position mb-6">
            <h3 className="text-xl font-bold mb-2">Nhân Viên Thu Ngân</h3>
            <p>Mô tả công việc:</p>
            <ul className="list-disc list-inside ml-4 mb-2">
              <li>Quản lý quầy thanh toán và xử lý giao dịch.</li>
              <li>Sử dụng hệ thống thanh toán không dùng tiền mặt.</li>
            </ul>
            <p>Yêu cầu:</p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Trung thực, cẩn thận trong công việc.</li>
              <li>Kỹ năng sử dụng máy tính cơ bản.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Lợi Ích Khi Làm Việc</h2>
          <ul className="list-disc list-inside ml-4 mb-6">
            <li>Lương và phúc lợi hấp dẫn.</li>
            <li>Môi trường làm việc thân thiện và năng động.</li>
            <li>Cơ hội phát triển bản thân và nâng cao kỹ năng.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Cách Thức Ứng Tuyển</h2>
          <p className="mb-6">
            Vui lòng gửi hồ sơ (CV, thư xin việc, và các chứng chỉ liên quan)
            đến địa chỉ email:{" "}
            <a
              href="mailto:tuyendung-canteen@iuh.edu.vn"
              className="text-blue-500"
            >
              tuyendung-canteen@iuh.edu.vn
            </a>{" "}
            hoặc nộp trực tiếp tại văn phòng căng tin của trường.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Liên Hệ</h2>
          <p>
            <strong>Địa chỉ:</strong> Căng tin, Trường Đại học Công nghiệp TP.
            Hồ Chí Minh, Số 12 Nguyễn Văn Bảo, Quận Gò Vấp, TP. Hồ Chí Minh
            <br />
            <strong>Điện thoại:</strong> (028) 38940390
            <br />
            <strong>Email:</strong>{" "}
            <a
              href="mailto:tuyendung-canteen@iuh.edu.vn"
              className="text-blue-500"
            >
              tuyendung-canteen@iuh.edu.vn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
