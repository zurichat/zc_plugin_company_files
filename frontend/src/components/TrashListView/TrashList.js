import { useState, useRef, createRef } from "react";
import useViewport from "./useViewport";
import Buttons from "./MenuButtons";
import fileIcon from "./file-icon.png";
import bin from "./bin 1.png";
import Modal from "./Modal";
import Loader from "./Loader";
import TrashGridView from "./TrashGridView";

const isEmpty = (obj) => Object.keys(obj).length === 0;

function TrashList({
  error,
  isLoading,
  data,
  setData,
  setFileDel,
  setRestore,
  isGrid,
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
          <div className='flex justify-center text-center mt-60 tracking-wider font-semibold itemsTrash'>
            {error}
          </div>
        )}
        {isLoading && <Loader />}
        {isEmpty(data) && !isLoading && !error ? (
          <div className='text-center flex flex-col justify-center items-center h-96'>
            <img src={bin} alt='Bin icon' />
            <h3 className='itemsTrash font-semibold pt-2'>No items</h3>
            <p className='itemsTrash pt-2'>
              items moved to the trash will appear here
            </p>
          </div>
        ) : null}
        {!isEmpty(data) && data && !isLoading && !isGrid && (
          <table className='w-full table-fixed mt-2 pb-14 px-2 sm:pl-5 border-separate borderSpace tableHide'>
            <thead className='text-left content-box'>
              <tr>
                <th className='font-semibold trashTheading'>Name</th>
                <th className='hidden md:block'></th>
                <th className='hidden md:block'></th>
                <th></th>
                <th></th>
                <th className='block md:hidden'></th>
                <th className='font-semibold trashTheading whitespace-nowrap hidden md:block'>
                  Date Deleted
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th className='font-semibold trashTheading whitespace-nowrap pr-3 sm:pr-0'>
                  <span className='hidden sm:inline'>File </span>Size
                </th>
              </tr>
            </thead>
            <tbody className='itemsTrash'>
              {data.map((data, index) => (
                <tr
                  key={data._id}
                  onClick={() => handleClick(index, data._id)}
                  className='lightGrayHover cursor-pointer hover:bg-gray-100'
                >
                  <td
                    className='
                      py-2 whitespace-nowrap text-sm lowercase'
                  >
                    <img
                      src={fileIcon}
                      alt='File icon'
                      className='inline-block'
                    />{" "}
                    {handleTruncateName()[index]}
                  </td>
                  <td className='hidden md:block'></td>
                  <td className='hidden md:block'></td>
                  <td></td>
                  <td></td>
                  <td className='block md:hidden'></td>
                  <td className='py-2 text-xs relative hidden md:block'>
                    {handleNewDate()[index]}

                    {/* Menu buttons for big screen */}
                    <div
                      //assign the created reference to each array item
                      ref={(el) =>
                        (menu.current = menu.current
                          ? [...menu.current, el]
                          : [el])
                      }
                      className='absolute top-0 z-10 bg-white rounded shadow-md opacity-0 text-sm md:block pointer-events-none'
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
                  <td className='py-2 text-xs relative'>
                    {handleFormatSize(data.size)}

                    {/* Menu buttons for small screen */}

                    {/* If the viewport matches the breakpoint, display the menu buttons in this td */}
                    {width <= breakpoint ? (
                      <div
                        //assign the created reference to each array item
                        ref={(el) => (menu.current[index] = el)}
                        className='absolute top-0 right-0 z-10 bg-white rounded shadow-md opacity-0 text-sm md:block pointer-events-none'
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
        )}
        {/* Show grid view if isGrid is true */}
        {!isEmpty(data) && data && !isLoading && isGrid && (
          <TrashGridView
            fileIcon={fileIcon}
            data={data}
            truncateName={handleTruncateName}
            newDate={handleNewDate}
            menuRef={menu}
            handleClick={handleClick}
            Buttons={Buttons}
            setShowModal={setShowModal}
            setDeleteModal={setDeleteModal}
          />
        )}
      </div>
      <Modal
        setShowModal={setShowModal}
        showModal={showModal}
        setDeleteModal={setDeleteModal}
        deleteModal={deleteModal}
        clickedId={id}
        setData={setData}
        // data={data}
        setFileDel={setFileDel}
        setRestore={setRestore}
      />
    </>
  );
}

export default TrashList;
