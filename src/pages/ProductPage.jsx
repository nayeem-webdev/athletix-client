import { Rate } from "antd";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const ProductPage = () => {
  const product = useLoaderData();

  return (
    <div className="container mx-auto py-[140px] p-8 flex flex-col lg:flex-row gap-8">
      <Helmet>
        <title>ATHLETIX | {product?.product_title || "Product"}</title>
      </Helmet>
      <div className="aspect-square w-full lg:w-1/2 self-start bg-white">
        <img
          src={product.product_image}
          alt={`Image of ${product.product_title}`}
          className="object-scale-down p-6 w-full h-full"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <p className="text-sm mb-5 text-black/80 dark:text-white/80">
          {product.category.toUpperCase().replace("-", " ")}
        </p>
        <h2 className="font-quick text-3xl mb-6 dark:text-white">
          {product.product_title}
        </h2>
        <div className="flex items-center dark:text-white/80 mb-6">
          {product.rating && (
            <Rate
              className="text-black dark:text-white/80"
              disabled
              allowHalf
              defaultValue={product.rating}
            />
          )}
          <span className="ml-4 text-sm ">{product.rating}</span>
        </div>
        <p className="mb-6 text-black dark:text-white text-opacity-80 font-light text-5xl">
          $ {product.price}
        </p>
        <p
          className={`mb-5 px-2 rounded-full border text-sm ${
            product.stockStatus > 0
              ? "bg-green-50 text-green-500 border-green-500 dark:bg-green-500/50 dark:text-green-100 dark:border-green-100"
              : "bg-red-50 text-red-500 border-red-500 dark:bg-red-900/80 dark:text-red-100 dark:border-red-100"
          }`}
        >
          {product.stockStatus > 0
            ? `${product.stockStatus} ${" "}Items in Stock`
            : "Out of Stock"}
        </p>
        <p className="py-5">
          Seller:{" "}
          <Link
            className="text-primary hover:underline
          "
            to={`/profile/${product.uid}`}
          >
            {product.displayName}
          </Link>
        </p>
        <p className="text-sm text-black/80 dark:text-white/80 leading-loose mb-5">
          {product.description}
        </p>
        <h4 className="text-md dark:text-white/80">Specification:</h4>
        <ul className="text-sm text-black/80 dark:text-white/80 leading-loose mb-8">
          {product.customization.length ? (
            product.customization.map((spec) => (
              <li className="list-disc ml-6" key={spec}>
                {spec}
              </li>
            ))
          ) : (
            <li className="list-disc ml-6">No specifications available</li>
          )}
        </ul>
        {/* <button className="mt-3 w-full  bg-black dark:bg-white text-white dark:text-black py-1 rounded-full hover:bg-black/70 dark:hover:bg-white/70 transition flex justify-center items-center gap-2 font-bold">
          ADD TO CART
        </button> */}
      </div>
    </div>
  );
};

export default ProductPage;
