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
      <div className="flex h-screen text-black dark:text-white py-[72px]">
        {/* Sidebar */}
        <nav className="w-64 flex-shrink-0 p-4 bg-black/10 dark:bg-white/20 h-[calc(100vh-72px)]">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-primary/80 dark:hover:bg-primary/80 ${
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
                  `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-primary/80 dark:hover:bg-primary/80 ${
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
                  `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-primary/80 dark:hover:bg-primary/80 ${
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
                  `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-primary/80 dark:hover:bg-primary/80 ${
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
                  `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-primary/80 dark:hover:bg-primary/80 ${
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
                  `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-primary/80 dark:hover:bg-primary/80 ${
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
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black
               hover:dark:bg-white/90 w-full justify-center"
            >
              <FaHome /> Back to Home
            </NavLink>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden p-4">
          <div className="overflow-auto">
            <Outlet />{" "}
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
