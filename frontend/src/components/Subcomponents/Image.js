import React, { useState } from "react";
import dayjs from "dayjs";
import FileMenu from "./FileMenu";
import Img from "../../../public/Icons/imgfile.svg";
import ImagePreview from "../ImagePreview/index";
import { BsCardImage } from 'react-icons/bs'

function Image({ file }) {
  const [openStatus, setOpenStatus] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    if (e.type === "contextmenu" || e.nativeEvent.which === 3) {
      setOpenStatus(true);
    } else if (e.type === "click") {
      setOpenStatus(false);
    }
  };

  return (
    <>
      <div
        className="flex items-center w-52 mx-2"
        onClick={(e) => handleContextMenu(e)}
        onContextMenu={(e) => handleContextMenu(e)}
      >
        <div className="fileIcon w-14 h-12 flex justify-center items-center bg-red-100 rounded-md">
          <BsCardImage className="text-2xl text-red-500" />
        </div>
        <div className="fileInfo sm:w-20 md:w-30 lg:w-40 overflow-hidden flex flex-col mx-3">
          <span className="w-full truncate text-sm font-semibold">{file.fileName}</span>
          <span className="text-gray-400 truncate text-sm">
            {dayjs(file.dateAdded).fromNow()}
          </span>
        </div>
      </div>
      {/* {openStatus && <ImagePreview file={file} setOpenStatus={setOpenStatus} />} */}
      {openStatus && (
        <FileMenu file={file} setOpenStatus={setOpenStatus} type={"image"} />
      )}
    </>
  );
}

export default Image;
