import CategorySideBar from "../components/CategorySideBar";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const Shop = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 py-[72px]">
      <Helmet>
        <title>ATHLETIX | Shop</title>
      </Helmet>
      <h2 className="my-8 font-bold text-2xl dark:text-white">Shop</h2>

      <div className="block lg:flex gap-6">
        <CategorySideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Shop;
