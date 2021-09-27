import React, { useState } from "react";
import FolderMenuButton from "./MenuButton";
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
import { HandleClickEvent } from "./HandleClickEvent";

function FolderMenu({ folder, openStatus, setOpenStatus }) {
  const [open, setOpen] = useState(false);

  function openCmd() {
    setOpen(true);
  }

  function getLink() {}

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
      <HandleClickEvent
        show={openStatus}
        onClickOutside={() => {
          setOpenStatus(false);
        }}
      >
        <div className="bg-white py-3 w-60 absolute top-1/3 z-20">
          <FolderMenuButton name="Open" cmd={openCmd}>
            <AiOutlineEye
              className="mr-3 flex self-center text-xl"
              title="open"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Get link" cmd={getLink}>
            <HiOutlineLink
              className="mr-3 flex self-center text-xl"
              title="link"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Download" cmd={download}>
            <BsDownload
              className="mr-3 flex self-center text-xl"
              title="download"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Share" cmd={share}>
            <HiOutlineShare
              className="mr-3 flex self-center text-xl"
              title="share"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Select" cmd={select}>
            <BsCheckBox
              className="mr-3 flex self-center text-xl"
              title="selct"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Copy" cmd={copy}>
            <FiCopy className="mr-3 flex self-center text-xl" title="copy" />
          </FolderMenuButton>
          <FolderMenuButton name="Cut" cmd={cut}>
            <GrCut className="mr-3 flex self-center text-xl" title="cut" />
          </FolderMenuButton>
          <FolderMenuButton name="Move to" cmd={moveTo}>
            <HiOutlineFolderRemove
              className="mr-3 flex self-center text-xl"
              title="move"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Add to starred" cmd={addStar}>
            <AiOutlineStar
              className="mr-3 flex self-center text-xl"
              title="star"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Rename" cmd={rename}>
            <AiOutlineEdit
              className="mr-3 flex self-center text-xl"
              title="title"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Properties" cmd={properties}>
            <RiErrorWarningLine
              className="mr-3 flex self-center text-xl"
              title="properties"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Delete" cmd={deleteCmd}>
            <RiDeleteBinLine
              className="mr-3 flex self-center text-xl"
              title="delete"
            />
          </FolderMenuButton>
        </div>
      </HandleClickEvent>
    </>
  );
}

export default FolderMenu;
