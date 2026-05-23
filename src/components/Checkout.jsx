import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { clearCart } from "../redux/cartSlice";

import { useState } from "react";

const Checkout = () => {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Order placed successfully!");

    dispatch(clearCart());

    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">
          No items in cart
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-6"
        >
          <h1 className="text-3xl font-bold mb-6">
            Checkout
          </h1>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg cursor-pointer hover:bg-green-600 transition"
            >
              Place Order
            </button>
          </div>
        </form>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between"
              >
                <span>
                  {item.title} x {item.quantity}
                </span>

                <span>
                  $
                  {(
                    item.price * item.quantity
                  ).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <hr className="my-6" />

          <h3 className="text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Checkout;