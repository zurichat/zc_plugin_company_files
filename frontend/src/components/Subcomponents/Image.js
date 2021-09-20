import React, { useState } from "react";
import dayjs from "dayjs";
import FileMenu from "./FileMenu";
import Vertical from "../../../public/Icons/more-vertical/active.svg";
import Img from "../../../public/Icons/imgfile.svg";
import ImagePreview from "../ImagePreview/index";

function Image({ file }) {
  const [openStatus, setOpenStatus] = useState(false);
  const handlePreview = (e) => {
    e.preventDefault();
    if (e.type === "contextmenu" || e.nativeEvent.which === 3) {
      console.log("right click");
      console.log("clicked");
      setOpenStatus(true);
    }
  };

  return (
    <>
      <div
        className="flex"
        onClick={(e) => handlePreview(e)}
        onContextMenu={(e) => handlePreview(e)}
      >
        <div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
          <img src={Img} alt="Image icon" className="" />
        </div>
        <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
          <span className="w-full truncate text-[14px]">{file.fileName}</span>
          <span className="text-gray-400 text-[13px]">
            {dayjs(file.dateAdded).fromNow()}
          </span>
        </div>
      </div>
      {openStatus && <ImagePreview file={file} setOpenStatus={setOpenStatus} />}
    </>
  );
}

export default Image;
