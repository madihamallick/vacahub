import React from "react";
import beachOverview from "../../../../assets/images/beach-trees.jpg";

const Blog = () => {
  return (
    <div className="grid grid-cols-2 mt-20">
      <div>
        <img src={beachOverview} alt="beach"></img>
      </div>
      <div className="md:mx-28 my-20">
        <h2 className="text-4xl font-extralight underline-small">Blogs</h2>
        <p className="mt-10 font-extralight text-gray-600 text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          mollitia enim aliquid debitis, dolor deserunt nihil in culpa vitae
          quibusdam qui earum cum! Similique eveniet at magnam laboriosam
          consequatur illo.
        </p>
        <button className="bg-blue-500 px-10 py-4 text-white text-lg my-10 flex gap-4">
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Blog;
