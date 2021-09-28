import React, { useState } from "react";
import Aud from "../../../public/Icons/music/active.svg";
import dayjs from "dayjs";
import AudioPreview from "../AudioPreview/index";
import FileMenu from "./FileMenu";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { HandleClickEvent } from "./HandleClickEvent";
import FileType from "./FileType";

function audio({ file }) {
  const [openStatus, setOpenStatus] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    if (e.type === "contextmenu" || e.nativeEvent.which === 3) {
      setOpenStatus(true);
    } 
  };

  // if openStatus is true and there is a click, then make openStatus false

  return (
    <>
      <div
        className="tw-flex tw-items-center tw-w-52 tw-mx-2"
        onClick={(e) => handleContextMenu(e)}
        onContextMenu={(e) => handleContextMenu(e)}
      >
       <FileType file={file} IconName={BsMusicNoteBeamed} />
      </div>
      {openStatus && (
        <FileMenu file={file} setOpenStatus={setOpenStatus} openStatus={openStatus} type={"audio"} />
      )}
    </>
  );
}

export default audio;
