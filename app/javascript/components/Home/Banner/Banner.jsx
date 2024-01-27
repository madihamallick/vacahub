import React from "react";
import backgroundbeach from "../../../../assets/images/beach-bg.jpg";

const Banner = () => {
  return (
    <>
      <div
        className="h-[40rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundbeach})` }}
      >
        <div className="text-white md:text-6xl text-4xl text-wrap font-light grid md:grid-cols-2 w-full">
          <div
            className="md:w-[600px] md:pl-24 pl-10 py-40"
            style={{
              lineHeight: "5rem",
            }}
          >
            <span className="font-semibold">Discover</span> a touch of the
            nature's clarity
            <div className="border-white border w-14 h-14 my-10 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-white -mt-12 w-11/12 mx-auto h-24 shadow-xl"></div>
    </>
  );
};

export default Banner;
