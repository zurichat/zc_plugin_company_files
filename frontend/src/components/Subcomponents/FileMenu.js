import React, { useState } from "react";
import FileMenuButton from "./MenuButton";
import {
  HiOutlineFolderRemove,
  HiOutlineLink,
  HiOutlineShare,
} from "react-icons/hi/index";
import { BsDownload, BsCheckBox } from "react-icons/bs/index";
import {
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineStar,
} from "react-icons/ai/index";
import { RiDeleteBinLine, RiErrorWarningLine } from "react-icons/ri/index";
import { GrCut } from "react-icons/gr/index";
import { FiCopy } from "react-icons/fi/index";
import AudioPreview from "../AudioPreview/index";
import VideoPreview from "../VideoPreview/Index";
import ImagePreview from "../ImagePreview/index";
import DocumentPreview from "../Preview/DocumentPreview";
import PdfPreview from "../Preview/PdfPreview";
import PptPreview from "../Preview/PdfPreview";
import ExcelPreview from "../Preview/ExcelPreview";

function FileMenu({ file, setOpenStatus, type }) {
  const [openPreview, setOpenPreview] = useState(false);

  function previewCmd() {
    console.log("Preview");
    setOpenPreview(true);
  }

  function getLink() {  }

  function download() {}

  function share() {}

  function select() {}

  function copy() {}

  function cut() {}

  function moveTo() {}

  function addStar() {}

  function rename() {}

  function properties() {}

  function deleteCmd() {}

  return (
    <>
      <div className="bg-white py-3 w-60 absolute left-5 z-20">
        <FileMenuButton name="Preview" cmd={previewCmd}>
          <AiOutlineEye
            className="mr-3 flex self-center text-xl"
            title="preview"
          />
        </FileMenuButton>
        <FileMenuButton name="Get link" cmd={getLink}>
          <HiOutlineLink
            className="mr-3 flex self-center text-xl"
            title="link"
          />
        </FileMenuButton>
        <FileMenuButton name="Download" cmd={download}>
          <BsDownload
            className="mr-3 flex self-center text-xl"
            title="download"
          />
        </FileMenuButton>
        <FileMenuButton name="Share" cmd={share}>
          <HiOutlineShare
            className="mr-3 flex self-center text-xl"
            title="share"
          />
        </FileMenuButton>
        <FileMenuButton name="Select" cmd={select}>
          <BsCheckBox className="mr-3 flex self-center text-xl" title="selct" />
        </FileMenuButton>
        <FileMenuButton name="Copy" cmd={copy}>
          <FiCopy className="mr-3 flex self-center text-xl" title="copy" />
        </FileMenuButton>
        <FileMenuButton name="Cut" cmd={cut}>
          <GrCut className="mr-3 flex self-center text-xl" title="cut" />
        </FileMenuButton>
        <FileMenuButton name="Move to" cmd={moveTo}>
          <HiOutlineFolderRemove
            className="mr-3 flex self-center text-xl"
            title="move"
          />
        </FileMenuButton>
        <FileMenuButton name="Add to starred" cmd={addStar}>
          <AiOutlineStar
            className="mr-3 flex self-center text-xl"
            title="star"
          />
        </FileMenuButton>
        <FileMenuButton name="Rename" cmd={rename}>
          <AiOutlineEdit
            className="mr-3 flex self-center text-xl"
            title="title"
          />
        </FileMenuButton>
        <FileMenuButton name="Properties" cmd={properties}>
          <RiErrorWarningLine
            className="mr-3 flex self-center text-xl"
            title="properties"
          />
        </FileMenuButton>
        <FileMenuButton name="Delete" cmd={deleteCmd}>
          <RiDeleteBinLine
            className="mr-3 flex self-center text-xl"
            title="delete"
          />
        </FileMenuButton>
      </div>
      {openPreview ? (
        type === "audio" ? (
          <AudioPreview file={file} setOpenStatus={setOpenStatus} />
        ) : type === "video" ? (
          <VideoPreview file={file} setOpenStatus={setOpenStatus} />
        ) : type === "image" ? (
          <ImagePreview file={file} setOpenStatus={setOpenStatus} />
        ) : type === "pdf" ? (
          <PdfPreview file={file} setOpenStatus={setOpenStatus} />
        ) : type === "word" ? (
          <DocumentPreview file={file} setOpenStatus={setOpenStatus} />
        ) : type === "powerpoint" ? (
          <PptPreview file={file} setOpenStatus={setOpenStatus} />
        ) : type === "excel" ? (
          <ExcelPreview file={file} setOpenStatus={setOpenStatus} />
        ) : (
          <div>
            <p>Can't preview this file</p>
          </div>
        )
      ) : null}
    </>
  );
}

export default FileMenu;
