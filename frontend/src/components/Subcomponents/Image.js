import React, { useState } from "react";
import dayjs from "dayjs";
import FileMenu from "./FileMenu";
import Img from "../../../public/Icons/imgfile.svg";
import ImagePreview from "../ImagePreview/index";
import { BsCardImage } from "react-icons/bs";
import { HandleClickEvent } from "./HandleClickEvent";
import FileType from "./FileType";

function Image({ file }) {
  const [openStatus, setOpenStatus] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    if (e.type === "contextmenu" || e.nativeEvent.which === 3) {
      setOpenStatus(true);
    }
  };

  return (
    <>
      <div
        className="tw-flex tw-items-center tw-w-52 tw-mx-2"
        onClick={(e) => handleContextMenu(e)}
        onContextMenu={(e) => handleContextMenu(e)}
      >
        <FileType file={file} IconName={BsCardImage} />
      </div>
      {openStatus && (
        <FileMenu file={file} setOpenStatus={setOpenStatus} openStatus={openStatus} type={"image"} />
      )}
    </>
  );
}

export default Image;
