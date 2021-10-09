import React from "react";

import { FcFolder } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';

const FilePropertiesModal = ({
  name,
  size,
  type,
  modified,
  accessed,
  fileProperties,
  setFileProperties,
}) => {
  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;

  return (
    fileProperties && (
      <>
        <div className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-50 tw-outline-none focus:tw-outline-none">
          <div className="tw-relative tw-w-11/12 sm:tw-w-3/5 md:tw-w-3/6 lg:tw-w-2/5 tw-my-6 tw-mx-auto tw-max-w-3xl">
            {/*content*/}
            <div className="tw-tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-w-full tw-flex tw-flex-col tw-bg-white tw-outline-none focus:tw-outline-none tw-py-10 tw-px-5 sm:tw-py-5 sm:ty-px-3">
              {/*header*/}
              <div className="tw-text-center sm:tw-text-left">
                <div className="tw-w-full tw-flex tw-justify-between">
                  <h3 className="tw-text-xl tw-text-text-grey tw-font-semibold tw-text-center">
                    {name} 
                  </h3>
                  <AiOutlineClose className="tw-text-gray-700 tw-text-xl tw-cursor-pointer hover:tw-text-green-500" onClick={() => setFileProperties(!fileProperties)}/>
                </div>
                
                <div className="tw-w-full tw-text-base tw-text-center tw-mt-5 tw-border-b-2 tw-border-green-500 tw-text-green-500">
                  Details
                </div>
              </div>

              {/*body*/}
              <div className="tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-w-full">
                <FcFolder className="tw-text-8xl tw-mr-4" />

              <div className="tw-relative tw-w-full sm:tw-w-4/6 tw-py-6 tw-text-sm tw-text-text-grey">
                {/* <div className="tw-flex">
                  <span className="tw-w-2/5">Folder Name:</span>
                  <span className="tw-text-base tw-break-all">{name}</span>
                </div> */}
                <div className="tw-flex">
                  <span className="tw-w-2/6">Folder Size:</span>
                  <span className="tw-text-base">
                    {size + " file(s)"}
                  </span>
                </div>
                {/* <div className="tw-flex ">
                  <span className="tw-w-2/5">File Type:</span>
                  <span className="tw-text-base tw-break-all">{type}</span>
                </div> */}
                <div className="tw-flex ">
                  <span className="tw-w-2/6">Modified:</span>
                  <span className="tw-text-base">
                    {new Date(modified).toLocaleString("en-US", {
                      hour12: true,
                    })}
                  </span>
                </div>
                <div className="tw-flex tw-w-full">
                  <span className="tw-w-2/6">Accessed:</span>
                  <span className="tw-text-base tw-w-4/6">
                    {new Date(accessed).toLocaleString("en-US", {
                      hour12: true,
                    })}
                  </span>
                </div>
              </div>
              </div>
              {/*footer*/}

              {/* <button
                className=" tw-w-auto tw-border tw-border-primary tw-text-primary tw-rounded tw-background-white tw-font-semibold tw-px-4 tw-py-2 tw-mx-auto tw-mt-4  tw-text-sm tw-outline-none focus:tw-outline-none tw-ease-linear tw-transition-all tw-duration-150 hover:tw-bg-green-500 hover:tw-text-white"
                type="button"
                onClick={() => setFileProperties(!fileProperties)}
              >
                Close
              </button> */}
              </div>
          </div>
        </div>
        <div className="tw-opacity-30 tw-fixed tw-inset-0 tw-z-40 tw-bg-black"></div>
      </>
    )
  );
};

export default FilePropertiesModal;
