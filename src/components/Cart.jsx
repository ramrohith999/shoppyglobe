import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh] text-center">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty 🛒</h1>

        <p className="text-gray-600 mb-6">
          Looks like you have not added anything yet.
        </p>

        <Link
          to="/"
          className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-gray-800">
        Shopping Cart
      </h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-12 bg-white shadow-xl rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-3xl font-extrabold text-cyan-500">
          Total: ${totalPrice.toFixed(2)}
        </h2>

        <Link
          to="/checkout"
          className="bg-green-500 hover:scale-102 text-white px-8 py-4 rounded-2xl hover:bg-green-600 transition duration-300 text-lg font-bold shadow-lg"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
