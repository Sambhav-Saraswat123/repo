import React from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
    const style = {
        position: "absolute",
        top: "100vh"
    }
  return (
    <div style={style}>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link className="flex title-font font-medium items-center md:justify-start justify-center text-white" to="/">
          <span className="ml-3 text-xl">Sambhav Saraswat</span>
        </Link>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          Copyright © Sambhav Saraswat 2021
        </p>
      </div>
    </div>
  );
};
export default Footer;
