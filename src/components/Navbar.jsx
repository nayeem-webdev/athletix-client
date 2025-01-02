import { Tooltip } from "react-tooltip";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaShoppingCart,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaGoogle,
} from "react-icons/fa";
import StateContext from "../context/StateContext";
import AuthContext from "../context/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, setUser, loginWithPopUp, logoutUser } = useContext(AuthContext);
  const { toggleDarkMode, darkMode } = useContext(StateContext);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Google Login
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    loginWithPopUp(googleProvider)
      .then((res) => {
        const usr = res.user;
        setUser(usr);
        toast.success("You are Logged in!");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("User Login Failed!");
      });
  };

  // Logout User
  const handleLogout = () => {
    logoutUser(googleProvider)
      .then(() => {
        setUser(null);
        toast.success("Logout Successful!");
      })
      .catch((err) => console.log(err.message));
  };

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition duration-300 dark:bg-black/80 dark:backdrop-blur-sm ${
        isScrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-black/80 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <Tooltip
        anchorSelect="#navUser"
        clickable
        className="!p-0 !bg-transparent !shadow-none !outline-none	"
      >
        <nav className="flex flex-col bg-white dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-md right-0 p-4 w-48 shadow-md">
          {user ? (
            <>
              {/* Profile Section */}
              <Link to={"/account"} className="flex items-center gap-3 mb-4">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/nRm6fz9/Png-Item-5067022.png"
                  }
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-2 border-gray-300"
                />
                <div>
                  <h4 className="text-sm font-medium text-black dark:text-white">
                    {user?.displayName || "User Name"}
                  </h4>
                </div>
              </Link>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 w-full text-sm font-medium text-center rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login Link */}
              <Link
                to="/login"
                className="w-full max-w-xs bg-black dark:bg-white text-white dark:text-black py-2 rounded-md font-medium hover:bg-opacity-80 transition flex justify-center items-center gap-2"
              >
                LOG IN
              </Link>

              {/* Google Login */}
              <button
                onClick={handleGoogleLogin}
                className="mt-3 w-full max-w-xs bg-black dark:bg-white text-white dark:text-black py-2 rounded-md font-medium hover:bg-opacity-80 transition flex justify-center items-center gap-2"
                aria-label="Login with Google"
              >
                <FaGoogle />
                GOOGLE
              </button>
            </>
          )}
        </nav>
      </Tooltip>

      <div className="flex px-4 lg:px-8 py-3 justify-between items-center">
        {/* Desktop navigation links */}
        <div className="hidden lg:flex space-x-6 w-1/3">
          <Link
            to="/"
            className="text-black dark:text-white hover:text-primary font-semibold"
          >
            HOME
          </Link>
          <Link
            to="/shop"
            className="text-black dark:text-white hover:text-primary font-semibold"
          >
            SHOP
          </Link>
          <Link
            to="/blogs"
            className="text-black dark:text-white hover:text-primary font-semibold"
          >
            BLOGS
          </Link>
          {user ? (
            <Link
              to="/account"
              className="text-black dark:text-white hover:text-primary font-semibold"
            >
              ACCOUNT
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-black dark:text-white hover:text-primary font-semibold"
            >
              LOGIN
            </Link>
          )}
        </div>

        {/* Logo and mobile menu toggle */}
        <div className="flex lg:justify-center items-center gap-3 text-black dark:text-white lg:w-1/3">
          <div className="lg:hidden">
            <button
              className="text-black dark:text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <Link
            to={"/"}
            className="logo-shadow text-center text-2xl lg:text-5xl font-bold"
          >
            <h1>ATHLETIX</h1>
          </Link>
        </div>

        {/* E-commerce and dark mode icons */}
        <div className="flex items-center justify-end space-x-6 w-1/3">
          <button>
            <FaUser
              id="navUser"
              className="text-black dark:text-white hover:text-primary"
            />
          </button>

          <button>
            <FaShoppingCart className="text-black dark:text-white hover:text-primary" />
          </button>

          <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? (
              <FaSun className="text-black dark:text-white hover:text-primary" />
            ) : (
              <FaMoon className="text-black dark:text-white hover:text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg lg:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="text-black dark:text-white hover:text-primary font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/shop"
              className="text-black dark:text-white hover:text-primary font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              SHOP
            </Link>
            <Link
              to="/blogs"
              className="text-black dark:text-white hover:text-primary font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              BLOGS
            </Link>
            <Link
              to="/account"
              className="text-black dark:text-white hover:text-primary font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              ACCOUNT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
