import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductStoreCard = ({ product }) => {
  return (
    <div className="mb-2">
      <div className="aspect-square w-full self-start bg-white rounded-sm">
        <img
          src={product.product_image}
          alt={`Image of ${product.product_title}`}
          className="object-scale-down p-6 w-full h-full"
        />
      </div>
      <div className="w-full flex flex-col items-start mt-4">
        <h2
          title={product.product_title}
          className="font-quick text-xl mb-3 dark:text-white h-14 overflow-hidden"
        >
          {product.product_title}
        </h2>
        <p className="text-sm mb-2 text-black/80 dark:text-white/80">
          {product.category.toUpperCase().replace("-", " ")}
        </p>

        <button className="mt-3 w-full  bg-black dark:bg-white text-white dark:text-black py-1 rounded-full hover:bg-black/70 dark:hover:bg-white/70 transition flex justify-center items-center gap-2 font-bold">
          ADD TO CART - ${product.price}
        </button>
        <Link
          to={`/shop/product/${product._id}`}
          className="mt-3 w-full  bg-black dark:bg-white text-white dark:text-black py-1 rounded-full hover:bg-black/70 dark:hover:bg-white/70 transition flex justify-center items-center gap-2 font-bold"
        >
          VIEW DETAILS
        </Link>
      </div>
    </div>
  );
};

ProductStoreCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductStoreCard;
