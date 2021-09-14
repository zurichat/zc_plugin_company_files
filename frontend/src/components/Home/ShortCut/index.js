import React from "react";

const index = () => {
  return (
    <div className="w-full px-10 py-12">
      <div className="w-full flex flex-wrap justify-around sm:justify-between">
        <div className="mb-10 md:mb-0">
          <div className="w-[235px] h-[215px] md:w-32 md:h-32 lg:w-[180px] lg:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">
            <img className="icon" src="/Icons/AllFiles.svg" alt="image icon" />
          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">All Files</p>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <div className="w-[235px] h-[215px] md:w-32 md:h-32 lg:w-[180px] lg:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">
            <img className="icon" src="/Icons/shared.svg" alt="image icon" />
          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">All Files</p>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <div className="w-[235px] h-[215px] md:w-32 md:h-32 lg:w-[180px] lg:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">
            <img className="icon" src="/Icons/starred.svg" alt="image icon" />
          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">All Files</p>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <div className="w-[235px] h-[215px] md:w-32 md:h-32 lg:w-[180px] lg:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">
            <img className="icon" src="/Icons/homeTrash.svg" alt="image icon" />
          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">All Files</p>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <div className="w-[235px] h-[215px] md:w-32 md:h-32 lg:w-[180px] lg:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">
            <img className="icon" src="/Icons/Help.svg" alt="image icon" />
          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">All Files</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
