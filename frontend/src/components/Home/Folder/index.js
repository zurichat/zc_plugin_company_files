import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";
import FolderComponent from "./Folder";
import RealTime from "../../../helpers/realtime.helper";
import { useDispatch, useSelector } from "react-redux";
import { fetchFolders } from "../../../actions/folderAction";

const index = () => {
  const [newFolders, setNewFolders] = useState({ data: {} });
  const dispatch = useDispatch();
  const { loading, error, folders } = useSelector(
    (state) => state.rootReducer.folderReducer
  );

  // let progress = useRef(false)

  useEffect(() => dispatch(fetchFolders()), [dispatch]);

  useEffect(() => {
    const fetchNewData = () => {
      RealTime.subscribe("allFolders", "", (data) => setNewFolders(data));
    };
    fetchNewData();
    console.log(newFolders);
  }, []);

  if (error)
    return (
      <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center tw-text-red-600">
        Error failed
      </div>
    );

  if (loading)
    return (
      <div className="tw-w-full tw-py-10 ">
        <div className="tw-w-full tw-flex tw-justify-between tw-items-center tw-mb-4">
          <h2 className="tw-text-lg tw-font-semibold tw-text-gray-900">
            Folders
          </h2>
          <Link
            to="/all-folders"
            className="tw-text-green-500 tw-text-lg tw-font-semibold tw-hover:text-green-600"
          >
            View All
          </Link>
        </div>
        <div className="tw-h-48 tw-flex tw-items-center tw-justify-center">
          <Loader
            type="ThreeDots"
            color="#00B87C"
            height={100}
            width={100}
            visible="true"
          />
        </div>
      </div>
    );

  return (
    <div className="tw-w-full tw-py-10 ">
      <div className="w-full tw-flex tw-justify-between tw-items-center tw-mb-4">
        <h2 className="tw-text-lg tw-font-semibold tw-text-gray-900">
          Folders
        </h2>
        <Link
          to="/all-folders"
          className="tw-text-green-500 tw-text-lg tw-font-semibold tw-hover:text-green-600"
        >
          View All
        </Link>
      </div>
      <div className="tw-flex tw-flex-wrap tw-justify-between">
        {folders.data.length ? (
          folders.data
            .slice(0, 4)
            .map((folder) => (
              <FolderComponent key={folder.folderId} folder={folder} />
            ))
        ) : (
          <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center">
            No Folders
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
