import React from "react";
import ImgFile from "../../../../public/Icons/imgfile.svg";
import Video from "../../../../public/Icons/video.svg";
import DocumentFile from "../../../../public/Icons/documentfile.svg";
import Zip from "../../../../public/Icons/zip.svg";

const RecentlyViewed = () => {
  return (
    <div className="w-full px-10 py-12">
      <h3 className=" mb-8 text-sm text-center text-gray-600 sm:text-left">
        Recently Viewed
      </h3>
      <div className="w-full flex flex-wrap justify-between">
        <div className="w-auto flex flex-col">
          <div className="w-32 h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-52 xl:h-48 flex justify-around bg-blue-100 rounded-md transition-all duration-150 shadow-md">
            <img className="icon w-1/3" src={ImgFile} alt="image icon" />
          </div>
          <div className="mt-5">
            <p className="name text-sm">Images</p>
            <p className="date text-xs text-gray-400">Viewed 20 Jul 2020</p>
          </div>
        </div>
        <div className="w-auto flex flex-col">
          <div className="w-32 h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-52 xl:h-48 flex justify-around bg-pink-100 rounded-md transition-all duration-500 shadow-md ">
            <img className="icon w-1/3" src={Video} alt="video icon" />
          </div>
          <div className="mt-5">
            <p className="name text-sm">Videos</p>
            <p className="date text-xs text-gray-400">Viewed 20 Jul 2020</p>
          </div>
        </div>
        <div className="w-auto flex flex-col ">
          <div className="w-32 h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-52 xl:h-48 flex justify-around bg-green-200 rounded-md transition-all duration-500  shadow-md">
            <img className="icon w-1/3" src={DocumentFile} alt="video icon" />
          </div>
          <div className="mt-5">
            <p className="name text-sm">Document</p>
            <p className="date text-xs text-gray-400">Viewed 20 Jul 2020</p>
          </div>
        </div>
        <div className="w-auto flex flex-col ">
          <div className="w-32 h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-52 xl:h-48 flex justify-around bg-pink-200 rounded-md transition-all duration-500  shadow-md">
            <img className="icon w-1/3" src={Zip} alt="pdf ion" />
          </div>
          <div className="mt-5">
            <p className="name text-sm">Compressed</p>
            <p className="date text-xs text-gray-400">Viewed 20 Jul 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
