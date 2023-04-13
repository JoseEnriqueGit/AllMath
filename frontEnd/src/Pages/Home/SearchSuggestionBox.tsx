// imports
import { CardLink } from "./components";

interface MiObjeto {
  id: number;
  value: string;
  label: string;
}

interface HomeProps {
  query: string;
  results: MiObjeto[];
  setIsRedirected: (isRedirected: boolean) => void;
}

const SearchSuggestionBox = ({
  query,
  results,
  setIsRedirected,
}: HomeProps): JSX.Element => {
  return (
    <article className="ArticleContainer">
      {query.length === 0 ? (
        <p className="text-center text-gray-500">No hay resultados</p>
      ) : (
        results.map((item: MiObjeto) => (
          // <CardLink
          //   key={item.value}
          //   text={item.label}
          //   to={item.value}
          //   setIsRedirected={setIsRedirected}
          // />
          <li key={item.id}>{item.label}</li>
        ))
      )}

      {/* {results.map((item: MiObjeto) => (
        <CardLink key={item.value} text={item.label} to={item.value} setIsRedirected={setIsRedirected}/>
      ))} */}
    </article>
  );
};

export default SearchSuggestionBox;
