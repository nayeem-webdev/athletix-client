import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function CartSidebar({ isOpen, onClose }) {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Will be Fetched From API", price: 19.99, qty: 1 },
    { id: 2, name: "Work in progress", price: 29.99, qty: 1 },
    { id: 3, name: "Product 3", price: 39.99, qty: 1 },
    { id: 4, name: "Product 4", price: 49.99, qty: 1 },
    // { id: 5, name: "Product 5", price: 59.99, qty: 1 },
    // { id: 6, name: "Product 6", price: 69.99, qty: 1 },
    // { id: 7, name: "Product 7", price: 79.99, qty: 1 },
    // { id: 8, name: "Product 8", price: 89.99, qty: 1 },
  ]);

  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  const updateQty = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + amount) } : item
      )
    );
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest(".cart-sidebar")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 dark:bg-white/20 z-40"></div>
      )}

      <div
        className={`cart-sidebar fixed top-0 right-0 h-full w-80 bg-white dark:bg-black dark:text-white shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-primary text-xl"
          >
            ✕
          </button>
        </div>

        <div className="p-4 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-black/80 dark:text-white/50">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center border border-black dark:border-white">
                <span className="px-3 w-10 flex items-center justify-center">
                  {item.qty}
                </span>
                <div className="flex flex-col  border-l border-black dark:border-white">
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    className="px-2 border-black dark:border-white hover:bg-black/10 dark:hover:bg-white/20"
                  >
                    -
                  </button>
                  <button
                    onClick={() => updateQty(item.id, 1)}
                    className="px-2 border-t border-black dark:border-white hover:bg-black/10 dark:hover:bg-white/20"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between font-semibold text-lg mt-4">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>

          <div className="flex gap-3">
            <button className="w-full mt-4 bg-black dark:bg-white text-white dark:text-black py-2 hover:bg-blue-700 transition">
              View Cart
            </button>
            <button className="w-full mt-4 bg-primary py-2 hover:bg-blue-700 transition">
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
