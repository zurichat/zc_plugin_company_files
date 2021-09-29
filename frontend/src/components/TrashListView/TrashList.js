import { useState, useRef, createRef } from "react";
import useViewport from "./useViewport";
import Buttons from "./MenuButtons";
import fileIcon from "./file-icon.png";
import bin from "./bin 1.png";
import Modal from "./Modal";
import Loader from "./Loader";

const isEmpty = (obj) => Object.keys(obj).length === 0;

function TrashList({
  error,
  isLoading,
  data,
  setData,
  setFileDel,
  setRestore,
}) {
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [id, setId] = useState(null);

  // set state to toggle menu button
  const [click, setClick] = useState(false);

  // Viewport to change the location of the menu buttons on different screen size
  const { width } = useViewport();
  const breakpoint = 768;

  //Truncate the length of fetched file names
  const handleTruncateName = () => {
    let str = data.map((data) => data.fileName.trim());

    return str.map((text) => {
      return text.length > 20 ? text.substring(0, 12) + "..." : text;
    });
  };

  //Reformat fetched file deleted dates.
  const handleNewDate = () => {
    return data
      .map((date) => date.dateAdded.split("T")[0])
      .map((e) => e.split("-").join("/"));
  };

  //Reformat fetched file size
  const handleFormatSize = (bytes, decimals = 2) => {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return (
      Math.floor(parseFloat((bytes / Math.pow(k, i)).toFixed(dm))) +
      " " +
      sizes[i]
    );
  };

  // creates reference for array items
  const menu = useRef(data && Array(data.length).fill(createRef()));

  //This displays the Menu button
  const handleClick = (index, id) => {
    setId(id);
    // if item is clicked display menu/btn and enable pointer event
    if (click) {
      menu.current[index].style.opacity = 1;
      menu.current[index].style.pointerEvents = "auto";
    } else {
      //disables event
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
            <h3 className="tw-text-text-grey tw-font-semibold tw-pt-2">
              No items
            </h3>
            <p className="tw-text-text-grey tw-pt-2">
              items moved to the trash will appear here
            </p>
          </div>
        ) : null}
        {!isEmpty(data) && !error && !isLoading ? (
          <table className="tw-w-full tw-table-fixed tw-mt-2 tw-pb-14 tw-px-2 sm:tw-pl-5 tw-border-separate    borderSpace tableHide">
            <thead className="tw-text-left tw-content-box">
              <tr>
                <th className="tw-font-semibold trashTheading">Name</th>
                <th className="tw-hidden md:tw-block"></th>
                <th className="tw-hidden md:tw-block"></th>
                <th></th>
                <th></th>
                <th className="tw-block md:tw-hidden"></th>
                <th className="tw-font-semibold trashTheading tw-whitespace-nowrap tw-hidden md:tw-block">
                  Date Deleted
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th className="tw-font-semibold trashTheading tw-whitespace-nowrap tw-pr-3 sm:tw-pr-0">
                  <span className="tw-hidden sm:tw-inline">File </span>Size
                </th>
              </tr>
            </thead>
            <tbody className="tw-text-text-grey">
              {data.map((data, index) => (
                <tr
                  key={data._id}
                  onClick={() => handleClick(index, data._id)}
                  className="lightGrayHover tw-cursor-pointer hover:tw-bg-gray-100"
                >
                  <td
                    className="
                      tw-py-2 tw-whitespace-nowrap tw-text-sm tw-lowercase"
                  >
                    <img
                      src={fileIcon}
                      alt="File icon"
                      className="tw-inline-block"
                    />{" "}
                    {handleTruncateName()[index]}
                  </td>
                  <td className="tw-hidden md:tw-block"></td>
                  <td className="tw-hidden md:tw-block"></td>
                  <td></td>
                  <td></td>
                  <td className="tw-block md:tw-hidden"></td>
                  <td className="tw-py-2 tw-text-xs tw-relative tw-hidden md:tw-block">
                    {handleNewDate()[index]}

                    {/* Menu buttons for big screen */}
                    <div
                      //assign the created reference to each array item

                      ref={(el) => (menu.current[index] = el)}
                      className="tw-absolute tw-top-0 tw-z-10 tw-bg-white tw-rounded tw-shadow-md tw-opacity-0 tw-text-sm md:tw-block tw-pointer-events-none"
                    >
                      <Buttons
                        setShowModal={setShowModal}
                        setDeleteModal={setDeleteModal}
                      />
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="tw-py-2 tw-text-xs tw-relative">
                    {handleFormatSize(data.size)}

                    {/* Menu buttons for small screen */}

                    {/* If the viewport matches the breakpoint, display the menu buttons in this td */}
                    {width <= breakpoint ? (
                      <div
                        //assign the created reference to each array item
                        ref={(el) => (menu.current[index] = el)}
                        className="tw-absolute tw-top-0 tw-right-0 tw-z-10 tw-bg-white tw-rounded tw-shadow-md tw-opacity-0 tw-text-sm md:tw-block tw-pointer-events-none"
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
      />
    </>
  );
}

export default TrashList;
