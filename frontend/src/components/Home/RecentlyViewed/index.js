import React from "react";
import ImgFile from "../../../../public/Icons/imgfile.svg";
import Video from "../../../../public/Icons/video.svg";
import DocumentFile from "../../../../public/Icons/documentfile.svg";
import Zip from "../../../../public/Icons/zip.svg";
import vector from "../../../../public/Icons/Vector.png";
import { BsArrowUpDown } from "react-icons/bs";
import { BsGrid3X2 } from "react-icons/bs";
import Viewed from "./viewed";

const RecentlyViewed = () => {
  return (
    <div className="tw-w-full py-10">
      <div className="w-full flex justify-between items-start">
        <h3 className=" mb-8 text-lg font-semibold text-center self-end h-full text-gray-900">
          Recently Viewed
        </h3>
        <div className="flex items-center">
          <BsArrowUpDown className="text-gray-400 text-lg mx-2 hover:text-gray-500 cursor-pointer" />
          <BsGrid3X2 className="text-gray-400 mx-2 text-2xl hover:text-gray-500 cursor-pointer" />
          <button className="mx-4 py-2 px-4 bg-green-500 text-white text-sm rounded hover:bg-green-600">
            See Activities
          </button>
        </div>
      </div>

      <div className="tw-w-full tw-flex tw-flex-wrap tw-justify-between">
        <Viewed
          name={"Images"}
          image={ImgFile}
          altText={"images"}
          dateViewed={"20 Jul 2020"}
          bgColor={"bg-blue-100"}
        />
        <Viewed
          name={"Videos"}
          image={Video}
          altText={"videos"}
          dateViewed={"20 Jul 2020"}
          bgColor={"bg-pink-100"}
        />
        <Viewed
          name={"Document"}
          image={DocumentFile}
          altText={"document"}
          dateViewed={"20 Jul 2020"}
          bgColor={"bg-green-200"}
        />
        <Viewed
          name={"Compressed"}
          image={Zip}
          altText={"zip"}
          dateViewed={"20 Jul 2020"}
          bgColor={"bg-pink-200"}
        />
      </div>
    </div>
  );
};

export default RecentlyViewed;
