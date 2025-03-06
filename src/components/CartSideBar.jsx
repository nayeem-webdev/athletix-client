import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { useQuery } from "@tanstack/react-query";
import API from "./../api/Api";
import AuthContext from "../context/AuthContext";

function CartSidebar({ isOpen, onClose }) {
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    error,
    data: cartItems = [],
    refetch,
  } = useQuery({
    queryKey: ["cartItems", user?.uid],
    queryFn: async () => {
      if (!user?.uid) return [];
      const res = await API.get(`/cart_items/${user.uid}`);
      return res.data || [];
    },
    enabled: !!user?.uid,
  });

  const totalPrice = (
    cartItems?.reduce((sum, item) => sum + item.price * item.qty, 0) || 0
  ).toFixed(2);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest(".cart-sidebar")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, onClose]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching cart items.</div>;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 dark:bg-white/20 z-40"></div>
      )}

      {/* Sidebar */}
      <div
        className={`cart-sidebar fixed top-0 right-0 h-full w-80 sm:w-96 bg-white dark:bg-black dark:text-white shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-primary text-xl"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Cart Items */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item.id} item={item} refetch={refetch} />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {/* Fixed Bottom Section */}
        <div className="p-4 border-t bg-white dark:bg-black">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="w-full bg-black dark:bg-white text-white dark:text-black py-2 hover:bg-gray-800 transition">
              View Cart
            </button>
            <button className="w-full bg-primary py-2 hover:bg-blue-700 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

CartSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartSidebar;
