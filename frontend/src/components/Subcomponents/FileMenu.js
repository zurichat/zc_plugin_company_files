import React, { useState } from "react";
import FileMenuButton from "./FileMenuButton";
import Eye from "../../../public/Icons/eye/active.svg";
import Move from "../../../public/Icons/move/active.svg";
import ImagePreview from "../ImagePreview/index";

function FileMenu({ file, previewCmd, openWith }) {
  
  return (
    <>
      <div className="bg-white py-3 w-60 absolute">
        <FileMenuButton
          name="preview"
          imgLink={Eye}
          altText="preview"
          cmd={previewCmd}
        />
        <FileMenuButton
          name="open with"
          imgLink={Move}
          altText="open with"
          cmd={openWith}
        />
      </div>
    </>
  );
}

export default FileMenu;
