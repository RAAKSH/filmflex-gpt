import React from "react";

type VideoTitle = {
  title: string;
  overview: string;
};

const VideoTitle: React.FC<VideoTitle> = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-55 p-8  absolute  text-white bg-gradient-to-r from-black">
      <h1 className=" text-xl md:text-5xl font-bold">{title}</h1>
      <p className=" hidden md:text-md pt-4 w-1/2 text-wrap">{overview}</p>
      <div className="flex pt-6">
        {/* <button className="md:rounded-md p-3 md:px-2 md:py-1 px-2 py-1 m-2 align-middle bg-white text-black  hover:bg-white/80">
          ▶️ Play
        </button> */}
        {/* <button className="hidden md:rounded-md p-2 px-2 py-1 m-2 align-middle bg-white text-black  hover:bg-white/80 text-nowrap">
          ℹ More Info
        </button> */}
      </div>
    </div>
  );
};

export default VideoTitle;
