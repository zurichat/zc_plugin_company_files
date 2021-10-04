import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { folderDetails } from "../../actions/folderAction";
import FolderMenuButton from "./MenuButton";
import axios from "axios";
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
import StarFolder from "./StarPutFolder";

function FolderMenu({ folder, openStatus, setOpenStatus }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  function openCmd() {
    setOpen(true);
    dispatch(folderDetails(folder._id));
  }

  function openFolder(){
    const currentState = history.state;
    console.log("CURRENT STATE::: ", currentState);
    history.pushState({...currentState, pageData: {
      folder
    }}, "", "/companyfiles/open-folder");
  }

  function getLink() {}

  function download() {}

  function share() {}

  function select() {}

  function copy() {}

  function cut() {}

  function moveTo() {}

  async function addStar() {
    try {
      const res = await axios.put("/folders/starFolder/" + folder._id);
      alert(res.data.message);
    } catch (err) {
      console.error(err);
    }
  }

  function rename() {}

  function properties() {
    dispatch(folderDetails(folder._id));
  }

  function deleteCmd() {}

  function handleScroll(e) {
    const element = e;
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    if (elementTop < 0) {
      element.style.top = "0px";
    } else if (elementBottom > windowHeight) {
      element.style.top = `${windowHeight - elementBottom}px`;
    }
  }

  useEffect(() => {
    handleScroll(document.getElementById("folderContextMenu"));
  }, []);

  return (
    <>
      <HandleClickEvent
        show={openStatus}
        onClickOutside={() => {
          setOpenStatus(false);
        }}
      >
        <div
          id="folderContextMenu"
          className="tw-bg-white tw-py-3 tw-w-60 tw-absolute tw-top-1/3 tw-z-20"
        >
          {/*
            <FolderMenuButton name="Open" cmd={openCmd}>
              <AiOutlineEye
                className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
                title="open"
              />
            </FolderMenuButton>
          */}
          <FolderMenuButton name="Open" cmd={openFolder}>
            <AiOutlineEye
              className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
              title="open"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Get link" cmd={getLink}>
            <HiOutlineLink
              className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
              title="link"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Download" cmd={download}>
            <BsDownload
              className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
              title="download"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Share" cmd={share}>
            <HiOutlineShare
              className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
              title="share"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Select" cmd={select}>
            <BsCheckBox
              className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
              title="selct"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Copy" cmd={copy}>
            <FiCopy
              className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
              title="copy"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Cut" cmd={cut}>
            <GrCut
              className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
              title="cut"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Move to" cmd={moveTo}>
            <HiOutlineFolderRemove
              className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
              title="move"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Add to starred" cmd={addStar}>
            <AiOutlineStar
              className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
              title="star"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Rename" cmd={rename}>
            <AiOutlineEdit
              className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
              title="title"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Properties" cmd={properties}>
            <RiErrorWarningLine
              className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
              title="properties"
            />
          </FolderMenuButton>
          <FolderMenuButton name="Delete" cmd={deleteCmd}>
            <RiDeleteBinLine
              className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
              title="delete"
            />
          </FolderMenuButton>
        </div>
      </HandleClickEvent>
    </>
  );
}

export default FolderMenu;
