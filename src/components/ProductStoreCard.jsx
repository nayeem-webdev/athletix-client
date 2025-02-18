import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/Api";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";

const ProductStoreCard = ({ product }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (!product) return null;

  const addToCart = (id) => {
    if (!user?.uid) {
      navigate('/login');
      return;
    }
    const cartItem = {
      product: { productID: id, qty: 1 },
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
    <div className="mb-2">
      <div className="aspect-square w-full self-start bg-white rounded-sm">
        <img
          src={product?.product_image}
          alt={`Image of ${product?.product_title}`}
          className="object-scale-down p-6 w-full h-full"
        />
      </div>
      <div className="w-full flex flex-col items-start mt-4">
        <h2
          title={product?.product_title}
          className="font-quick text-xl mb-3 dark:text-white h-14 overflow-hidden"
        >
          {product?.product_title}
        </h2>
        <p className="text-sm mb-2 text-black/80 dark:text-white/80">
          {product?.category
            ? product.category.toUpperCase().replace("-", " ")
            : ""}
        </p>
        <Link
          to={`/shop/product/${product?._id}`}
          className="mt-3 w-full bg-black dark:bg-white text-white dark:text-black py-1 rounded-full hover:bg-black/70 dark:hover:bg-white/70 transition flex justify-center items-center gap-2 font-bold cursor-pointer"
        >
          VIEW DETAILS
        </Link>

        <button
          onClick={() => addToCart(product?._id)}
          className="mt-3 w-full bg-black dark:bg-white text-white dark:text-black py-1 rounded-full hover:bg-black/70 dark:hover:bg-white/70 transition flex justify-center items-center gap-2 font-bold cursor-pointer"
        >
          ADD TO CART - ${product?.price}
        </button>
      </div>
    </div>
  );
};

ProductStoreCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductStoreCard;
