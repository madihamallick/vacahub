import React from "react";
import StoriesBg from "../../../../assets/images/stories-bg.jpg";

const Stories = () => {
  return (
    <>
      <div className=" mt-20 text-center">
        <h2 className="text-4xl font-extralight underline-small">
          Share your stories
        </h2>
        <p className="md:w-[460px] mx-auto mt-10 font-extralight text-gray-600">
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
