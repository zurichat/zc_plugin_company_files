import React from "react";
import LeftArrow from "../../../public/Icons/arrow-left/active.svg";
import RightArrow from "../../../public/Icons/arrow-right/active.svg";
import ZoomIn from "../../../public/Icons/zoom-in/active.svg";
import ZoomOut from "../../../public/Icons/zoom-out/active.svg";
import Nav from "../Subcomponents/nav";

function index({ file, setOpenStatus }) {
  return (
    <div className="tw-bg-gray-800 tw-bg-opacity-70 tw-overflow-auto tw-h-full tw-w-full tw-flex-auto tw-flex tw-flex-col tw-justify-between tw-pb-6 tw-fixed tw-z-30 tw-top-0 tw-left-0 tw-bottom-0 tw-right-0">
      <Nav file={file} setOpenStatus={setOpenStatus} />
      <div className="tw-flex tw-flex-col justify-between items-center w-full">
        <div className="tw-flex justify-between w-full md:px-6 px-2">
          <div className="tw-flex tw-self-center">
            <img
              src={LeftArrow}
              alt="left-arrow"
              className="bg-black rounded-full md:h-14 md:w-14 w-5 h-5 p-1 md:p-3"
            />
          </div>
          <div className="flex items-center justify-center">
            {/* <img
              src="../../../public/Icons/zoom-out/active.svg"
              alt="image"
              className="md:min-w-0 min-w-full w-60 md:w-10/12"
            /> */}
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              className="md:min-w-0 min-w-full w-60 md:w-10/12"
              src={file.url}
              controls
              autoPlay
            >
              <track />
            </video>
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
          <img src={ZoomIn} alt="zoom-in" className="md:w-10 w-7 mr-4" />
          <img src={ZoomOut} alt="zoom-out" className="md:w-10 w-7" />
        </div>
      </div>
    </div>
  );
}

export default index;
