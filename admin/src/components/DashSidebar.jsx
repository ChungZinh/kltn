import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { useState } from "react";
import logo from "../assets/imgs/logo.png";
import DashHome from "./dashboard/DashHome";
import DashProduct from "./dashboard/DashProduct";
import DashAddProduct from "./dashboard/DashAddProduct";
import Dashboard from "./dashboard/Dashboard";

export default function DashSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "Dashboard":
        return <DashHome />;
      case "Table":
        return <DashProduct />;
      case "Products":
        return <DashAddProduct />;
      case "Customers":
        return <Dashboard />;
      case "Inbox":
        return <div>Inbox Content</div>;
      case "Projects":
        return <div>Projects Content</div>;
      default:
        return <div>Select an item from the sidebar</div>;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar container with 100vh height */}
      <Sidebar
        aria-label="Sidebar with logo branding example"
        className={`h-screen transition-all duration-300 border-r ${
          isCollapsed ? "w-24" : "w-64"
        }`}
      >
        {/* Logo and toggle button */}
        <div
          onClick={toggleSidebar}
          className="flex justify-center items-center py-3 bg-slate-400 rounded-md"
        >
          <img
            className={`transition-all duration-400 ${
              isCollapsed ? "w-28" : "w-36"
            }`}
            src={logo}
            alt="logo"
          />
          {/* <button
            onClick={toggleSidebar}
            className="p-2 rounded hover:bg-gray-200"
          >
            {isCollapsed ? (
              <HiArrowSmRight size={20} />
            ) : (
              <HiArrowSmRight size={20} className="rotate-180" />
            )}
          </button> */}
        </div>

        {/* Sidebar items */}
        <Sidebar.Items
          className={`${
            isCollapsed ? "flex justify-center items-center " : ""
          } `}
        >
          <Sidebar.ItemGroup className="">
            <Sidebar.Item
              active={selectedItem === "Dashboard"}
              href="#"
              onClick={() => setSelectedItem("Dashboard")}
            >
              {isCollapsed ? (
                <div className=" p-5">
                  <HiChartPie size={35} />
                </div>
              ) : (
                <div className="flex gap-0 items-center p-4">
                  <HiChartPie size={30} />
                  <span className="ml-2 text-xl">Dashboard</span>
                </div>
              )}
            </Sidebar.Item>
            <Sidebar.Item
              active={selectedItem === "Table"}
              href="#"
              onClick={() => setSelectedItem("Table")}
            >
              {isCollapsed ? (
                <div className="p-5">
                  <HiTable size={35} />
                </div>
              ) : (
                <div className="flex gap-0 items-center p-4">
                  <HiTable size={30} />
                  <span className="ml-2 text-xl">Table</span>
                </div>
              )}
            </Sidebar.Item>
            <Sidebar.Item
              active={selectedItem === "Products"}
              href="#"
              onClick={() => setSelectedItem("Products")}
            >
              {isCollapsed ? (
                <div className="p-5">
                  <HiShoppingBag size={35} />
                </div>
              ) : (
                <div className="flex gap-0 items-center p-4">
                  <HiShoppingBag size={30} />
                  <span className="ml-2 text-xl">Products</span>
                </div>
              )}
            </Sidebar.Item>
            <Sidebar.Item
              active={selectedItem === "Customers"}
              href="#"
              onClick={() => setSelectedItem("Customers")}
            >
              {isCollapsed ? (
                <div className="p-5">
                  <HiUser size={35} />
                </div>
              ) : (
                <div className="flex gap-0 items-center p-4">
                  <HiUser size={30} />
                  <span className="ml-2 text-xl">Customers</span>
                </div>
              )}
            </Sidebar.Item>
            <Sidebar.Item
              active={selectedItem === "Inbox"}
              href="#"
              onClick={() => setSelectedItem("Inbox")}
            >
              {isCollapsed ? (
                <div className="p-5">
                  <HiInbox size={35} />
                </div>
              ) : (
                <div className="flex gap-0 items-center p-4">
                  <HiInbox size={30} />
                  <span className="ml-2 text-xl">Inbox</span>
                </div>
              )}
            </Sidebar.Item>
            <Sidebar.Item
              active={selectedItem === "Projects"}
              href="#"
              onClick={() => setSelectedItem("Projects")}
            >
              {isCollapsed ? (
                <div className="p-5">
                  <HiViewBoards size={35} />
                </div>
              ) : (
                <div className="flex gap-0 items-center p-4">
                  <HiViewBoards size={30} />
                  <span className="ml-2 text-xl">Projects</span>
                </div>
              )}
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {/* Main content area */}
      <div className="flex-grow">{renderContent()}</div>
    </div>
  );
}
