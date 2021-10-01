import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FolderComponent from "./Folder";
import { FaArrowLeft } from "react-icons/fa/index";
import { BsArrowUpDown } from "react-icons/bs";
import { BsGrid3X2 } from "react-icons/bs";
import UploadProgressModal from "../../FileUpload/UploadProgressModal";
import FileUpload from "../../FileUpload/index";
import FileOptions from "../../FileUpload/FileOptions";
import RealTime from "../../../helpers/realtime.helper";
import ReactPaginate from "react-paginate";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchFolders } from "../../../actions/folderAction";

const AllFolders = () => {
  const dispatch = useDispatch();
  const { loading, error, folders } = useSelector(
    (state) => state.rootReducer.folderReducer
  );

  const [upload, setUpload] = useState(false);
  const [progress, setProgress] = useState(false);
  const [options, setOptions] = useState(false);
  const [demo, setDemo] = useState(false);
  const [newFiles, setNewFiles] = useState({ data: {} });

  useEffect(() => {
    (async () => {
      dispatch(fetchFolders());
    })();
  }, []);

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

  const goBack = () => {
    const currentState = history.state;
    history.pushState(currentState, "", "/companyfiles");
  };

  if (error)
    return (
      <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center tw-text-red-600 tw-py-4 tw-h-screen tw-w-full">
        Error failed
      </div>
    );

  if (loading)
    return (
      <div className="tw-flex tw-items-center tw-justify-center tw-py-4 tw-h-screen tw-w-full">
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
    <div className="tw-w-full tw-py-2 tw-px-3 md:tw-px-5">
      <button
        onClick={showOptions}
        className="tw-mt-4 tw-px-3 tw-py-2 tw-text-sm tw-text-green-500 tw-border tw-rounded tw-border-green-500 hover:tw-text-white hover:tw-bg-green-500 tw-outline-none"
      >
        Add New
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
      <div className="tw-grid tw-grid-cols-auto">
        {folders.data.length ? (
          folders.data.map((folder) => (
            <FolderComponent key={folder.folderId} folder={folder} />
          ))
        ) : (
          <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center">
            No Folders
          </div>
        )}
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

export default AllFolders;
