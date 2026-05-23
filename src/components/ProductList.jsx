import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";
import Loader from "./Loader";
import SearchBar from "./SearchBar";

import { useSelector } from "react-redux";

const ProductList = () => {
    {/* usefetchproducts is callled which is impoetd from usefetchproducts hoo we cretaed */}
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
 
  {/* to load before the page loads*/}
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
  <div className="max-w-7xl mx-auto px-4 py-10">
    <div className="text-center mb-10">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
        Explore things you need
      </h1>

      <p className="text-gray-500 text-lg">
        Discover amazing products at the best prices
      </p>
    </div>

    <SearchBar />
    

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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