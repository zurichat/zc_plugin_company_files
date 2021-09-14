import React from "react";

const RecentlyViewed = () => {
  return (
    <div className="w-full px-10 py-12">
      <h3 className=" mb-8 text-[20px] text-center text-gray-600 sm:text-left">
        Recently Viewed
      </h3>
      <div className="w-full flex flex-wrap justify-around sm:justify-between">
        <div className="mb-10 md:mb-0">
          <div className="w-[235px] h-[215px] md:w-32 md:h-32 lg:w-[235px] lg:h-[215px] flex justify-around bg-blue-100 rounded-md transition-all duration-150 shadow-md">
            <img className="icon" src="/Icons/imgfile.svg" alt="image icon" />
          </div>
          <div className="mt-5">
            <p className="name text-[18px]">Images</p>
            <p className="date text-[14px] text-gray-400">Viewed 20 Jul 2020</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="w-[235px] h-[215px] md:w-32 md:h-32 lg:w-[235px] lg:h-[215px] flex justify-around bg-pink-100 rounded-md transition-all duration-500 shadow-md ">
            <img className="icon" src="/Icons/video.svg" alt="video icon" />
          </div>
          <div className="mt-5">
            <p className="name text-[18px]">Videos</p>
            <p className="date text-[14px] text-gray-400">Viewed 20 Jul 2020</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="w-[235px] h-[215px] md:w-32 md:h-32 lg:w-[235px] lg:h-[215px] flex justify-around bg-green-200 rounded-md transition-all duration-500  shadow-md">
            <img
              className="icon"
              src="/Icons/documentfile.svg"
              alt="video icon"
            />
          </div>
          <div className="mt-5">
            <p className="name text-[18px]">Document</p>
            <p className="date text-[14px] text-gray-400">Viewed 20 Jul 2020</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="w-[235px] h-[215px] md:w-32 md:h-32 lg:w-[235px] lg:h-[215px] flex justify-around bg-pink-200 rounded-md transition-all duration-500  shadow-md">
            <img className="icon" src="/Icons/zip.svg" alt="pdf ion" />
          </div>
          <div className="mt-5">
            <p className="name text-[18px]">Compressed</p>
            <p className="date text-[14px] text-gray-400">Viewed 20 Jul 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
