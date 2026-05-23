import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">
          {product.title}
        </h2>

        <p className="text-gray-600 mb-2">
          ${product.price}
        </p>

        <p className="text-sm text-gray-500 mb-4">
          {product.category}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
          >
            Add to Cart
          </button>

          <Link
            to={`/product/${product.id}`}
            className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;