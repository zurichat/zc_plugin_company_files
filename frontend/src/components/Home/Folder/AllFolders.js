import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";
import FolderComponent from "./Folder";
import { FaArrowLeft } from "react-icons/fa/index";
import { BsArrowUpDown } from "react-icons/bs";
import { BsGrid3X2 } from "react-icons/bs";
import UploadProgressModal from "../../FileUpload/UploadProgressModal";
import FileUpload from "../../FileUpload/index";
import FileOptions from "../../FileUpload/FileOptions";
import RealTime from "../../../helpers/realtime.helper";

async function fetcher(url) {
  const res = await axios.get(url);
  return res.data;
}

const API_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:5500/api/v1"
  : "https://companyfiles.zuri.chat/api/v1";

const AllFolders = () => {
  const { data, error } = useSWR(`${API_URL}/folders/all`, fetcher);

  const [upload, setUpload] = useState(false);
  const [progress, setProgress] = useState(false);
  const [options, setOptions] = useState(false);
  const [demo, setDemo] = useState(false);
  const [newFiles, setNewFiles] = useState({ data: {} });

  useEffect(() => {
    const fetchNewData = () => {
      RealTime.subscribe("allFiles", "", (data) => setNewFiles(data));
    };
    fetchNewData();
    console.log(newFiles);
  }, []);

  

  const showOptions = (e) => {
    setOptions(!options);
    e.stopPropagation();
    document.addEventListener("click", hideOptions);
  };

  const hideOptions = (event) => {
    setOptions(false);
    event.stopPropagation();
    document.removeEventListener("click", hideOptions);
  };

  const showUploadModal = () => {
    setUpload(!upload);
  };

  const hideUploadModal = () => {
    setUpload(!upload);
  };

  const showProgressModal = () => {
    hideUploadModal();
    setProgress(true);
    setDemo(true);
    console.log({ Progress: progress, Demo: demo });
  };

  const hideProgressModal = () => {
    setProgress(false);
  };

  function goBack() {
    window.history.back();
  }

  if (error)
    return (
      <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center tw-text-red-600 tw-py-4 tw-h-screen tw-w-full">
        failed to load
      </div>
    );

  if (!data)
    return (
      <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center tw-py-4 tw-h-screen tw-w-full">
        loading...
      </div>
    );

  return (
    <div className="tw-w-full tw-py-2 tw-px-3 md:tw-px-5">
      <button
        onClick={showOptions}
        className="tw-mt-4 tw-px-3 tw-py-2 tw-text-sm tw-text-green-500 tw-border tw-rounded tw-border-green-500 hover:tw-text-white hover:tw-bg-green-500 tw-outline-none"
      >
        Add File
      </button>
      <FileOptions options={options} showUploadModal={showUploadModal} />
      <div className="tw-w-full tw-flex tw-justify-between tw-items-center tw-mt-2 tw-mb-4">
        <h2 className="tw-text-lg tw-font-normal tw-text-gray-900 tw-flex tw-flex-row">
          <FaArrowLeft
            className="tw-text-lg tw-text-black tw-mr-3 tw-self-center"
            onClick={() => goBack()}
          />
          All Folders
        </h2>
        <div className="tw-flex tw-items-center">
          <BsArrowUpDown title="sort" className="tw-text-gray-400 tw-text-lg tw-mx-2 hover:tw-text-gray-500 tw-cursor-pointer" />
          <BsGrid3X2 title="grid" className="tw-text-gray-400 tw-mx-2 tw-text-2xl hover:tw-text-gray-500 tw-cursor-pointer" />
          <Link
            to="/activities"
            className="tw-mx-4 tw-py-2 tw-px-4 tw-bg-green-500 tw-text-white tw-text-sm tw-rounded hover:tw-bg-green-600"
          >
            See Activities
          </Link>
        </div>
      </div>
      <div className="tw-flex tw-flex-wrap tw-justify-between">
        {data.data.length ? (
          data.data.map((folder) => (
            <FolderComponent key={folder.folderId} folder={folder} />
          ))
        ) : (
          <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center">
            No Folders
          </div>
        )}
      </div>
      {upload && (
        <FileUpload
          upload={upload}
          progress={progress}
          hideUploadModal={hideUploadModal}
          showProgressModal={showProgressModal}
          hideProgressModal={hideProgressModal}
        />
      )}
    </div>
  );
};

export default AllFolders;
