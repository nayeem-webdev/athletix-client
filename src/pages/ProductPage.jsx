import { Rate } from "antd";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import API from "../api/Api";
import { toast } from "react-toastify";

const ProductPage = () => {
  const product = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [itemQty, setItemQty] = useState(1);
  const addToCart = (id) => {
    if (!user?.uid) {
      navigate("/login");
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

  if (!product) {
    return <div className="container mx-auto py-[140px] p-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-[140px] p-8 flex flex-col lg:flex-row gap-8">
      <Helmet>
        <title>ATHLETIX | {product?.product_title || "Product"}</title>
      </Helmet>
      <div className="aspect-square w-full lg:w-1/2 self-start bg-white">
        <img
          src={product.product_image || "default-image.jpg"}
          alt={`Image of ${product.product_title || "Product"}`}
          className="object-scale-down p-6 w-full h-full"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <p className="text-sm mb-5 text-black/80 dark:text-white/80">
          {product.category
            ? product.category.toUpperCase().replace("-", " ")
            : "Unknown Category"}
        </p>
        <h2 className="font-quick text-3xl mb-6 dark:text-white">
          {product.product_title || "No Title Available"}
        </h2>
        <div className="flex items-center dark:text-white/80 mb-6">
          {product.rating ? (
            <Rate
              className="text-black dark:text-white/80"
              disabled
              allowHalf
              defaultValue={product.rating}
            />
          ) : (
            <span>No Rating Available</span>
          )}
          <span className="ml-4 text-sm ">{product.rating || "N/A"}</span>
        </div>
        <p className="mb-6 text-black dark:text-white text-opacity-80 font-light text-5xl">
          ${product.price || "0.00"}
        </p>
        <p
          className={`mb-5 px-2 rounded-full border text-sm ${
            product.stockStatus > 0
              ? "bg-green-50 text-green-500 border-green-500 dark:bg-green-500/50 dark:text-green-100 dark:border-green-100"
              : "bg-red-50 text-red-500 border-red-500 dark:bg-red-900/80 dark:text-red-100 dark:border-red-100"
          }`}
        >
          {product.stockStatus > 0
            ? `${product.stockStatus} Items in Stock`
            : "Out of Stock"}
        </p>
        <div className="flex items-center gap-3">
          {/* Counter */}
          <div className="flex items-center border border-black dark:border-white overflow-hidden rounded-md">
            <input
              type="number"
              min={1}
              max={product.stockStatus}
              className="custom-input text-center w-16 h-[48px] border-none outline-none bg-transparent dark:text-white"
              value={itemQty}
              onChange={(e) => {
                const value = Math.max(
                  1,
                  Math.min(product.stockStatus, Number(e.target.value))
                );
                setItemQty(value);
              }}
            />
            <div className="flex flex-col">
              <button
                onClick={() => setItemQty(Math.max(1, itemQty - 1))}
                disabled={itemQty === 1}
                className="h-[24px] w-8 border-l border-b border-black dark:border-white hover:bg-black/10 dark:hover:bg-white/20 dark:text-white/70 flex items-center justify-center"
              >
                -
              </button>
              <button
                onClick={() =>
                  setItemQty(Math.min(product.stockStatus, itemQty + 1))
                }
                disabled={itemQty === product.stockStatus}
                className="h-[24px] w-8 border-l border-black dark:border-white hover:bg-black/10 dark:hover:bg-white/20 dark:text-white/70 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => addToCart(product?._id)}
            className="px-10 border bg-black dark:bg-white text-white dark:text-black py-3 rounded-md hover:bg-black/70 dark:hover:bg-white/70 transition flex justify-center items-center gap-2 font-bold"
          >
            ADD TO CART
          </button>
        </div>
        {/* Button */}
        <button
          onClick={() => addToCart(product?._id)}
          className="mt-3 mb-5 min-w-[295px] px-10 border bg-black dark:bg-white text-white dark:text-black py-3 rounded-md hover:bg-black/70 dark:hover:bg-white/70 transition flex justify-center items-center gap-2 font-bold"
        >
          BUY NOW
        </button>
        <p className="text-sm text-black/80 dark:text-white/80 leading-loose mb-5">
          {product.description || "No description available."}
        </p>
        <h4 className="text-md dark:text-white/80">Specification:</h4>
        <ul className="text-sm text-black/80 dark:text-white/80 leading-loose mb-5">
          {product.customization && product.customization.length > 0 ? (
            product.customization.map((spec, index) => (
              <li className="list-disc ml-4" key={index}>
                {spec}
              </li>
            ))
          ) : (
            <li className="list-disc ml-4">No specifications available</li>
          )}
        </ul>
        <p className="dark:text-white">
          Seller:{" "}
          {product.uid ? (
            <Link
              className="text-primary hover:underline"
              to={`/profile/${product.uid}`}
            >
              {product.displayName || "Unknown Seller"}
            </Link>
          ) : (
            "No Seller Information"
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
