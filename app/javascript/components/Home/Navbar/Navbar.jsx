import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-around">
        <li>
          <span className="font-bold text-2xl">vacayyhub</span>
        </li>
        <li>
          <span className="hover:font-semibold text-lg font-light">
            Home
          </span>
        </li>
        <li>
          <span className="hover:font-semibold text-lg font-light">
            Trip Planner
          </span>
        </li>
        <li>
          <span className="hover:font-semibold text-lg font-light">
            Blogs
          </span>
        </li>
        <li>
          <span className="hover:font-semibold text-lg font-light">
            Categories
          </span>
        </li>
        <li>
          <span className="hover:font-semibold text-lg font-light">
            Stories
          </span>
        </li>
        <li>
          <span className="hover:font-semibold text-lg font-light">
            Contact
          </span>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
