import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    fill={props.fill}
    width={props.width}
    height={props.height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    // style={{
    //   enableBackground: "new 0 0 64 64",
    // }}
    xmlSpace="preserve"
    {...props}
  >
    <path d="M61.4 55.7 44.9 42.3c6.8-9.3 6.1-22.6-2.4-31-4.5-4.5-10.5-7-16.9-7s-12.4 2.5-16.9 7c-9.3 9.3-9.3 24.5 0 33.8 4.5 4.5 10.5 7 16.9 7 6.1 0 11.8-2.3 16.3-6.4l16.7 13.5c.4.3.9.5 1.4.5.7 0 1.3-.3 1.7-.8.8-1 .7-2.4-.3-3.2zm-35.8-8.1c-5.2 0-10-2-13.7-5.7-7.6-7.6-7.6-19.9 0-27.4 3.7-3.7 8.5-5.7 13.7-5.7 5.2 0 10 2 13.7 5.7 7.6 7.6 7.6 19.9 0 27.4-3.6 3.7-8.5 5.7-13.7 5.7z" />
  </svg>
);


export default SearchIcon;
