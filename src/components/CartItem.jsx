import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b pb-4">
      <div className="flex items-center gap-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-24 h-24 object-cover rounded-lg"
        />

        <div>
          <h2 className="font-bold text-lg">
            {item.title}
          </h2>

          <p className="text-gray-600">
            ${item.price}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
        type="button"
          onClick={() =>
            dispatch(decreaseQuantity(item.id))
          }
          className="bg-gray-200 px-3 py-1 rounded cursor-pointer"
        >
          -
        </button>

        <span className="font-semibold">
          {item.quantity}
        </span>

        <button
        type="button"
          onClick={() =>
            dispatch(increaseQuantity(item.id))
          }
          className="bg-gray-200 px-3 py-1 rounded cursor-pointer"
        >
          +
        </button>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button
        type="button"
          onClick={() =>
            dispatch(removeFromCart(item.id))
          }
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;