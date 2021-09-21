import React from "react";
import Nav from "../Subcomponents/nav"
import LeftArrow from "../../../public/Icons/arrow-left/active.svg";
import RightArrow from "../../../public/Icons/arrow-right/active.svg";
import ZoomIn from "../../../public/Icons/zoom-in/active.svg"
import ZoomOut from "../../../public/Icons/zoom-out/active.svg"

function index({ file, setOpenStatus }) {
  return (
    <div className="bg-gray-800 bg-opacity-70 overflow-auto h-full w-full flex-auto flex flex-col justify-between pb-6 absolute z-10 top-0 left-0 bottom-0 right-0">
      <Nav file={file} setOpenStatus={setOpenStatus} />
      <div className="flex flex-col justify-between items-center h-3/4 w-full">
        <div className="flex justify-between h-full w-full md:px-6 px-2">
          <div className="flex self-center">
            <img
              src={LeftArrow}
              alt="left-arrow"
              className="bg-black rounded-full md:h-14 md:w-14 w-5 h-5 p-1 md:p-3"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={file.url}
              alt="image"
              className="max-w-sm h-96 md:max-w-lg md:h-2/4 lg:max-w-lg lg:h-3/4"
            />
          </div>
          <div className="flex self-center">
            <img
              src={RightArrow}
              alt="right-arrow"
              className="bg-black rounded-full md:h-14 md:w-14 w-5 h-5 p-1 md:p-3"
            />
          </div>
        </div>
        <div className="bg-black py-3 px-7 flex justify-between mt-5">
          <img
            src={ZoomIn}
            alt="zoom-in"
            className="md:w-10 w-7 mr-4"
          />
          <img
            src={ZoomOut}
            alt="zoom-out"
            className="md:w-10 w-7"
          />
        </div>
      </div>
    </div>
  );
}

export default index;
