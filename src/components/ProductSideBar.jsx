import { useContext } from "react";
import ProductCard from "./ProductCard";
import StateContext from "../context/StateContext";

const ProductSideBar = () => {
  const { products } = useContext(StateContext);

  return (
    <div>
      <div className="rounded-lg bg-gray-50 dark:bg-white/20 p-6">
        <h3 className="text-lg font-bold mb-4 dark:text-white">
          Products You May Like
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSideBar;
