import React from "react";

import { FcFolder } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineFileUnknown } from 'react-icons/ai'
import { AiOutlineFilePdf } from 'react-icons/ai'

const FilePropertiesModal = ({
  url,
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

  const ext = /\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gmi;
  if (name.match(ext)[0] == ".jpg" || name.match(ext)[0] == ".png"){
    console.log('true')
  } else { console.log('false')}

  console.log(url)

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
                  <div className="tw-w-4/5 truncate">
                    <h3 className="tw-text-xl tw-text-text-grey tw-font-semibold tw-text-center tw-truncate">
                      {name}
                    </h3>
                  </div>
                  
                  <AiOutlineClose className="tw-text-gray-700 tw-text-xl tw-cursor-pointer hover:tw-text-green-500" onClick={() => setFileProperties(!fileProperties)}/>
                </div>


                <div className="tw-w-full tw-text-base tw-text-center tw-mt-5 tw-border-b-2 tw-border-green-500 tw-text-green-500">
                  Details
                </div>
              </div>

              {/*body*/}
              <div className="tw-flex tw-flex-col tw-items-center sm:tw-flex-row sm:tw-justify-between tw-w-full">

                <div className="tw-w-36 sm:tw-w-24 tw-py-3 rounded">
                  {
                    name.match(ext)[0] == ".jpg" || name.match(ext)[0] == ".png" 
                    ? 
                    <img
                    src={url}
                    alt="image"
                    className="tw-w-full rounded"
                  />
                    :
                    name.match(ext)[0] == ".pdf" ? 
                    <AiOutlineFilePdf className="tw-text-8xl tw-text-red-500 tw-mr-4" /> :
                    
                    <AiOutlineFileUnknown className="tw-text-8xl tw-text-red-500 tw-mr-4" />
                  }
                </div>
                

              <div className="tw-relative tw-w-full sm:tw-w-4/6 tw-py-6 tw-text-sm tw-text-text-grey">


                {/* <div className="tw-flex tw-justify-between">
                  <span>File Name:</span>
                  <span>{name}</span>
                </div> */}
                <div className="tw-flex tw-py-1">
                  <span className="tw-w-2/6">File Size:</span>
                  <span className="tw-text-base">
                    {size < KB
                      ? size + " Bytes"
                      : size < MB
                      ? parseInt(size / KB).toFixed(2) + " KB"
                      : size < GB
                      ? parseInt(size / MB).toFixed(2) + " MB"
                      : ""}
                  </span>
                </div>
                <div className="tw-flex tw-py-1">
                  <span className="tw-w-2/6">File Type:</span>
                  <span className="tw-text-base tw-w-4/6 tw-break-all">{type}</span>
                </div>
                <div className="tw-flex tw-py-1 ">
                  <span className="tw-w-2/6">Modified:</span>
                  <span className="tw-text-base tw-w-4/6">
                    {new Date(modified).toLocaleString("en-US", {
                      hour12: true,
                    })}
                  </span>
                </div>
                <div className="tw-flex tw-py-1">
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
                className=" tw-w-auto tw-border tw-border-primary tw-text-primary tw-rounded tw-background-white tw-font-semibold tw-px-6 tw-py-3 tw-mx-auto tw-mt-4  tw-text-sm tw-outline-none focus:tw-outline-none tw-ease-linear tw-transition-all tw-duration-150"
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
