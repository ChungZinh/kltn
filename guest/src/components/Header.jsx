import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import logo from "../assets/imgs/logo.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const cartCount = 2;
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 100; // Chiều cao của header (px)
      const currentScrollY = window.scrollY;

      // Nếu người dùng cuộn vượt quá chiều cao của header
      if (currentScrollY > headerHeight) {
        // Kiểm tra hướng cuộn
        if (currentScrollY > lastScrollY) {
          // Cuộn xuống -> Ẩn header
          setShowHeader(false);
        } else {
          // Cuộn lên -> Hiện header
          setShowHeader(true);
        }
      } else {
        // Khi ở phần đầu của trang thì luôn hiện header
        setShowHeader(true);
      }

      // Cập nhật vị trí cuộn cuối cùng
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      {/* Header with Scroll Effect */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg transition-transform duration-400 z-50  ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto">
          <Navbar fluid rounded>
            <Navbar.Brand href="/">
              <img
                src={logo}
                className="mr-3 h-12 sm:h-14"
                alt="Flowbite React Logo"
              />
            </Navbar.Brand>

            <div className="flex md:order-2 space-x-4 items-center">
              {/* Shopping Cart Icon with Count */}
              <div className="relative mt-2">
                <button className="bg-none" size={"sm"}>
                  <HiOutlineShoppingCart className="h-8 w-8 text-slate-500" />
                </button>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>

              {/* User Avatar Dropdown */}
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>

              {/* Login Button */}
              <Button className="bg-slate-700" size={"sm"} href="/sign-in">
                Đăng nhập
              </Button>
              <Navbar.Toggle />
            </div>

            {/* Navbar Links */}
            <Navbar.Collapse>
              <Navbar.Link className="lg:text-base" href="/" active>
                Trang chủ
              </Navbar.Link>
              <Navbar.Link className="lg:text-base" href="/collections">
                Sản phẩm
              </Navbar.Link>
              <Navbar.Link className="lg:text-base" href="/about">
                Giới thiệu
              </Navbar.Link>
              <Navbar.Link className="lg:text-base" href="/contact">
                Liên hệ
              </Navbar.Link>
              <Navbar.Link className="lg:text-base" href="/recruitment">
                Tuyển dụng
              </Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}
