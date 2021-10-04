import React, { useState } from "react";

const RenameFileModal = ({ file, editName, setEditName }) => {
  const [newName, setNewName] = useState("");

  const changeFileName = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  };

  const handleRename = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        oldFolderName: file.folderName,
        newFolderName: newName,
      }),
    };
    console.log(requestOptions.body);
    const editRequest = await fetch(
      `https://companyfiles.zuri.chat/api/v1/folders/rename/${file._id}`,
      requestOptions
    );
    setEditName(!editName);

    const response = editRequest.json();
    console.log(response);
  };

  return (
    <>
      <div className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-50 tw-outline-none focus:tw-outline-none">
        <div className="tw-relative tw-w-4/5 md:tw-w-3/6 tw-my-6 tw-mx-auto tw-max-w-3xl">
          {/*content*/}
          <div className="tw-tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-w-full tw-flex tw-flex-col tw-bg-white tw-outline-none focus:tw-outline-none tw-py-10 tw-px-5 sm:tw-p-10">
            {/*header*/}
            <div className="tw-text-center sm:tw-text-left">
              <h3 className="tw-text-xl tw-text-text-grey tw-font-semibold tw-text-center">
                Rename
              </h3>
            </div>
            {/*body*/}
            <div className="tw-relative tw-pt-3 tw-text-base tw-text-text-grey">
              <input
                type="text"
                onChange={(event) => changeFileName(event)}
                className=" tw-block tw-w-full tw-border tw-h-12 tw-px-4 tw-outline-none tw-rounded-md"
              />
            </div>
            {/*footer*/}

            <div className="tw-w-full tw-flex tw-justify-end">
              <button
                className=" tw-w-16 tw-border tw-border-primary tw-text-primary tw-rounded tw-background-white tw-font-semibold tw-py-3 tw-mr-8 tw-mt-4  tw-text-sm tw-outline-none focus:tw-outline-none tw-ease-linear tw-transition-all tw-duration-150"
                type="button"
                onClick={() => setEditName(!editName)}
              >
                Cancel
              </button>
              <button
                className=" tw-w-20 tw-border tw-bg-primary tw-text-white tw-rounded tw-font-semibold tw-py-3 tw-mt-4  tw-text-sm tw-outline-none focus:tw-outline-none tw-ease-linear tw-transition-all tw-duration-150"
                type="button"
                onClick={() => handleRename()}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-opacity-30 tw-fixed tw-inset-0 tw-z-40 tw-bg-black"></div>
    </>
  );
};

export default RenameFileModal;
