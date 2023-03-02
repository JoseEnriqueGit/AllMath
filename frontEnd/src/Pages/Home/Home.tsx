// imports
// Component
import { Tiltle, SearchInput } from "../../UI";
import { CardLink } from "./components";

const Home = (): JSX.Element => {
  return (
    <article className="ArticleContainer">
      <Tiltle />
      <SearchInput />
      <CardLink text="Simplifying Fractions" to="/SimplifyingFractions" />
      <CardLink text="Simplifying Fractions" to="#" />
    </article>
  );
};

export default Home;
