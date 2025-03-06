import PropTypes from "prop-types";
import { useState } from "react";

const CartItem = ({ item }) => {
  const [itemQty, setItemQty] = useState(item.qty);
  return (
    <div
      key={item.id}
      className="flex items-center justify-between gap-2 border-b pb-2"
    >
      <div className="w-[205px]">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-black/80 dark:text-white/50">
          ${item.price.toFixed(2)}
        </p>
      </div>
      {/* Counter */}
      <div className="flex items-center border border-black dark:border-white overflow-hidden rounded-md w-[90px]">
        <input
          type="number"
          min={1}
          max={item.stockStatus}
          className="custom-input text-center w-16 h-[48px] border-none outline-none bg-transparent dark:text-white"
          value={itemQty}
          onChange={(e) => {
            const value = Math.max(
              1,
              Math.min(item.stockStatus, Number(e.target.value))
            );
            setItemQty(value);
          }}
        />
        <div className="flex flex-col">
          <button
            onClick={() => setItemQty(Math.max(1, itemQty - 1))}
            disabled={itemQty === 1}
            className="h-[24px] w-8 border-l border-b border-black dark:border-white hover:bg-black/10 dark:hover:bg-white/20 dark:text-white/70 flex items-center justify-center"
          >
            -
          </button>
          <button
            onClick={() => setItemQty(Math.min(item.stockStatus, itemQty + 1))}
            disabled={itemQty === item.stockStatus}
            className="h-[24px] w-8 border-l border-black dark:border-white hover:bg-black/10 dark:hover:bg-white/20 dark:text-white/70 flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
