import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between py-5 px-5 md:flex-row flex-col text-center md:text-right">
      <div className="font-bold text-2xl uppercase">vacahub</div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex gap-10 flex-wrap">
          <li>
            <span className="text-lg font-semibold">Home</span>
          </li>
          <li>
            <span className="text-lg font-extralight">Trip Planner</span>
          </li>
          <li>
            <span className="text-lg font-extralight">Blogs</span>
          </li>
          <li>
            <span className="text-lg font-extralight">Categories</span>
          </li>
          <li>
            <span className="text-lg font-extralight">Stories</span>
          </li>
          <li>
            <span className="text-lg font-extralight">Contact</span>
          </li>
          <li>
            <span className="text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
