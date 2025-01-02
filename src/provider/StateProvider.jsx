import { useEffect, useState } from "react";
import StateContext from "../context/StateContext";
import PropTypes from "prop-types";

const StateProvider = ({ children }) => {
  // Toggle dark mode and apply corresponding class to the root element
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      await fetch(
        `https://b10-a10-md-nayeem-uddin-server-side.vercel.app/all-products`
      )
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    };
    getProducts();
  }, []);

  const stateInfo = {
    toggleDarkMode,
    darkMode,
    products,
  };
  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StateProvider;
