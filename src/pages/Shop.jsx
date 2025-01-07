// import CategorySideBar from "../components/CategorySideBar";
import { Helmet } from "react-helmet";
import SearchFilter from "../components/SearchFilter";
import { useEffect, useState } from "react";
import API from "../api/API";
import Store from "../components/Store";

const Shop = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    API.get("/all-products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error Fetching Items:", err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-5 md:px-10 py-[72px]">
      <Helmet>
        <title>ATHLETIX | Shop</title>
      </Helmet>
      <h2 className="my-8 font-bold text-2xl dark:text-white">Shop</h2>
      <SearchFilter data={data} setFilteredData={setFilteredData} />
      <div className="mt-5">
        {/* <CategorySideBar /> */}
        <Store loading={loading} products={filteredData} />
      </div>
    </div>
  );
};

export default Shop;
