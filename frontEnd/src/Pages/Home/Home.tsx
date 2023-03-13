// imports
import Fuse from "fuse.js";
import SearchComponentsList from "../../UI/SearchInput/SearchComponentsList.json";
import { useState } from "react";
// Component
import { Tiltle, SearchInput, SearchIcon } from "../../UI";
import { CardLink } from "./components";
// import { SearchComponentsList } from "../../UI/SearchInput/SearchComponentsList";

const Home = (): JSX.Element => {
  const [searchResult, setSearchResult] = useState({});
  const options = {
    keys: ["value", "label"],
  };
  const fuse = new Fuse(SearchComponentsList, options);

  function handleSearchComponent(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const result = fuse.search(e.target.value);
    setSearchResult(result);



    console.log(JSON.parse(result));
  }
  // console.log(searchResult);

  return (
    <article className="ArticleContainer">
      <Tiltle />
      {/* Input Search */}
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
          onChange={handleSearchComponent}
        />
      </label>
      {/* Card links */}
      {/* {
        Object.values(searchResult).map((elemento: any) => {
          return (
            <span></span>
          )
        });
      } */}
      {/* <CardLink text="Simplifying Fractions" to="/SimplifyingFractions" />
      <CardLink text="Simplifying Fractions" to="#" /> */}
    </article>
  );
};
``;
export default Home;
