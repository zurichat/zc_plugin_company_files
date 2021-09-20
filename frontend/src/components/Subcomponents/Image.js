import React, { useState } from "react";
import dayjs from "dayjs";
import FileMenu from "./FileMenu";
import Vertical from "../../../public/Icons/more-vertical/active.svg";
import Img from "../../../public/Icons/imgfile.svg";
import ImagePreview from "../ImagePreview/index";

function Image({ file }) {
  const [openStatus, setOpenStatus] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);
  const openMenu = (file) => {
    console.log("clicked");
    console.log(`${file.fileName} clicked`);
    setOpenStatus(true);
  };

  function handleMenuStatus() {
    menuStatus ? setMenuStatus(false) : setMenuStatus(true);
  }

  function previewCmd() {
    console.log("preview clicked");
    // console.log(file);
    setOpenStatus(true);
  }
  function openWith() {
    console.log("open with clicked");
  }

  return (
    <>
      <div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
        <img src={Img} alt="Image icon" className="" />
      </div>
      <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
        <span className="w-full truncate text-[14px]">{file.fileName}</span>
        <span className="text-gray-400 text-[13px]">
          {dayjs(file.dateAdded).fromNow()}
        </span>
      </div>
      <div className="options self-start mx-3 relative">
        <img
          src={Vertical}
          alt="Vertical Icon"
          // onClick={() => openMenu(file)}
          onClick={() => handleMenuStatus()}
        />
        {menuStatus && (
          <FileMenu file={file} previewCmd={previewCmd} openWith={openWith} />
        )}
      </div>
      {openStatus && <ImagePreview file={file} setOpenStatus={setOpenStatus} />}
    </>
  );
}

export default Image;
