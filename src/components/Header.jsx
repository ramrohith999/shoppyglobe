import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold"
        >
          ShoppyGlobe
        </Link>

        <nav className="flex gap-6 items-center">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>

          <Link
            to="/cart"
            className="hover:text-gray-200"
          >
            Cart ({totalItems})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;