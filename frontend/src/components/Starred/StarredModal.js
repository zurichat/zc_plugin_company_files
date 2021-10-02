import { useState } from 'react'
import {
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
    faEdit,
   
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default StarredModal = ({ data }) => {
    
const [isModal, setIsModal] = useState(false);
const [isDeleted, setIsDeleted] = useState(false);

    const handleDelete = (id) => {
        fetch("https://companyfiles.zuri.chat/api/v1/files/deleteFile/" + id, {
            method: "DELETE",
        }).then((res) => {
            res.status === 200 ? setIsDeleted("") : null;
        })
    }

        return (
            <div>
                 {isModal ? (
            <ul className="tw-z-10 tw-absolute tw-right-0 tw-bg-white tw-shadow-lg tw-py-3 tw-rounded-sm">
              <li className="tw-font-normal tw-flex tw-items-center">
                <a
                  href="#/"
                  className="tw-text-[14px] tw-text-left tw-my-1 hover:tw-bg-blue-200 tw-w-full tw-px-8 flex tw-items-center"
                >
                  <FontAwesomeIcon icon={faEye} className="tw-text-gray-500 tw-mr-3 tw-w-4" />
                  Open
                </a>
              </li>
              <li className="tw-font-normal tw-flex tw-items-center">
                <a
                  href="#/"
                  className="tw-text-[14px] tw-text-left tw-my-1 hover:tw-bg-blue-200 tw-w-full tw-px-8 tw-flex "
                >
                  <FontAwesomeIcon
                    icon={faExpandArrowsAlt}
                    className="tw-text-gray-500 tw-mr-3 tw-w-4"
                  />
                  Open With
                </a>
              </li>
              <li className="tw-font-normal tw-flex tw-items-center">
                <a
                  href="#/"
                  className="tw-text-[14px] tw-text-left tw-my-1 hover:tw-bg-blue-200 tw-w-full tw-px-8 tw-flex "
                >
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="tw-text-gray-500 tw-mr-3 tw-w-4"
                  />
                  Download
                </a>
              </li>
              <li className="tw-font-normal tw-flex tw-items-center">
                <a
                  href="#/"
                  className="tw-text-[14px] tw-text-left tw-my-1 hover:tw-bg-blue-200 tw-w-full tw-px-8 tw-flex "
                >
                  <FontAwesomeIcon
                    icon={faShareAlt}
                    className="tw-text-gray-500 tw-mr-3 tw-w-4"
                  />
                  Share
                </a>
              </li>
              <li className="tw-font-normal tw-flex tw-items-center">
                <a
                  href="#/"
                  className="tw-text-[14px] tw-text-left tw-my-1 hover:tw-bg-blue-200 tw-w-full tw-px-8 tw-flex "
                >
                  <FontAwesomeIcon icon={faCopy} className="tw-text-gray-500 tw-mr-3 tw-w-4" />
                  Copy
                </a>
              </li>
              <li className="tw-font-normal tw-flex tw-items-center">
                <a
                  href="#/"
                  className="tw-text-[14px] tw-text-left tw-my-1 hover:tw-bg-blue-200 tw-w-full tw-px-8 tw-flex "
                >
                  <FontAwesomeIcon icon={faCut} className="tw-text-gray-500 tw-mr-3 tw-w-4" />
                  Cut
                </a>
              </li>
              <li className="tw-font-normal tw-flex tw-items-center">
                <a
                  href="#/"
                  className="tw-text-[14px] tw-text-left tw-my-1 hover:tw-bg-blue-200 tw-w-full tw-px-8 tw-flex "
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="tw-text-gray-500 tw-mr-3 tw-w-4"
                  />
                  Move To
                </a>
              </li>
              <li className="tw-font-normal tw-flex tw-items-center">
                <a
                  href="#/"
                  className="tw-text-[14px] tw-text-left tw-my-1 hover:tw-bg-blue-200 tw-w-full tw-px-8 tw-flex "
                >
                  <FontAwesomeIcon icon={faLink} className="tw-text-gray-500 tw-mr-3 tw-w-4" />
                  Get link
                </a>
              </li>
              <li className="tw-font-normal tw-flex tw-items-center">
                <a
                  href="#/"
                  className="tw-text-[14px] tw-text-left tw-my-1 hover:tw-bg-blue-200 tw-w-full tw-px-8 tw-flex "
                >
                  <FontAwesomeIcon icon={faEdit} className="tw-text-gray-500 tw-mr-3 tw-w-4" />
                  Rename
                </a>
              </li>
              <li className="tw-font-normal tw-flex tw-items-center">
                <a
                  href="#/"
                  className="tw-text-[14px] tw-text-left tw-my-1 hover:tw-bg-blue-200 tw-w-full tw-px-8 tw-flex "
                >
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="tw-text-gray-500 tw-mr-3 tw-w-4"
                  />
                  Properties
                </a>
              </li>
              <li className="tw-font-normal tw-flex tw-items-center">
                <a
                  href="#/"
                  className="tw-text-[14px] tw-text-left tw-my-1 hover:tw-bg-blue-200 tw-w-full tw-px-8 tw-flex "
                  type="button"
                  onClick={() => setIsModal(true)}
                >
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="tw-text-gray-500 tw-mr-3 tw-w-4"
                  />
                  Delete
                </a>
              </li>
      
              <div>
                {/* Modal Two */}
      
                {isDeleted ? (
                  //    Inside Modal
      
                  <>
                    <div className="tw-justify-center items-center flex fixed left-50 top-50 inset-0 z-50 outline-none focus:outline-none text-center">
                      <div className="w-3/4 md:w-2/4 xl:w-3/6 lg:1/6 ">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start p-5">
                            <h5 className="text-3xl text-black">Remove Starred</h5>
                          </div>
                          {/*body*/}
                          <div className="tw-relative tw-p-6 tw-flex-auto">
                            <p className="tw-my-2 tw-text-blueGray-500 tw-text-lg tw-leading-relaxed tw-text-[14px]">
                              Are you sure you want to remove Design Files?
                            </p>
                          </div>
                          {/*footer*/}
                          <div className="tw-flex tw-flex-col md:tw-flex-row lg:tw-flex-row xl:tw-flex-row md:tw-px-6 tw-items-center tw-justify-end tw-p-6 tw-gap-4 ">
                            <button
                              className="tw-text-green-500 tw-background-transparent tw-px-6 tw-py-3 tw-text-sm tw-rounded-md tw-border-2 tw-border-green-500 tw-outline-none focus:outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                              type="button"
                              onClick={() => setIsModal(false)}
                            >
                              Cancel
                            </button>
                            <button
                              className="tw-bg-green-500 tw-text-white tw-rounded-md tw-border-2 tw-border-green-500 tw-text-sm tw-px-6 tw-py-3 tw-outline-none tw-focus:outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                              type="button"
                              onClick={() => handleDelete(data._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tw-opacity-25 tw-fixed tw-inset-0 tw-z-40 tw-bg-black"></div>
                  </>
                ) : null}
              </div>
                    </ul>
                    ) : null}
          </div>

  )

}
