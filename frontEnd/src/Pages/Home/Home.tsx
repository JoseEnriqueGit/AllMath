// imports
// Component
import { CardLink, SearchInput } from "./components";

const Home = (): JSX.Element => {
  return (
    <article className="grid grid-cols-HomeGrid  w-800 gap-6 m-6">
      <span className="col-span-full text-4xl font-bold">AllMath</span>
      <SearchInput />
      <CardLink text="Simplifying Fractions" to="#"/>
      
    </article>
  );
}

export default Home;
