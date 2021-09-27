import React from "react";
import AllFiles from "../../../../public/Icons/AllFiles.svg";
import Shared from "../../../../public/Icons/shared.svg";
import Starred from "../../../../public/Icons/starred.svg";
import Star from "../../../../public/Icons/Star.svg";
import Trash from "../../../../public/Icons/homeTrash.svg";
import Help from "../../../../public/Icons/Help.svg";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="w-full py-6">
      <div className="w-full flex flex-wrap justify-between sm:justify-between">
        <Link to="./">
          <div className="mb-10 md:mb-0">
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-44 lg:h-44 flex justify-around bg-green-100 rounded-md transition-all duration-150 shadow-md hover:bg-green-200">
              <img
                className="icon"
                src={AllFiles}
                alt="image icon"
                className=" w-1/3"
              />
            </div>
            <div className="mt-5">
              <p className="name text-base font-semibold text-center">All Files</p>
            </div>
          </div>
        </Link>
        

        <Link to="./">
          <div className="mb-10 md:mb-0">
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-44 lg:h-44 flex justify-around bg-green-100 rounded-md transition-all duration-150 shadow-md hover:bg-green-200">
              <img
                className="icon"
                src={Shared}
                alt="image icon"
                className=" w-1/3"
              />
            </div>
            <div className="mt-5">
              <p className="name text-base font-semibold text-center">Shared</p>
            </div>
          </div>
        </Link>
        

        <Link to="./">
          <div className="mb-10 md:mb-0">
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-44 lg:h-44 flex justify-around bg-green-100 rounded-md transition-all duration-150 shadow-md hover:bg-green-200">
              <img
                className="icon"
                src={Star}
                alt="image icon"
                className="w-1/3"
              />
            </div>
            <div className="mt-5">
              <p className="name text-base font-semibold text-center">Starred</p>
            </div>
          </div>
        </Link>
        
        <Link to="/trashapp">
          <div className="mb-10 md:mb-0">
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-44 lg:h-44 flex justify-around bg-green-100 rounded-md transition-all duration-150 shadow-md hover:bg-green-200">
              <img
                className="icon"
                src={Trash}
                alt="image icon"
                className=" w-1/3"
              />
            </div>
            <div className="mt-5">
              <p className="name text-base font-semibold text-center">Trash</p>
            </div>
          </div>
        </Link>
        <Link to="/help">
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28 lg:w-44 lg:h-44 flex justify-around bg-green-100 rounded-md transition-all duration-150 shadow-md hover:bg-green-200">
            <img
              className="icon"
              src={Help}
              alt="image icon"
              className=" w-1/3"
            />
          </div>
          <div className="mt-5">
            <p className="name text-base font-semibold text-center">Help</p>
          </div>
        </div>
        </Link>
        
      </div>
    </div>
  );
};

export default index;
