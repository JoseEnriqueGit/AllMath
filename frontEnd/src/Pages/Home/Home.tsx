import { useState } from "react";
import SearchComponentsList from "./components/SearchInput/SearchComponentsList.json";
// Components
import { Tiltle, SearchInput } from "../../UI";
import { CardLink } from "./components";

interface ISearchComponentsList {
  id: number;
  value: string;
  label: string;
}

const RenderList = ({ list }: { list: ISearchComponentsList[] }) => (
  <>
    {list.map((item: ISearchComponentsList) => (
      <CardLink key={item.id} text={item.label} to={item.value} />
    ))}
  </>
);

const Home = (): JSX.Element => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ISearchComponentsList[]>([]);

  return (
    <article className="flex justify-center flex-col w-full gap-6 my-6">
      <section className="flex justify-center items-center flex-col w-full gap-6">
        <Tiltle />
        <SearchInput
          query={query}
          setQuery={setQuery}
          setResults={setResults}
        />
      </section>
      <section className="grid grid-cols-HomeGrid gap-6">
        {query.trim().length === 0 && <RenderList list={SearchComponentsList} />}
        {query.trim().length !== 0 && results.length > 0 && (
          <RenderList list={results} />
        )}
        {query.trim().length !== 0 && results.length === 0 && (
          <p className="text-center text-gray-500">No hay resultados</p>
        )}
      </section>
    </article>
  );
};

export default Home;
