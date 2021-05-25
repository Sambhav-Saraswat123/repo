import React from "react";
import { Link } from "react-router-dom";

const header = (props) => {
  return (
    <>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          to="/Home"
        >
          <span className="ml-3 text-xl as">{props.brandName}</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-white text-opacity-50">
          <Link className="mr-5 hover:text-white as" to="/Home">
            {props.link1}
          </Link>
          <Link className="mr-5 hover:text-white as" to="/Videos">
            {props.link2}
          </Link>
          <Link className="mr-5 hover:text-white as" to="/Channel">
            {props.link3}
          </Link>
        </nav>
      </div>
    </>
  );
};

export default header;
