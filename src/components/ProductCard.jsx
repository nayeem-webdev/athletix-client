import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/Api";
import { toast } from "react-toastify";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const addToCart = (id) => {
    if (!user?.uid) {
      navigate("/login");
      return;
    }
    const cartItem = {
      productID: id,
      uid: user.uid,
    };

    API.post("/cart", cartItem)
      .then(() => {
        toast.success("Item added successfully!");
      })
      .catch((err) => {
        toast.error("Failed to add item to cart. Please try again.");
        console.error("Error adding to cart:", err.message);
      });
  };
  return (
    <div className="rounded-lg flex flex-col mb-4 bg-white dark:bg-white/10 p-4 shadow-md">
      <div className="flex">
        <div className="flex-shrink-0 w-28 h-28 rounded-md overflow-hidden bg-gray-200">
          <img
            src={product.product_image}
            alt={`Image of ${product.product_title}`}
            className="object-cover w-full h-full p-2 bg-white"
          />
        </div>

        <div className="flex flex-col ml-4">
          <h2
            title={product.product_title}
            className="font-quick text-lg font-semibold dark:text-white mb-2 h-20 overflow-hidden"
          >
            {product.product_title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            {product.category.toUpperCase().replace("-", " ")}
          </p>
        </div>
      </div>
      <div className="flex space-x-3 mt-3 text-center">
        <button
          onClick={() => addToCart(product._id)}
          className="flex-grow bg-black dark:bg-white text-white dark:text-black py-2 rounded-lg hover:bg-black/70 dark:hover:bg-white/70 transition font-bold"
        >
          ADD TO CART - ${product.price}
        </button>
        <Link
          to={`/shop/product/${product._id}`}
          className="flex-grow bg-black dark:bg-white text-white dark:text-black py-2 rounded-lg hover:bg-black/70 dark:hover:bg-white/70 transition font-bold"
        >
          VIEW
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    product_image: PropTypes.string.isRequired,
    product_title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
