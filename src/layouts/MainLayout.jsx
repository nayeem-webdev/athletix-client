import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { useContext } from "react";
import StateContext from "../context/StateContext";

const MainLayout = () => {
  const { darkMode } = useContext(StateContext);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
        transition:Bounce
      />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
