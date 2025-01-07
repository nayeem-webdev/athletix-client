import ProductStoreCard from "./ProductStoreCard";
import LottiePlayer from "./LottiePlayer";
import PropTypes from "prop-types";

const Store = ({ loading, products }) => {
  if (products.length === 0) {
    return (
      <div className="mt-6 lg:mt-0 flex flex-col items-center justify-center p-10 border w-full">
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
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductStoreCard key={product._id} product={product} />
      ))}
    </div>
  );
};

Store.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired,
};

export default Store;
