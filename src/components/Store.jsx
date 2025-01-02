import { useLoaderData } from "react-router-dom";
import ProductStoreCard from "./ProductStoreCard";
import LottiePlayer from "./LottiePlayer";
import { useContext } from "react";
import StateContext from "../context/StateContext";

const Store = () => {
  const { loading } = useContext(StateContext);
  const products = useLoaderData();
  if (products.length === 0) {
    return (
      <div className="mt-6 lg:mt-0 flex flex-col items-center justify-center p-10 border w-full lg:w-2/3">
        <div className="rounded-full overflow-hidden flex items-center justify-center border  w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]">
          <LottiePlayer animationType="noData" />
        </div>
        <p className="mt-3 dark:text-white font-bold text-2xl">
          NO LISTING TO SHOW
        </p>
      </div>
    );
  }

  if (loading) {
    return <LottiePlayer animationType="cart"></LottiePlayer>;
  }

  return (
    <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.map((product) => (
        <ProductStoreCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Store;
