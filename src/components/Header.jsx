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
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link
          to="/"
          className="text-3xl font-bold tracking-wide"
        >
          ShoppyGlobe
        </Link>

        <nav className="flex items-center gap-6 text-lg">
          <Link
            to="/"
            className="hover:text-gray-200 transition"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="hover:text-gray-200 transition"
          >
            Cart ({totalItems})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;