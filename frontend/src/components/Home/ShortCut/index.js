import React from "react";
import allFiles from "../../../../public/Icons/AllFiles.svg";
import shared from "../../../../public/Icons/shared.svg";
import starred from "../../../../public/Icons/starred.svg";
import trash from "../../../../public/Icons/homeTrash.svg";
import help from "../../../../public/Icons/Help.svg";

const index = () => {
  return (
    <div className="w-full px-10 py-12">
      <div className="w-full flex flex-wrap justify-between sm:justify-between">
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-[180px] xl:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">
            <img
              className="icon"
              src={allFiles}
              alt="image icon"
              className="w-1/3"
            />
          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">All Files</p>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28  lg:w-32 lg:h-32 xl:w-[180px] xl:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">
            <img
              className="icon"
              src={shared}
              alt="image icon"
              className="w-1/3"
            />
          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">Shared</p>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28  lg:w-32 lg:h-32 xl:w-[180px] xl:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">
            <img
              className="icon"
              src={starred}
              alt="image icon"
              className="w-1/3"
            />
          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">Starred</p>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28  lg:w-32 lg:h-32 xl:w-[180px] xl:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">
            <img
              className="icon"
              src={trash}
              alt="image icon"
              className="w-1/3"
            />
          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">Trash</p>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28  lg:w-32 lg:h-32 xl:w-[180px] xl:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">
            <img
              className="icon"
              src={help}
              alt="image icon"
              className="w-1/3"
            />
          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">Help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
