import React from "react";
import { RiDeleteBinLine, RiPushpinLine } from "react-icons/ri/index";
import { MdPlaylistAddCheck } from "react-icons/md/index";
import ActivitiesMenuButton from "./MenuButton";

function ActivitiesMenu() {
  function pin() {}
  function markRead() {}
  function deleteCmd() {}
  return (
    <>
      <div className="tw-bg-white tw-py-3 tw-w-52 tw-absolute tw-left-20 tw-z-20">
        <ActivitiesMenuButton name="Pin" cmd={pin}>
          <RiPushpinLine
            className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
            title="pin"
          />
        </ActivitiesMenuButton>
        <ActivitiesMenuButton name="Mark as read" cmd={markRead}>
          <MdPlaylistAddCheck
            className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
            title="mark"
          />
        </ActivitiesMenuButton>
        <ActivitiesMenuButton name="Delete" cmd={deleteCmd}>
          <RiDeleteBinLine
            className="tw-mr-3 tw-flex tw-self-center tw-text-xl"
            title="delete"
          />
        </ActivitiesMenuButton>
      </div>
    </>
  );
}

export default ActivitiesMenu;
