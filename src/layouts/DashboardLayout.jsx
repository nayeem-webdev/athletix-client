import { NavLink, Outlet } from "react-router-dom";
import {
  AiFillDashboard,
  AiOutlineAppstore,
  AiOutlineComment,
  AiOutlineBarChart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import DashboardNavbar from "../components/dashboard-components/DashboardNavbar";
import { FaHome } from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="flex h-screen text-black dark:text-white py-[100px]">
        {/* Sidebar */}
        <nav className="w-64 flex-shrink-0 p-4">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 ${
                    isActive ? "bg-primary text-white" : ""
                  }`
                }
              >
                <AiFillDashboard /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 ${
                    isActive ? "bg-primary text-white" : ""
                  }`
                }
              >
                <AiOutlineUser /> Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/products"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 ${
                    isActive ? "bg-primary text-white" : ""
                  }`
                }
              >
                <AiOutlineAppstore /> All Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/sales"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 ${
                    isActive ? "bg-primary text-white" : ""
                  }`
                }
              >
                <AiOutlineShoppingCart /> Sales
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/reports"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 ${
                    isActive ? "bg-primary text-white" : ""
                  }`
                }
              >
                <AiOutlineBarChart /> Reports
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/reviews"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 ${
                    isActive ? "bg-primary text-white" : ""
                  }`
                }
              >
                <AiOutlineComment /> All Reviews
              </NavLink>
            </li>
          </ul>
          <div className="mt-8">
            <NavLink
              to="/"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary hover:bg-primary/80 text-white w-full justify-center"
            >
              <FaHome /> Back to Home
            </NavLink>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
