import React from "react";
import ImgFile from "../../../../public/Icons/imgfile.svg";
import Video from "../../../../public/Icons/video.svg";
import DocumentFile from "../../../../public/Icons/documentfile.svg";
import Zip from "../../../../public/Icons/zip.svg";
import FolderIcon from "../../../../public/Icons/folderIcon.svg";
import vector from "../../../../public/Icons/Vector.png";
import { BsArrowUpDown } from "react-icons/bs";
import { BsGrid3X2 } from "react-icons/bs";
import Viewed from "./viewed";
import {Link} from "react-router-dom";

const RecentlyViewed = () => {
  return (
    <div className="tw-w-full tw-py-10">
      <div className="tw-w-full tw-flex tw-justify-between tw-items-start">
        <h3 className="tw-mb-8 tw-truncate tw-text-lg tw-font-semibold tw-text-center tw-self-end tw-h-full tw-text-gray-900">
          Recently Viewed
        </h3>
        <div className="tw-flex tw-items-center">
          {/* <BsArrowUpDown title="sort" className="tw-text-gray-400 tw-text-lg tw-mx-2 hover:tw-text-gray-500 tw-cursor-pointer" />
          <BsGrid3X2 title="grid" className="tw-text-gray-400 tw-mx-2 tw-text-2xl hover:tw-text-gray-500 tw-cursor-pointer" /> */}
          <Link
            to="/activities"
            className="tw-mx-4 tw-truncate tw-py-2 tw-px-4 tw-bg-green-500 tw-text-white tw-text-sm tw-rounded hover:tw-bg-green-600"
          >
            See Activities
          </Link>
        </div>
      </div>

      <div className="tw-w-full tw-grid tw-grid-cols-auto-1 tw-gap-5 md:tw-gap-10 lg:tw-gap-14">
        <Viewed
          name={"Images"}
          image={ImgFile}
          altText={"images"}
          dateViewed={"20 Jul 2020"}
          bgColor={"tw-bg-blue-100"}
          link={"recently-viewed-images"}
        />
        <Viewed
          name={"Videos"}
          image={Video}
          altText={"videos"}
          dateViewed={"20 Jul 2020"}
          bgColor={"tw-bg-pink-100"}
          link={"recently-viewed-videos"}
        />
        <Viewed
          name={"Documents"}
          image={DocumentFile}
          altText={"document"}
          dateViewed={"20 Jul 2020"}
          bgColor={"tw-bg-green-200"}
          link={"recently-viewed-docs"}
        />
        <Viewed
          name={"Compressed"}
          image={Zip}
          altText={"zip"}
          dateViewed={"20 Jul 2020"}
          bgColor={"tw-bg-pink-200"}
          link={"recently-viewed-zips"}
        />

        {/* <Viewed
          name={"Folders"}
          image={FolderIcon}
          altText={"zip"}
          dateViewed={"20 Jul 2020"}
          bgColor={"tw-bg-yellow-100"}
          link={"recently-viewed-folders"}
        /> */}
        
      </div>
    </div>
  );
};

export default RecentlyViewed;