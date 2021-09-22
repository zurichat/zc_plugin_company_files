import React from "react";
<<<<<<< HEAD
import allFiles from "../../../../public/Icons/AllFiles.svg";
import shared from "../../../../public/Icons/shared.svg";
import starred from "../../../../public/Icons/starred.svg";
import trash from "../../../../public/Icons/homeTrash.svg";
import help from "../../../../public/Icons/Help.svg";
import { Link } from "react-router-dom";
=======
import AllFiles from "../../../../public/Icons/AllFiles.svg";
import Shared from "../../../../public/Icons/shared.svg";
import Starred from "../../../../public/Icons/starred.svg";
import Trash from "../../../../public/Icons/homeTrash.svg";
import Help from "../../../../public/Icons/Help.svg";
>>>>>>> ee7fb05e4eb92f48c1d4ccda7896dc948209f1b5

const index = () => {
  return (
    <div className="w-full px-10 py-12">
      <div className="w-full flex flex-wrap justify-between sm:justify-between">
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-[180px] xl:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">

            <img className="icon" src={AllFiles} alt="image icon" className=" w-1/3" />

          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">All Files</p>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28  lg:w-32 lg:h-32 xl:w-[180px] xl:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">

            <img className="icon" src={Shared} alt="image icon" className=" w-1/3" />

          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">Shared</p>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28  lg:w-32 lg:h-32 xl:w-[180px] xl:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">

            <img className="icon" src={Starred} alt="image icon" className=" w-1/3" />

          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">Starred</p>
          </div>
        </div>
<<<<<<< HEAD
        <Link to="/trashapp">
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
=======
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28  lg:w-32 lg:h-32 xl:w-[180px] xl:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">

            <img className="icon" src={Trash} alt="image icon" className=" w-1/3" />

>>>>>>> ee7fb05e4eb92f48c1d4ccda7896dc948209f1b5
          </div>
        </Link>
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28  lg:w-32 lg:h-32 xl:w-[180px] xl:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">

            <img className="icon" src={Help} alt="image icon" className=" w-1/3" />

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
