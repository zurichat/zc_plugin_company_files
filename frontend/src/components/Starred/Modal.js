import React from "react";

export default function Modal({
  showModal,
  setShowModal,
  deleteModal,
  setDeleteModal,
  clickedId,
  setData,
  setFileDel,
}) {

  const handleDelete = (id) => {
    fetch("https://companyfiles.zuri.chat/api/v1/files/deleteFile/" + id, {
      method: "DELETE",
    }).then((res) => {
      res.status === 200 ? setFileDel("") : null;
    });
    setData((prev) => prev.filter((data) => data.id !== id));
  };

  return (
    <>
   

      {/*Modal for Delete Button  */}

      {deleteModal ? (
        <>
          <div className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-50 tw-outline-none tw-focus:outline-none">
            <div className="tw-relative tw-w-auto tw-my-6 tw-mx-auto tw-max-w-3xl">
              {/*content*/}
              <div className="tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-w-full tw-flex tw-flex-col tw-bg-white tw-outline-none tw-focus:outline-none tw-px-11">
                {/*header*/}
                <div className="tw-p-5 tw-pt-7 tw-text-center md:tw-text-left">
                  <h3 className="tw-text-2xl itemsStarred tw-font-semibold">
                    Remove Starred
                  </h3>
                </div>
                {/*body*/}
                <div className="tw-relative tw-px-5 md:tw-pr-20 ">
                  <p className="tw-mt-3 tw-mb-4 itemsStarred tw-text-sm tw-text-center md:tw-text-left">
                  Are you sure you want to remove Design Files?
                  </p>
                </div>
                {/*footer*/}
                <div className="tw-flex tw-items-center tw-justify-end md:tw-justify-end tw-py-6 tw-rounded-b">
                  <button
                    className="text-starredModal tw-border starredModal__cancel tw-rounded tw-bg-white tw-font-semibold tw-px-6 tw-py-3 tw-text-sm tw-outline-none tw-focus:outline-none tw-mr-5 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                    type="button"
                    onClick={() => setDeleteModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="modal__menu tw-text-white tw-active:bg-emerald-600 tw-font-semibold tw-text-sm tw-px-6 tw-py-3 tw-rounded tw-shadow tw-hover:shadow-xlg tw-outline-none tw-focus:outline-none tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                    type="button"
                    onClick={() => {
                      handleDelete(clickedId);
                      setDeleteModal(false);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="tw-opacity-30 tw-fixed tw-inset-0 tw-z-40 tw-bg-black"></div>
        </>
      ) : null}
    </>
  );
}
