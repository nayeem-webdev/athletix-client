import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllSportsEquipment = () => {
  const allData = useLoaderData();
  const [sortedData, setSortedData] = useState([...allData]);
  const [isAscending, setIsAscending] = useState(true);

  // Toggle Sorting: Low to High / High to Low
  const toggleSorting = () => {
    const sorted = [...allData].sort((a, b) =>
      isAscending ? a.price - b.price : b.price - a.price
    );
    setSortedData(sorted);
    setIsAscending(!isAscending);
  };

  return (
    <div className="container mx-auto py-[100px] px-8">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
        All Sports Equipment
      </h2>

      {/* Sorting Buttons */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleSorting}
          aria-label={`Sort by price ${
            isAscending ? "Low to High" : "High to Low"
          }`}
          className=" py-2 px-4 bg-black dark:bg-white text-white dark:text-black rounded-md hover:bg-black/70 dark:hover:bg-white/70 transition flex justify-center items-center gap-2 font-bold"
        >
          Sort by Price: {isAscending ? "Low to High" : "High to Low"}
        </button>
      </div>

      {/* Product Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-black dark:bg-white/20 text-white">
            <th className="py-2 px-4">Sl.</th>
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Product Name</th>
            <th className="py-2 px-4">Category</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr
              key={item._id}
              className={
                index % 2 === 0
                  ? "bg-black/10 dark:bg-white/30 dark:text-white"
                  : "bg-black/5 dark:bg-white/40 dark:text-white"
              }
            >
              <td className="py-2 px-4 text-center">{index + 1}</td>
              <td className="py-2 px-4 text-center">
                <img
                  src={item.product_image}
                  alt={item.product_title}
                  className="w-14 h-14 mx-auto object-scale-down bg-white p-1"
                />
              </td>
              <td className="py-2 px-4">{item.product_title}</td>
              <td className="py-2 px-4 text-center">
                {item.category.replace("-", " ").toUpperCase()}
              </td>
              <td className="py-2 px-4 text-center">$ {item.price}</td>
              <td className="py-2 px-4 text-center">
                <Link
                  to={`/shop/product/${item._id}`}
                  className="mt-3 w-full bg-black dark:bg-white text-white dark:text-black py-2 px-4 rounded-md hover:bg-black/70 dark:hover:bg-white/70 transition flex justify-center items-center gap-2 font-bold"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSportsEquipment;
