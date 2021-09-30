import { React, useState, useEffect } from 'react';
import RealTime from "../../helpers/realtime.helper";
import {
  faEllipsisV,
  faEye,
  faExpandArrowsAlt,
  faShareAlt,
  faDownload,
  faCopy,
  faCut,
  faArrowRight,
  faLink,
  faInfoCircle,
  faTrashAlt,
  faFolder,
  faEdit,
  faHashtag,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import people from './people.png';
import pdff from './pdff.png';
import doc from './doc.png';
import ppt from './ppt.png';
import ps from './ps.png';
import xls from './xls.png';
import px1 from './px1.png';
import px2 from './px2.png';
import px3 from './px3.png';

const index = () => {

  const [starredFiles, setStarredFiles] = useState([]);

  const fetchData = () => {
    RealTime.subscribe('starredFiles', 'files/searchStarredFiles', 
      (response) => setStarredFiles(response.data)
    )
  };

  useEffect(() => {
    fetchData();
    console.log(starredFiles)
  }, [starredFiles]);

  const [isModal, setIsModal] = useState(false);
  const [showFileIdx, setShowFileIdx] = useState(false);

  const [folders, setFolders] = useState([
    { id: 1, title: 'Design Files', size: '140 Files' },
    { id: 2, title: 'Programming Document', size: '140 Files' },
    { id: 3, title: 'My Favourites', size: '140 Files' },
    { id: 4, title: 'Media Folder', size: '140 Files' },
    { id: 5, title: 'Programming Document', size: '140 Files' },
    { id: 6, title: 'Design Files', size: '140 Files' },
  ]);

  // hook for clicks
  const handleShowFiles = (e) => {
    setShowFileIdx(e);
  };

  const handleDelete = (id) => {
    const newFolders = folders.filter((folder) => folder.id !== id);
    setFolders(newFolders);
    setIsModal(false);
  };
  // hook for clicks

  return (
    <div className="bg-white h-screen py-6 font-lato w-full">
      <section className="bg-green-500 flex justify-between items-center p-3 xl:py-3 lg:py-3 xl:my-3 lg:my-3  text-white">
        <div className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faHashtag} className="text-white w-3" />
          <p className="text-white text-lg">Files</p>
          <FontAwesomeIcon icon={faChevronDown} className="text-white w-3" />
        </div>
        <div className="flex bg-white rounded-md gap-2 p-2 items-center justify-center">
          <div className="flex rounded-md items-center">
            <img src={px1} alt="profile onee" className="w-6 z-20" />
            <img src={px2} alt="profile two" className="w-6 -ml-2 z-10" />
            <img src={px3} alt="profile three" className="w-6 -ml-2 z-5" />
          </div>
          <div>
            <p className="text-black text-[15px]">300</p>
          </div>
        </div>
      </section>

      <div className="container bg-white h-screen py-6 xl:py-6 lg:py-6 px-5 font-lato">
        {/* Start of Header */}

        {/* End of Header */}

        <main className="container mt-2">
          <section className="flex my-2 justify-between items-center">
            <div>
              <p className="text-3xl text-black font-medium">Starred</p>
            </div>
            <div>
              <button className="bg-green-500 text-white text-xs py-2 px-3 rounded-md">
                Remove all
              </button>
            </div>
          </section>

          {/* Top title */}
          <div className="flex items-center gap-2 justify-center">
            <p className="flex-0 text-[20px] text-black">Today (15)</p>
            <div className="flex-1 w-full h-px bg-gray-300"></div>
          </div>
          {/* End of Top title */}

          {/* Start of folder One */}

          <section className="mt-9 p-0 grid grid-cols-1 items-center w-full xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 gap-2 md:grid-cols-3 ">
            {/* Mapping the Arrays  */}

            {/* {details.map((detail) => ( */}
            {/* <div className=" bg-white text-sm flex mt-9" key={detail.id}> */}
            <div className=" bg-white text-sm flex mt-9">
              <div className="flex bg-white items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-blue-200 rounded-md">
                  <img
                    className=""
                    src={doc}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black text-[14px]">
                    Abstract.doc
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            {/* Second */}

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-red-200 rounded-md">
                  <img
                    className=""
                    src={pdff}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.Ppdf
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-red-100  rounded-md">
                  <img
                    className=""
                    src={ppt}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.ppt
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-blue-200  rounded-md">
                  <img
                    className=""
                    src={doc}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.doc
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-red-200   rounded-md">
                  <img
                    className=""
                    src={pdff}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.Ppdf
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-blue-200  rounded-md">
                  <img
                    className=""
                    src={doc}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.doc
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-green-200  rounded-md">
                  <img
                    className=""
                    src={xls}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.xls
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-blue-200  rounded-md">
                  <img
                    className=""
                    src={doc}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.doc
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-blue-200  rounded-md">
                  <img
                    className=""
                    src={ps}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black  text-[14px]">
                    Abstract.ps
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            {/* //   ))} */}
          </section>

          {/* End of top Folder One */}

          {/* Start of Folder two */}

          <section className="mt-7 grid grid-cols-1 items-center gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 auto-cols-max md:grid-cols-3 xs:grid-cols-1">
            {/* Mapping the Arrays  */}

            {folders.map((fold) => (
              <div
                className="my-1 border py-3 px-3 rounded-md relative"
                key={fold.id}
              >
                <div className="flex items-center justify-between">
                  <FontAwesomeIcon
                    icon={faFolder}
                    className="text-yellow-400 mr-3 w-8 h-8"
                  />
                  <div>
                    <FontAwesomeIcon
                      icon={faEllipsisV}
                      className="text-gray-500 w-1 h-2.5 cursor-pointer"
                      type="button"
                      onClick={(e) => handleShowFiles(fold.id)}
                    />

                    <div>
                      {showFileIdx === fold.id && (
                        <ul className="z-10 absolute right-0 bg-white shadow-lg py-3 rounded-sm">
                          <li className="font-normal flex items-center">
                            <a
                              href="#/"
                              className="text-[14px] text-left my-1 hover:bg-blue-200 w-full px-8 flex items-center"
                            >
                              <FontAwesomeIcon
                                icon={faEye}
                                className="text-gray-500 mr-3 w-4"
                              />
                              Open
                            </a>
                          </li>
                          <li className="font-normal flex items-center">
                            <a
                              href="#/"
                              className="text-[14px] text-left my-1 hover:bg-blue-200 w-full px-8 flex "
                            >
                              <FontAwesomeIcon
                                icon={faExpandArrowsAlt}
                                className="text-gray-500 mr-3 w-4"
                              />
                              Open With
                            </a>
                          </li>
                          <li className="font-normal flex items-center">
                            <a
                              href="#/"
                              className="text-[14px] text-left my-1 hover:bg-blue-200 w-full px-8 flex "
                            >
                              <FontAwesomeIcon
                                icon={faDownload}
                                className="text-gray-500 mr-3 w-4"
                              />
                              Download
                            </a>
                          </li>
                          <li className="font-normal flex items-center">
                            <a
                              href="#/"
                              className="text-[14px] text-left my-1 hover:bg-blue-200 w-full px-8 flex "
                            >
                              <FontAwesomeIcon
                                icon={faShareAlt}
                                className="text-gray-500 mr-3 w-4"
                              />
                              Share
                            </a>
                          </li>
                          <li className="font-normal flex items-center">
                            <a
                              href="#/"
                              className="text-[14px] text-left my-1 hover:bg-blue-200 w-full px-8 flex "
                            >
                              <FontAwesomeIcon
                                icon={faCopy}
                                className="text-gray-500 mr-3 w-4"
                              />
                              Copy
                            </a>
                          </li>
                          <li className="font-normal flex items-center">
                            <a
                              href="#/"
                              className="text-[14px] text-left my-1 hover:bg-blue-200 w-full px-8 flex "
                            >
                              <FontAwesomeIcon
                                icon={faCut}
                                className="text-gray-500 mr-3 w-4"
                              />
                              Cut
                            </a>
                          </li>
                          <li className="font-normal flex items-center">
                            <a
                              href="#/"
                              className="text-[14px] text-left my-1 hover:bg-blue-200 w-full px-8 flex "
                            >
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                className="text-gray-500 mr-3 w-4"
                              />
                              Move to
                            </a>
                          </li>
                          <li className="font-normal flex items-center">
                            <a
                              href="#/"
                              className="text-[14px] text-left my-1 hover:bg-blue-200 w-full px-8 flex "
                            >
                              <FontAwesomeIcon
                                icon={faLink}
                                className="text-gray-500 mr-3 w-4"
                              />
                              Get link
                            </a>
                          </li>
                          <li className="font-normal flex items-center">
                            <a
                              href="#/"
                              className="text-[14px] text-left my-1 hover:bg-blue-200 w-full px-8 flex "
                            >
                              <FontAwesomeIcon
                                icon={faEdit}
                                className="text-gray-500 mr-3 w-4"
                              />
                              Rename
                            </a>
                          </li>
                          <li className="font-normal flex items-center">
                            <a
                              href="#/"
                              className="text-[14px] text-left my-1 hover:bg-blue-200 w-full px-8 flex "
                            >
                              <FontAwesomeIcon
                                icon={faInfoCircle}
                                className="text-gray-500 mr-3 w-4"
                              />
                              Properties
                            </a>
                          </li>
                          <li className="font-normal flex items-center">
                            <a
                              href="#/"
                              className="text-[14px] text-left my-1 hover:bg-blue-200 w-full px-8 flex "
                              type="button"
                              onClick={() => setIsModal(true)}
                            >
                              <FontAwesomeIcon
                                icon={faTrashAlt}
                                className="text-gray-500 mr-3 w-4"
                              />
                              Delete
                            </a>
                          </li>

                          <div>
                            {/* Modal Two */}

                            {isModal ? (
                              //    Inside Modal

                              <>
                                <div className="justify-center items-center flex fixed left-50 top-50 inset-0 z-50 outline-none focus:outline-none text-center">
                                  <div className="w-3/4 md:w-2/4 xl:w-3/6 lg:1/6 ">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                      {/*header*/}
                                      <div className="flex items-start p-5">
                                        <h5 className="text-3xl text-black">
                                          Remove Starred
                                        </h5>
                                      </div>
                                      {/*body*/}
                                      <div className="relative p-6 flex-auto">
                                        <p className="my-2 text-blueGray-500 text-lg leading-relaxed text-[14px]">
                                          Are you sure you want to remove Design
                                          Files?
                                        </p>
                                      </div>
                                      {/*footer*/}
                                      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row md:px-6 items-center justify-end p-6 gap-4 ">
                                        <button
                                          className="text-green-500 background-transparent px-6 py-3 text-sm rounded-md border-2 border-green-500 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          type="button"
                                          onClick={() => setIsModal(false)}
                                        >
                                          Cancel
                                        </button>
                                        <button
                                          className="bg-green-500 text-white rounded-md border-2 border-green-500 text-sm px-6 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          type="button"
                                          onClick={() => handleDelete(fold.id)}
                                        >
                                          Delete
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                              </>
                            ) : null}
                          </div>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <article className="flex flex-col Start">
                    <p className="whitespace-no-wrap text-black font-normal text-[12px]">
                      {fold.title}
                    </p>
                    <p className="text-gray-400 whitespace-no-wrap text-[12px]">
                      {fold.size}
                    </p>
                  </article>
                  <img src={people} alt="folder" width={49} height="23" />
                </div>
              </div>
            ))}
          </section>

          {/* End of Folder two */}

          {/* Third Section */}

          {/* Top title */}
          <div className="flex items-center gap-3 justify-center mt-20">
            <p className="flex-0 text-[20px] text-black">Yesterday (17)</p>
            <div className="flex-1 w-full h-px bg-gray-300"></div>
          </div>
          {/* End of Top title */}

          {/* Start of folder Three */}

          <section className="mt-9 p-0 grid grid-cols-1 items-center justify-center w-full xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 gap-2 md:grid-cols-3 ">
            {/* Mapping the Arrays  */}

                        <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-blue-200  rounded-md">
                  <img
                    className=""
                    src={doc}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black text-[14px]">
                    Abstract.doc
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            {/* Second */}

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-red-200  rounded-md">
                  <img
                    className=""
                    src={pdff}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.Ppdf
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-red-100  rounded-md">
                  <img
                    className=""
                    src={ppt}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.ppt
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-blue-200  rounded-md">
                  <img
                    className=""
                    src={doc}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.doc
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-red-200   rounded-md">
                  <img
                    className=""
                    src={pdff}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.Ppdf
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-blue-200  rounded-md">
                  <img
                    className=""
                    src={doc}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.doc
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-green-200  rounded-md">
                  <img
                    className=""
                    src={xls}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.xls
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-blue-200  rounded-md">
                  <img
                    className=""
                    src={doc}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.doc
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-blue-200  rounded-md">
                  <img
                    className=""
                    src={ps}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.ps
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-green-200  rounded-md">
                  <img
                    className=""
                    src={xls}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.xls
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white text-sm flex mt-9">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 flex justify-center items-center bg-blue-200  rounded-md">
                  <img
                    className=""
                    src={doc}
                    alt="Doc Types"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-3 flex flex-col Start">
                  <p className="whitespace-no-wrap text-black    text-[14px]">
                    Abstract.doc
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap text-[13px]">
                    Added Today
                  </p>
                </div>
              </div>
            </div>

            {/* //   ))} */}
          </section>

          {/* End of Folder Three */}
        </main>
      </div>
    </div>
  );
};

export default index;
