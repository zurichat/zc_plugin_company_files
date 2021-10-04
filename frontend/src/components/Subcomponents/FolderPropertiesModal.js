import React from "react";

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
          <div className="tw-relative tw-w-4/5 md:tw-w-3/6 tw-my-6 tw-mx-auto tw-max-w-3xl">
            {/*content*/}
            <div className="tw-tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-w-full tw-flex tw-flex-col tw-bg-white tw-outline-none focus:tw-outline-none tw-py-10 tw-px-5 sm:tw-p-10">
              {/*header*/}
              <div className="tw-text-center sm:tw-text-left">
                <h3 className="tw-text-xl tw-text-text-grey tw-font-semibold tw-text-center">
                  {name} properties
                </h3>
              </div>
              {/*body*/}
              <div className="tw-relative tw-pt-3 tw-text-base tw-text-text-grey">
                <div className="tw-flex tw-justify-between">
                  <span>File Name:</span>
                  <span>{name}</span>
                </div>
                <div className="tw-flex tw-justify-between">
                  <span>File Size:</span>
                  <span>
                    {size + " file(s)"}
                  </span>
                </div>
                <div className="tw-flex tw-justify-between">
                  <span>File Type:</span>
                  <span>{type}</span>
                </div>
                <div className="tw-flex tw-justify-between">
                  <span>Modified:</span>
                  <span>
                    {new Date(modified).toLocaleString("en-US", {
                      hour12: true,
                    })}
                  </span>
                </div>
                <div className="tw-flex tw-justify-between">
                  <span>Accessed:</span>
                  <span>
                    {new Date(accessed).toLocaleString("en-US", {
                      hour12: true,
                    })}
                  </span>
                </div>
              </div>
              {/*footer*/}

              <button
                className=" tw-w-auto tw-border tw-border-primary tw-text-primary tw-rounded tw-background-white tw-font-semibold tw-px-6 tw-py-3 tw-mx-auto tw-mt-4  tw-text-sm tw-outline-none focus:tw-outline-none tw-ease-linear tw-transition-all tw-duration-150"
                type="button"
                onClick={() => setFileProperties(!fileProperties)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
        <div className="tw-opacity-30 tw-fixed tw-inset-0 tw-z-40 tw-bg-black"></div>
      </>
    )
  );
};

export default FilePropertiesModal;
