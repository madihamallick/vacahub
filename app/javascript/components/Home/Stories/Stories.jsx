import React from "react";
import StoriesBg from "../../../../assets/images/stories-bg.jpg";
import BeachSkuu from "../../../../assets/images/beach-skuu.jpg";
import BeachSeats from "../../../../assets/images/beach-seats.jpg";
import BeachBoy from "../../../../assets/images/beach-boy.jpg";
import BeachPalms from "../../../../assets/images/beach-palms.jpg";

const Stories = () => {
  return (
    <>
      <div className="mt-32 mb-12 text-center">
        <h2 className="text-4xl font-extralight underline-small mb-10">Categories</h2>
        <section className="flex justify-between flex-col md:flex-row px-6 mt-4">
          <div className="overflow-hidden md:w-1/4 h-[26rem] mx-2 my-2">
            <img
              src={BeachSkuu}
              alt="beach suku"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="overflow-hidden md:w-1/4 h-[26rem] mx-2 my-2">
            <img
              src={BeachPalms}
              alt="beach palm"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="overflow-hidden md:w-1/4 h-[26rem] mx-2 my-2">
            <img
              src={BeachSeats}
              alt="beach seat"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="overflow-hidden md:w-1/4 h-[26rem] mx-2 my-2">
            <img
              src={BeachBoy}
              alt="beach boy"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
        </section>
      </div>
      <div className=" mt-20 text-center">
        <h2 className="text-4xl font-extralight underline-small">
          Share your stories
        </h2>
        <p className="md:w-[460px] mx-10 md:mx-auto mt-10 font-extralight text-gray-600">
          Join a community of awesome people, share your stories and share them
          with people all over the world
        </p>
      </div>
      <div
        className="h-[40rem] bg-cover bg-center mt-28"
        style={{ backgroundImage: `url(${StoriesBg})` }}
      ></div>
    </>
  );
};

export default Stories;
