import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SearchFilter = ({ data = [], setFilteredData }) => {
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState(1000);
  const [sortOrder, setSortOrder] = useState("");
  const [range, setRange] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      const newMaxPrice = Math.max(...data.map((item) => item.price || 0));
      setPriceRange(newMaxPrice);
      setRange(newMaxPrice);
    }
  }, [data]);

  useEffect(() => {
    const filterData = () => {
      let filteredData = data.filter((p) => {
        const title = p?.product_title ? p.product_title.toLowerCase() : "";
        return (
          title.includes((searchText || "").toLowerCase()) &&
          p.price <= priceRange
        );
      });

      if (sortOrder === "asc") {
        filteredData = filteredData.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "desc") {
        filteredData = filteredData.sort((a, b) => b.price - a.price);
      }

      setFilteredData(filteredData);
    };

    filterData();
  }, [searchText, priceRange, sortOrder, data, setFilteredData]);

  return (
    <div className="mt-5 container mx-auto p-4 bg-black/20 dark:bg-white/20 rounded-lg flex flex-wrap gap-4 justify-between items-center">
      {/* Price Range Func */}
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <label
          htmlFor="priceRange"
          className="text-sm text-black dark:text-white font-bold whitespace-nowrap"
        >
          Max Price: ${priceRange}
        </label>
        <input
          id="priceRange"
          type="range"
          min="0"
          max={range}
          value={priceRange}
          onChange={(e) => setPriceRange(parseInt(e.target.value))}
          className="w-full md:w-64 range-input"
        />
      </div>

      {/* Search Func */}
      <input
        type="text"
        placeholder="Search: Product Name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="flex-1 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      />

      {/* Sort Func */}
      <div className="flex gap-4 items-center">
        <label
          htmlFor="sortOrder"
          className="text-sm text-black dark:text-white font-bold"
        >
          Sort by Price:
        </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Select</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
    </div>
  );
};

SearchFilter.propTypes = {
  data: PropTypes.array.isRequired,
  setFilteredData: PropTypes.func.isRequired,
};

export default SearchFilter;

//%% usage
// const [Data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setFilteredData(Data);
//   }, [Data]);

//   useEffect(() => {
//     API.get("/all-Data")
//       .then((res) => {
//         setData(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error Fetching Items:", err.message);
//         setLoading(false);
//       });
//   }, []);

//$$ call <SearchFilter Data={Data} setFilteredData={setFilteredData} />
