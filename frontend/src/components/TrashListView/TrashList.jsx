/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, createRef } from "react";
import PropTypes from "prop-types";
import useViewport from "./useViewport";
import Buttons from "./MenuButtons";
import fileIcon from "./file-icon.png";
import bin from "./bin 1.png";
import Modal from "./Modal";
import Loader from "./Loader";

const isEmpty = (obj) => Object.keys(obj).length === 0;

const TrashList = ({
  error,
  isLoading,
  data,
  setData,
  setFileDel,
  setRestore,
  apiBase
}) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [id, setId] = useState(null);
  const [sort, setSort] = useState(true);

  // set state to toggle menu button
  const [click, setClick] = useState(true);

  // Viewport to change the location of the menu buttons on different screen size
  const { width } = useViewport();
  const breakpoint = 768;

  // Sort the fetched files by name at the click of the drop-down arrow
  const handleSort = () => {
    if (sort) {
      data.sort((a, b) => {
        a = a.fileName.toLowerCase();
        b = b.fileName.toLowerCase();
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
    } else {
      data.reverse();
    }
    setSort(!sort);
  };

  // Truncate the length of fetched file names
  const handleTruncateName = () => {
    const str = data.map((data) => data.fileName.trim());

    return str.map((text) => {
      return text.length > 20 ? `${text.substring(0, 14)}...` : text;
    });
  };

  // Reformat fetched file deleted dates.
  const handleNewDate = () => {
    return data
      .map((date) => date.dateAdded.split("T")[0])
      .map((e) => e.split("-").join("/"));
  };

  // Reformat fetched file size
  const handleFormatSize = (bytes, decimals = 2) => {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${Math.floor(parseFloat((bytes / Math.pow(k, i)).toFixed(dm)))} ${
      sizes[i]
    }`;
  };

  // creates reference for array items
  const menu = useRef(data && Array(data.length).fill(createRef()));

  // This displays the Menu button
  const handleClick = (index, id) => {
    setId(id);

    // if item is clicked display menu/btn and enable pointer event
    if (click) {
      menu.current[index].style.opacity = 1;
      menu.current[index].style.pointerEvents = "auto";
    } else {
      // disables event
      menu.current[index].style.opacity = 0;
      menu.current[index].style.pointerEvents = "none";
    }

    // Menu button are displayed one at a time and disable events from the other
    menu.current.forEach((item, i) => {
      if (item && click) {
        if (index !== i) {
          item.style.opacity = 0;
        }
        menu.current[index].style.opacity = 1;
      }
    });

    setClick(!click);
  };

  return (
    <>
      <div>
        {error && (
          <div className="tw-flex tw-justify-center tw-text-center tw-mt-60 tw-tracking-wider tw-font-semibold tw-text-text-grey">
            {error}
          </div>
        )}
        {isLoading && <Loader />}
        {isEmpty(data) && !isLoading && !error ? (
          <div className="tw-text-center tw-flex tw-flex-col tw-justify-center tw-items-center tw-h-96">
            <img src={bin} alt="Bin icon" />
            <p className="tw-text-text-grey tw-font-semibold tw-pt-2">
              No items
            </p>
            <p className="tw-text-text-grey tw-pt-2">
              items moved to the trash will appear here
            </p>
          </div>
        ) : null}
        {!isEmpty(data) && !error && !isLoading ? (
          <table className="tw-w-full tw-table-fixed tw-mt-2 tw-pb-14 tw-px-2 sm:tw-pl-5 tw-border-separate borderSpace tableHide">
            <thead className="tw-text-left">
              <tr>
                <th className="tw-font-semibold trashTheading pl-0 tw-whitespace-nowrap">
                  Name &nbsp;
                  <span
                    role=""
                    className="tw-inline-block tw-align-middle tw-cursor-pointer"
                    onClick={handleSort}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99991 3.00098V15.001"
                        stroke="#333333"
                        strokeWidth="1.22693"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.4999 10.501L8.99991 15.001L4.49991 10.501"
                        stroke="#333333"
                        strokeWidth="1.22693"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </th>
                <th className="tw-hidden md:tw-block" />
                <th className="tw-hidden md:tw-block" />
                <th />
                <th />
                <th className="tw-block md:tw-hidden" />
                <th className="tw-font-semibold trashTheading pl-0 tw-whitespace-nowrap tw-hidden md:tw-inline-block">
                  Date Deleted
                </th>
                <th />
                <th />
                <th />
                <th className="tw-font-semibold trashTheading pl-0 tw-whitespace-nowrap">
                  <span className="tw-hidden sm:tw-inline">File </span>Size
                </th>
              </tr>
            </thead>
            <tbody className="tw-text-text-grey">
              {data.map((data, index) => (
                <tr
                  key={data._id}
                  onClick={() => handleClick(index, data._id)}
                  className="tw-cursor-pointer hover:tw-bg-bg-trashRow"
                >
                  <td
                    className="
                      tw-whitespace-nowrap tw-text-sm tw-py-2 tw-lowercase"
                  >
                    <img
                      src={fileIcon}
                      alt="File icon"
                      className="tw-inline-block"
                    />{" "}
                    {handleTruncateName()[index]}
                  </td>
                  <td className="tw-hidden md:tw-block" />
                  <td className="tw-hidden md:tw-block" />
                  <td />
                  <td />
                  <td className="tw-block md:tw-hidden" />
                  <td className="tw-text-xs tw-relative tw-hidden md:tw-block tw-pt-4">
                    {handleNewDate()[index]}

                    {/* Menu buttons for big screen */}
                    <div
                      // assign the created reference to each array item

                      ref={(el) => (menu.current[index] = el)}
                      className="tw-absolute tw-top-0 tw-z-10 tw-bg-white tw-rounded tw-shadow-md tw-opacity-0 tw-text-sm tw-pointer-events-none"
                    >
                      <Buttons
                        setShowModal={setShowModal}
                        setDeleteModal={setDeleteModal}
                      />
                    </div>
                  </td>
                  <td />
                  <td />
                  <td />
                  <td className="tw-text-xs tw-relative">
                    {handleFormatSize(data.size)}

                    {/* Menu buttons for small screen */}

                    {/* If the viewport matches the breakpoint, display the menu buttons in this td */}
                    {width <= breakpoint ? (
                      <div
                        // assign the created reference to each array item
                        ref={(el) => (menu.current[index] = el)}
                        className="tw-absolute tw-top-0 tw-right-0 tw-z-10 tw-bg-white tw-rounded tw-shadow-md tw-opacity-0 tw-text-sm tw-pointer-events-none"
                      >
                        <Buttons
                          setShowModal={setShowModal}
                          setDeleteModal={setDeleteModal}
                        />
                      </div>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
      <Modal
        setShowModal={setShowModal}
        showModal={showModal}
        setDeleteModal={setDeleteModal}
        deleteModal={deleteModal}
        clickedId={id}
        setData={setData}
        setFileDel={setFileDel}
        setRestore={setRestore}
        apiBase={apiBase}
        data={data}
      />
    </>
  );
};

TrashList.propTypes = {
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  apiBase: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
  setFileDel: PropTypes.func.isRequired,
  setRestore: PropTypes.func.isRequired
};

export default TrashList;
