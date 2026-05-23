import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

{/* used usefetch to get details of product as my custom hook fetches all products */}
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();

        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10 text-xl">
        {error}
      </div>
    );
  }
return (
  <div className="max-w-6xl mx-auto px-4 py-12">
    <div className="grid md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-3xl overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-8 flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold mb-4">
          {product.title}
        </h1>

        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          {product.description}
        </p>

        <p className="text-4xl font-bold text-cyan-600 mb-6">
          ${product.price}
        </p>

        <div className="space-y-3 mb-8 text-lg">
          <p>
            <span className="font-bold">
              Brand:
            </span>{" "}
            {product.brand}
          </p>

          <p>
            <span className="font-bold">
              Category:
            </span>{" "}
            {product.category}
          </p>

          <p>
            <span className="font-bold">
              Rating:
            </span>{" "}
            ⭐ {product.rating.toFixed(1)}
          </p>

          <p>
            <span className="font-bold">
              Stock:
            </span>{" "}
            {product.stock}
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            dispatch(addToCart(product))
          }
          className="bg-cyan-500 text-white hover:scale-102 py-4 rounded-2xl cursor-pointer hover:bg-cyan-700 transition duration-300 text-lg font-bold shadow-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);
};

export default ProductDetail;