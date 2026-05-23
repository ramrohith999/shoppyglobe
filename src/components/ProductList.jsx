import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";
import Loader from "./Loader";
import SearchBar from "./SearchBar";

import { useSelector } from "react-redux";

const ProductList = () => {
  const { products, loading, error } =
    useFetchProducts();

  const query = useSelector(
    (state) => state.search.query
  );

  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(query.toLowerCase())
  );

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
    <div className="max-w-7xl mx-auto px-4 py-6">
      <SearchBar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;