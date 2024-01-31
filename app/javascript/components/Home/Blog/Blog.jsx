import React from "react";
import beachTrees from "../../../../assets/images/beach-trees.jpg";
import beachOverview from "../../../../assets/images/beach-overview.jpg";
import beachChills from "../../../../assets/images/beach-chills.jpg";

const Blog = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-20">
        <div className="md:mx-28 mx-10 my-20">
          <h2 className="text-4xl font-extralight underline-small">
            Trip Planner
          </h2>
          <p className="mt-10 font-extralight text-gray-600 text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            mollitia enim aliquid debitis, dolor deserunt nihil in culpa vitae
            quibusdam qui earum cum! Similique eveniet at magnam laboriosam
            consequatur illo.
          </p>
          <button className="bg-blue-500 px-10 py-4 text-white text-lg my-10 flex gap-4">
            Explore
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
        <div className="flex gap-28 flex-col md:flex-row items-center">
          <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden border shadow-md">
            <a className="relative flex h-60 overflow-hidden" href="#">
              <img
                className="absolute top-0 right-0 h-full w-full object-cover"
                src={beachChills}
                alt="beach chills"
              />
              <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">
                  Tour Pantai Selatan Yogyakarta Inter Matter
                </h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900 mr-2">$479</span>
                  <span className="text-sm text-slate-900 line-through">$99</span>
                </p>
              </div>
            </div>
          </div>
          <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden border shadow-md">
            <a className="relative flex h-60 overflow-hidden" href="#">
              <img
                className="absolute top-0 right-0 h-full w-full object-cover"
                src={beachOverview}
                alt="beach overview"
              />
              <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">
                  Tour Pantai Yahut di Pulau Dewata
                </h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900 mr-2">$359</span>
                  <span className="text-sm text-slate-900 line-through">$99</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-20">
        <div>
          <img src={beachTrees} alt="beach" />
        </div>
        <div className="md:mx-28 mx-10 my-20">
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
    </>
  );
};

export default Blog;
