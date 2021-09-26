import React from "react";
import ActivitiesMenuButton from "./MenuButton";
import { RiDeleteBinLine, RiPushpinLine } from "react-icons/ri/index";
import { MdPlaylistAddCheck } from "react-icons/md/index";

function ActivitiesMenu() {
  function pin() {}
  function markRead() {}
  function deleteCmd() {}
  return (
    <>
      <div className="bg-white py-3 w-52 absolute left-20 z-20">
        <ActivitiesMenuButton name="Pin" cmd={pin}>
          <RiPushpinLine
            className="mr-3 flex self-center text-xl"
            title="pin"
          />
        </ActivitiesMenuButton>
        <ActivitiesMenuButton name="Mark as read" cmd={markRead}>
          <MdPlaylistAddCheck
            className="mr-3 flex self-center text-xl"
            title="mark"
          />
        </ActivitiesMenuButton>
        <ActivitiesMenuButton name="Delete" cmd={deleteCmd}>
          <RiDeleteBinLine
            className="mr-3 flex self-center text-xl"
            title="delete"
          />
        </ActivitiesMenuButton>
      </div>
    </>
  );
}

export default ActivitiesMenu;
