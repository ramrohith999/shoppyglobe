import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector(
    (state) => state.cart.items
  );
{/*function to display cart items value in the cart*/}
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-cyan-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide hover:scale-104 transition-all duration-1000 hover:text-neutral-900"
        >
          ShoppyGlobe
        </Link>

        <nav className="flex items-center gap-6 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300 shadow-md"
          >
            Cart ({totalItems})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;