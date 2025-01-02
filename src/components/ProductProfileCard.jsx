import PropTypes from "prop-types";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ProductProfileCard = ({ product, userProducts, setUserProducts }) => {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "black",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b10-a10-md-nayeem-uddin-server-side.vercel.app/all-products/${product._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((d) => {
            if (d.deletedCount === 1) {
              toast.success("Deleted Successfully");
            } else {
              ("Unsuccessful! Try Again!");
            }
          });
        const newUserProducts = userProducts.filter(
          (p) => p._id !== product._id
        );
        setUserProducts(newUserProducts);
      }
    });
  };

  return (
    <div className="group relative w-full aspect-square rounded-sm overflow-hidden">
      <img
        src={product.product_image}
        alt={product.product_title}
        className="w-full h-full object-scale-down bg-white p-5 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <div className="text-center p-3">
          <p
            title={product.product_title}
            className="text-white text-md font-semibold h-12 overflow-hidden"
          >
            {product.product_title}
          </p>
          <div className="mt-4 flex space-x-4 justify-center">
            <Link
              className="text-white hover:text-white/80 transition"
              to={`/shop/product/${product._id}`}
            >
              <FaEye size={20} />
            </Link>
            <Link
              className="text-white hover:text-white/80 transition"
              to={`/update-product/${product._id}`}
            >
              <FaEdit size={20} />
            </Link>
            <button
              onClick={handleDelete}
              className="text-white hover:text-white/80 transition"
            >
              <FaTrashAlt size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductProfileCard.propTypes = {
  product: PropTypes.object.isRequired,
  userProducts: PropTypes.array,
  setUserProducts: PropTypes.func,
};

export default ProductProfileCard;
