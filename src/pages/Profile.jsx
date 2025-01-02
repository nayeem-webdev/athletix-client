import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import ProductProfileCard from "../components/ProductProfileCard";
import LottiePlayer from "../components/LottiePlayer";
import ProductSideBar from "../components/ProductSideBar";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const id = user?.uid;
  const [userProducts, setUserProducts] = useState([]);
  useEffect(() => {
    const getUserProducts = async () => {
      await fetch(
        `https://b10-a10-md-nayeem-uddin-server-side.vercel.app/all-products/user/${id}`
      )
        .then((res) => res.json())
        .then((data) => setUserProducts(data))
        .catch((err) => console.log(err));
    };
    getUserProducts();
  }, [id]);

  const totalTaka = userProducts.reduce(
    (acc, curr) => acc + curr.price * curr.stockStatus,
    0
  );

  const totalStock = userProducts.reduce(
    (acc, curr) => acc + curr.stockStatus,
    0
  );

  return (
    <div className="container mx-auto min-h-screen py-[72px] lg:flex mt-5 gap-6 px-6">
      <div className="lg:w-2/3">
        {/* Profile Section */}
        <div className="rounded-lg bg-gray-50 dark:bg-white/20 p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
              <img
                className="h-32 w-32 md:h-40 md:w-40 rounded-full border border-gray-300"
                src={
                  user?.photoURL ||
                  "https://i.ibb.co.com/nRm6fz9/Png-Item-5067022.png"
                }
                alt="Profile"
              />
            </div>
            <div className="text-center md:text-left flex-grow">
              <p className="text-2xl font-bold dark:text-white">
                {user.displayName}
              </p>
              <p className="text-gray-500 dark:text-gray-300 mt-1">
                {user.email}
              </p>
              <p className="mt-3 text-gray-700 dark:text-gray-400">
                I am a seller.
              </p>
              <Link
                to={"/add-product"}
                className="mt-3 w-full max-w-xs  bg-black dark:bg-white text-white dark:text-black py-2 rounded-md font-medium hover:bg-black/70 dark:hover:bg-white/70 transition flex justify-center items-center gap-2"
              >
                Add A Product
              </Link>
              <div className="mt-6 flex justify-center md:justify-start gap-8">
                <div>
                  <p className="text-lg font-bold dark:text-white text-center">
                    {userProducts.length}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-200 text-center">
                    Products
                  </p>
                </div>
                <div>
                  <p
                    className="text-lg font-bold dark:text-white text-center"
                    title={`${totalTaka} USD Worth Products in your Stock`}
                  >
                    {totalTaka > 1000
                      ? `${(totalTaka / 1000).toFixed()}K`
                      : totalTaka}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-200 text-center">
                    Inventory
                  </p>
                </div>
                <div>
                  <p
                    className="text-lg font-bold dark:text-white text-center"
                    title={`${totalStock} Units of Products in your Stock`}
                  >
                    {totalStock > 1000
                      ? `${(totalStock / 1000).toFixed()}K`
                      : totalStock}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-200 text-center">
                    Stock
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Section */}
        <div className="mt-6 rounded-lg bg-gray-50 dark:bg-white/20 p-6">
          <h3 className="text-lg font-bold mb-4 dark:text-white">
            Your Product Listing
          </h3>
          {userProducts.length ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
              {userProducts.map((item) => (
                <ProductProfileCard
                  key={item._id}
                  product={item}
                  setUserProducts={setUserProducts}
                  userProducts={userProducts}
                />
              ))}
            </div>
          ) : (
            <div className="mt-6 flex flex-col items-center justify-center p-10">
              <div className="rounded-full overflow-hidden flex items-center justify-center border  w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]">
                <LottiePlayer animationType="noData" />
              </div>
              <p className="mt-3 dark:text-white font-bold text-2xl">
                NO LISTING TO SHOW
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6 lg:mt-0 hidden sm:block lg:w-1/3">
        <ProductSideBar />
      </div>
    </div>
  );
};

export default Profile;
