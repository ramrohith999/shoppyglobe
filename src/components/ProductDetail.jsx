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
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="w-full rounded-xl object-cover"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-2xl font-semibold text-blue-600 mb-4">
            ${product.price}
          </p>

          <div className="space-y-2 mb-6">
            <p>
              <span className="font-semibold">
                Brand:
              </span>{" "}
              {product.brand}
            </p>

            <p>
              <span className="font-semibold">
                Category:
              </span>{" "}
              {product.category}
            </p>

            <p>
              <span className="font-semibold">
                Rating:
              </span>{" "}
              {product.rating}
            </p>

            <p>
              <span className="font-semibold">
                Stock:
              </span>{" "}
              {product.stock}
            </p>
          </div>

          <button
            onClick={() =>
              dispatch(addToCart(product))
            }
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;