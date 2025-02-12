import { useContext } from "react";
import ProductStoreCard from "./ProductStoreCard";
import StateContext from "../context/StateContext";

const HomeProducts = () => {
  const { products } = useContext(StateContext);
  return (
    <section className="container mx-auto py-20 px-6">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold dark:text-white mb-2 text-center">
          Featured Products
        </h2>
        <p className="mb-6 text-center text-black/80 dark:text-white/80">
          Check our Latest Stock
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 10).map((product) => (
            <ProductStoreCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
