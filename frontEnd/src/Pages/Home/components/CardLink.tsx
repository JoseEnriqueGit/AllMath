// imports
import { Link } from "react-router-dom";
// Component

const CardLink = (props: { text: string; to: string }): JSX.Element => {
  return (
    <Link
      to={props.to}
      className="flex flex-col bg-slate-700 rounded-md text-gray-200 font-medium ring-1 ring-slate-900 w-full p-4 gap-1 hover:bg-slate-600"
    >
      <span className="">Aritmetica</span>
      <span className="font-bold text-lg">{props.text}</span>
    </Link>
  );
};

export default CardLink;
