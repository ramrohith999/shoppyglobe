import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const query = useSelector(
    (state) => state.search.query
  );

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search for what you need..."
        value={query}
        onChange={(e) =>
          dispatch(setSearchQuery(e.target.value))
        }
        className="w-full bg-white shadow-md border border-gray-200 p-4 outline-none focus:ring-4 focus:ring-blue-300 transition rounded-4xl"
      />
    </div>
  );
};

export default SearchBar;