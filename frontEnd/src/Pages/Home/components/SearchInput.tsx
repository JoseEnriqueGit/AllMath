// Import
// Component
import { SearchIcon } from "../../../UI";

const SearchInput = (): JSX.Element => {
  return (
    <label htmlFor="Search" className="flex col-span-full flex-row">
    <div className="flex justify-center items-center bg-slate-700 rounded-l-xl px-6">
      <SearchIcon fill="#F8FAFC" width={32} height={32}/>
    </div>
    <input
      id="Search"
      type="search"
      className="bg-slate-700 w-full rounded-r-xl p-5 text-3xl font-semibold outline-none"
      autoComplete="off"
      autoCorrect="off"
    />
  </label>
  );
};

export default SearchInput;