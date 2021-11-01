import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "react-simple-snackbar";
import useSWR from "swr";
import RealTime from "../../../helpers/realtime.helper";
import { RTCSubscription } from "../../../helpers/RTCSubscription";
import { fetchFiles } from "../../../actions/fileAction";
import {
  getUserInfo,
  getWorkspaceUser,
  getWorkspaceUsers
} from "../../../actions/workspaceInfo";

async function fetcher(url) {
  const res = await axios.get(url);
  return res.data;
}

const API_URL =
  window.location.hostname.includes("localhost") ||
  window.location.hostname.includes("127.0.0.1")
    ? "http://127.0.0.1:5500/api/v1"
    : "https://companyfiles.zuri.chat/api/v1";

const params = new URLSearchParams(window.location.search);
const roomId = params.get("roomId") || "6157fca687540d8d01ffc2bb";

const index = () => {
  const [userInRoom, setUserRoomCheck] = useState(false);
  const [SnackBar] = useSnackbar({
    position: "bottom-center",
    style: { backgroundColor: "#00B87C", color: "#fff" }
  });

  const { currentWorkspace, id } = getWorkspaceUser();
  const { data, error } = useSWR(
    `${API_URL}/rooms/${roomId}/user-in-room?userId=${id}&orgId=${currentWorkspace}`,
    fetcher
  );

  setUserRoomCheck(data.isMemberInRoom);

  if (userInRoom)
    return (
      <div className="h-96 flex items-center justify-center">
        <button
          onClick={() => addUserToRoom(currentWorkspace, id)}
          className="tw-mt-4 tw-px-3 tw-py-2 tw-text-sm tw-text-green-500 tw-border tw-rounded tw-border-green-500 hover:tw-text-white hover:tw-bg-green-500 tw-outline-none"
        >
          Join Room
        </button>
      </div>
    );

  if (error)
    return (
      <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center tw-text-red-600 tw-py-4">
        Error failed
      </div>
    );
};

export default index;
