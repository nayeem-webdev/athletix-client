import { useContext, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import AuthContext from "../context/AuthContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const ProductForm = () => {
  const { user } = useContext(AuthContext);
  const oldBook = useLoaderData();
  const navigate = useNavigate();

  const { uid, displayName } = user || {};
  const categories = [
    { name: "All Equipment", slug: "all-equipment" },
    { name: "Cricket Equipment", slug: "cricket-equipment" },
    { name: "Football Equipment", slug: "football-equipment" },
    { name: "Gym Equipment", slug: "gym-equipment" },
    { name: "Tennis Equipment", slug: "tennis-equipment" },
    { name: "Badminton Equipment", slug: "badminton-equipment" },
    { name: "Jerseys", slug: "jerseys" },
  ];

  const [imgUrl, setImgUrl] = useState(
    oldBook?.product_image ||
      "https://i.ibb.co.com/C8bBMrm/product-placeholder.png"
  );

  //! ADD PRODUCT
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_title = form.product_title.value;
    const product_image = form.product_image.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const description = form.description.value;
    const customizationStr = form.customization.value;
    const customization = customizationStr
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");
    const rating = parseFloat(form.rating.value);
    const deliveryTime = form.deliveryTime.value;
    const stockStatus = parseFloat(form.stockStatus.value);

    const newProduct = {
      product_title,
      product_image,
      category,
      price,
      description,
      customization,
      rating,
      deliveryTime,
      stockStatus,
      uid,
      displayName,
    };
    fetch(
      "https://b10-a10-md-nayeem-uddin-server-side.vercel.app/all-products",
      {
        body: JSON.stringify(newProduct),
        method: "POST",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Added");
        navigate(`/shop/product/${data.insertedId}`);
      });
  };

  //! UPDATE PRODUCT
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_title = form.product_title.value;
    const product_image = form.product_image.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const description = form.description.value;
    const customizationStr = form.customization.value;
    const customization = customizationStr
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");
    const rating = parseFloat(form.rating.value);
    const deliveryTime = form.deliveryTime.value;
    const stockStatus = parseFloat(form.stockStatus.value);

    const updatedData = {
      product_title,
      product_image,
      category,
      price,
      description,
      customization,
      rating,
      deliveryTime,
      stockStatus,
      uid,
      displayName,
    };
    fetch(
      `https://b10-a10-md-nayeem-uddin-server-side.vercel.app/all-products/${oldBook._id}`,
      {
        body: JSON.stringify(updatedData),
        method: "PUT",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then(() => {
        toast.success("Product Updated");
        navigate(`/shop/product/${oldBook._id}`);
      });
  };

  return (
    <div className="container mx-auto min-h-screen py-[80px] px-6">
      <Helmet>
        <title>ATHLETIX | Add or Update Product</title>
      </Helmet>
      <Tooltip anchorSelect="#product_image" clickable>
        <button>
          upload your image on{" "}
          <a
            className="underline text-primary"
            href="https://imgbb.com/"
            target="blank"
          >
            imgBB
          </a>{" "}
          and paste the link here
        </button>
      </Tooltip>
      <div className="bg-gray-50 dark:bg-white/20 rounded-lg mt-10 p-6">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">
          {!oldBook ? "Add Product" : "UpdateProduct"}
        </h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="hidden lg:flex w-1/2 aspect-auto rounded-lg items-start justify-center">
            <img src={imgUrl} className="w-full rounded-lg" alt="" />
          </div>
          <form
            className="bg-white dark:bg-white/10 p-8 rounded-lg shadow-lg mx-auto w-full"
            onSubmit={oldBook ? handleUpdateProduct : handleAddProduct}
          >
            <div className="mb-4">
              <label
                htmlFor="product_title"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Product Title
              </label>
              <input
                type="text"
                name="product_title"
                id="product_title"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                required
                defaultValue={(oldBook && oldBook.product_title) || ""}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="product_image"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Product Image URL
              </label>
              <div className="flex items-center gap-2 mt-1">
                <input
                  type="url"
                  name="product_image"
                  id="product_image"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  onChange={(e) => setImgUrl(e.target.value)}
                  placeholder="Paste the image URL here"
                  defaultValue={(oldBook && oldBook.product_image) || ""}
                  required
                />
                <FaUpload className="text-primary" />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                required
                defaultValue={(oldBook && oldBook.category) || ""}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.slug} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Price (USD)
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                required
                defaultValue={(oldBook && oldBook.price) || ""}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows="2"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                required
                defaultValue={(oldBook && oldBook.description) || ""}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="customization"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Customizations
              </label>
              <textarea
                name="customization"
                id="customization"
                placeholder="Separate spec with a comma, eg: 50 Meter Water Proof, 6.5 Inch Led Display, 25 MP Camera. "
                rows="2"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                required
                defaultValue={(oldBook && oldBook.customization) || ""}
              />
            </div>
            <div className="flex gap-4">
              <div className="mb-4 w-1/2">
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Rating
                </label>
                <input
                  defaultValue={(oldBook && oldBook.rating) || ""}
                  type="number"
                  name="rating"
                  placeholder="0.1 - 5.00"
                  id="rating"
                  step="0.1"
                  max="5"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4 w-1/2">
                <label
                  htmlFor="deliveryTime"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Delivery Time
                </label>
                <input
                  defaultValue={(oldBook && oldBook.deliveryTime) || ""}
                  type="string"
                  name="deliveryTime"
                  placeholder="eg: 6 Days"
                  id="deliveryTime"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4 w-1/2">
                <label
                  htmlFor="stockStatus"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Stock Status
                </label>
                <input
                  defaultValue={(oldBook && oldBook.stockStatus) || ""}
                  type="number"
                  name="stockStatus"
                  placeholder="eg: 10"
                  id="stockStatus"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-3 w-full  bg-black dark:bg-white text-white dark:text-black py-2 rounded-md font-medium hover:bg-black/70 dark:hover:bg-white/70 transition flex justify-center items-center gap-2"
            >
              {oldBook ? "Update Product" : "Add Product"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
