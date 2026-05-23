import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 flex flex-col group">
      <div className="overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5 flex flex-col grow">
        <h2 className="text-xl font-bold mb-2 line-clamp-1">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm capitalize mb-2">
          {product.category}
        </p>

        <p className="text-2xl font-bold text-cyan-600 mb-5">
          ${product.price}
        </p>

        <div className="mt-auto flex gap-3">
          <button
            type="button"
            onClick={() => dispatch(addToCart(product))}
            className="flex-1 cursor-pointer bg-cyan-500 text-white py-3 rounded-xl hover:bg-cyan-700 transition duration-300 font-semibold"
          >
            Add to Cart
          </button>

          <Link
            to={`/product/${product.id}`}
            className="flex-1 text-center bg-gray-100 py-3 rounded-xl hover:bg-gray-200 transition duration-300 font-semibold"
          >
            details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;