import { IconProps } from "./Types/IconProps";

const SearchIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  strokeWidth = 3,
  ...rest
}: IconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-search"
    width={width}
    height={height}
    strokeWidth={strokeWidth}
    stroke={stroke}
    viewBox="0 0 24 24"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx={10} cy={10} r={7} />
    <line x1={21} y1={21} x2={15} y2={15} />
  </svg>
);

export default SearchIcon;
