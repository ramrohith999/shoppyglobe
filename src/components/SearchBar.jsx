import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const query = useSelector((state) => state.search.query);

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) =>
          dispatch(setSearchQuery(e.target.value))
        }
        className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;