import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "../../Subcomponents/Image";
import Pdf from "../../Subcomponents/Pdf";
import Zip from "../../Subcomponents/Zip";
import Excel from "../../Subcomponents/Excel";
import Video from "../../Subcomponents/Video";
import Powerpoint from "../../Subcomponents/Powerpoint";
import Document from "../../Subcomponents/Document";
import Audio from "../../Subcomponents//audio";
import { FaArrowLeft } from "react-icons/fa/index";
import { BsArrowUpDown } from "react-icons/bs";
import { BsGrid3X2 } from "react-icons/bs";
import UploadProgressModal from "../../FileUpload/UploadProgressModal";
import FileUpload from "../../FileUpload/index";
import FileOptions from "../../FileUpload/FileOptions";
dayjs.extend(relativeTime);

async function fetcher(url) {
  const res = await axios.get(url);
  return res.data;
}

const API_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:5500/api/v1"
  : "https://companyfiles.zuri.chat/api/v1";

const AllFiles = () => {
  const { data, error } = useSWR(`${API_URL}/files/all`, fetcher);

  const [upload, setUpload] = useState(false);
  const [progress, setProgress] = useState(false);
  const [options, setOptions] = useState(false);
  const [demo, setDemo] = useState(false);

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
      <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center tw-text-red-600 tw-h-screen tw-w-full">
        failed to load
      </div>
    );

  if (!data)
    return (
      <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center tw-h-screen tw-w-full">
        loading...
      </div>
    );

  return (
    <div className="tw-w-full tw-py-10">
      <button
        onClick={showOptions}
        className="tw-mt-4 tw-px-3 tw-py-2 tw-text-sm tw-text-green-500 tw-border tw-rounded tw-border-green-500 hover:tw-text-white hover:tw-bg-green-500 tw-outline-none"
      >
        Add File
      </button>
      <FileOptions options={options} showUploadModal={showUploadModal} />
      <div className="tw-w-full tw-flex tw-justify-between tw-items-center tw-mt-2">
        <h2 className="tw-text-lg tw-font-semibold tw-text-gray-900">
          <FaArrowLeft
            className="tw-text-lg tw-text-black tw-mr-3"
            onClick={() => goBack()}
          />
          All Files
        </h2>
        <div className="tw-flex tw-items-center">
          <BsArrowUpDown
            title="sort"
            className="tw-text-gray-400 tw-text-lg tw-mx-2 hover:tw-text-gray-500 tw-cursor-pointer"
          />
          <BsGrid3X2
            title="grid"
            className="tw-text-gray-400 tw-mx-2 tw-text-2xl hover:tw-text-gray-500 tw-cursor-pointer"
          />
          <Link
            to="/activities"
            className="tw-mx-4 tw-py-2 tw-px-4 tw-bg-green-500 tw-text-white tw-text-sm tw-rounded hover:tw-bg-green-600"
          >
            See Activities
          </Link>
        </div>
      </div>

      <div className="project-box-wrapper">
        <div className="project-box tw-w-full tw-py-5 tw-flex tw-flex-wrap tw-justify-between tw--mx-2">
          {data.data.length > 0 ? (
            data.data.map((file) => {
              return new RegExp("\\b" + "image" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Image file={file} />
                </div>
              ) : new RegExp("\\b" + "pdf" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Pdf file={file} />
                </div>
              ) : new RegExp("\\b" + "zip" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Zip file={file} />
                </div>
              ) : new RegExp("\\b" + "excel" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center mr-0 my-5 relative"
                >
                  <Excel file={file} />
                </div>
              ) : new RegExp("\\b" + "word" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Document file={file} />
                </div>
              ) : new RegExp("\\b" + "powerpoint" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Powerpoint file={file} />
                </div>
              ) : new RegExp("\\b" + "audio" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Audio file={file} />
                </div>
              ) : (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Video file={file} />
                </div>
              );
            })
          ) : (
            <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center">
              No Files
            </div>
          )}
        </div>
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

export default AllFiles;
