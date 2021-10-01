import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "../../Subcomponents/Image";
import Pdf from "../../Subcomponents/Pdf";
import Zip from "../../Subcomponents/Zip";
import Excel from "../../Subcomponents/Excel";
import Video from "../../Subcomponents/Video";
import Powerpoint from "../../Subcomponents/Powerpoint";
import Document from "../../Subcomponents/Document";
import Audio from "../../Subcomponents/audio";
import { FaArrowLeft } from "react-icons/fa/index";
import { BsArrowUpDown } from "react-icons/bs";
import { BsGrid3X2 } from "react-icons/bs";
import UploadProgressModal from "../../FileUpload/UploadProgressModal";
import FileUpload from "../../FileUpload/index";
import FileOptions from "../../FileUpload/FileOptions";
import RealTime from "../../../helpers/realtime.helper";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchFiles } from "../../../actions/fileAction";
import SortingMenu from "../../Subcomponents/SortingMenu";
dayjs.extend(relativeTime);

const AllFiles = () => {
  const dispatch = useDispatch();
  const { loading, error, files } = useSelector(
    (state) => state.rootReducer.fileReducer
  );

  const [newFiles, setNewFiles] = useState({ data: {} });
  const [openStatus, setOpenStatus] = useState(false);

  useEffect(() => {
    (async () => {
      dispatch(fetchFiles());
    })();
  }, []);

  useEffect(() => {
    const fetchNewData = () => {
      RealTime.subscribe("allFiles", "", (data) => setNewFiles(data));
    };
    fetchNewData();
    console.log(newFiles);
  }, []);

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

  const goBack = () => {
    // window.history.back();
    const currentState = history.state;
    history.pushState(currentState, "", "/companyfiles");
  };

  if (error)
    return (
      <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center tw-text-red-600 tw-h-screen tw-w-full">
        Error failed
      </div>
    );

  if (loading)
    return (
      <div className="tw-flex tw-items-center tw-justify-center tw-h-screen tw-w-full">
        <Loader
          type="ThreeDots"
          color="#00B87C"
          height={100}
          width={100}
          visible="true"
        />
      </div>
    );

  return (
    <div className="tw-w-full tw-py-2 tw-px-2 md:tw-px-5 tw-items-center">
      <button
        onClick={showOptions}
        className="tw-mt-4 tw-px-3 tw-py-2 tw-text-sm tw-text-green-500 tw-border tw-rounded tw-border-green-500 hover:tw-text-white hover:tw-bg-green-500 tw-outline-none"
      >
        Add New
      </button>
      <FileOptions options={options} showUploadModal={showUploadModal} />
      <div className="tw-w-full tw-flex tw-justify-between tw-items-center tw-mt-2">
        <h2 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-flex tw-flex-row">
          <FaArrowLeft
            className="tw-text-lg tw-text-black tw-mr-3 tw-self-center"
            onClick={() => goBack()}
          />
          All Files
        </h2>
        <div className="tw-flex tw-items-center tw-relative">
          <BsArrowUpDown
            title="sort"
            className="tw-text-gray-400 tw-text-lg tw-mx-2 hover:tw-text-gray-500 tw-cursor-pointer"
            onClick={() => setOpenStatus(true)}
          />
          <SortingMenu
            file={files}
            setOpenStatus={setOpenStatus}
            openStatus={openStatus}
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
        <div className="project-box tw-w-full tw-py-5 tw-grid tw-grid-cols-auto tw-mx-2">
          {files.data.length > 0 ? (
            files.data.map((file) => {
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
              ) : new RegExp("\\b" + "ms-excel" + "\\b").test(file.type) ||
                new RegExp("\\b" + "spreadsheetml" + "\\b").test(file.type) ||
                new RegExp("\\b" + "csv" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center mr-0 my-5 relative"
                >
                  <Excel file={file} />
                </div>
              ) : new RegExp("\\b" + "msword" + "\\b").test(file.type) ||
                new RegExp("\\b" + "wordprocessingml" + "\\b").test(
                  file.type
                ) ||
                new RegExp("\\b" + "plain" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Document file={file} />
                </div>
              ) : new RegExp("\\b" + "ms-powerpoint" + "\\b").test(file.type) ||
                new RegExp("\\b" + "presentationml" + "\\b").test(file.type) ? (
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
      {/* <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        /> */}
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
