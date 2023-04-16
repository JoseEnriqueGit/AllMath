// Import
// Component
import { SearchIcon } from "..";

const SearchInput = (): JSX.Element => {

  // function handleSearchComponent(e) {
	// 	e.preventDefault();

	// }

  // function search(query: string) {
  //   return array.filter((el: string) => {
  //       return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  //   })
  // }

  return (
    <label htmlFor="Search" className="flex col-span-full flex-row">
      <div className="flex justify-center items-center bg-slate-600 rounded-l-xl px-6">
        <SearchIcon fill="#F8FAFC" width={32} height={32} />
      </div>
      <input
        id="Search"
        type="search"
        className="bg-slate-600 w-full rounded-r-xl p-5 text-3xl font-semibold outline-none"
        autoComplete="off"
        autoCorrect="off"
      />
    </label>
  );
};

export default SearchInput;