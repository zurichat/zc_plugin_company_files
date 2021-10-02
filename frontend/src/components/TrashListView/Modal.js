export default function Modal({
  showModal,
  setShowModal,
  deleteModal,
  setDeleteModal,
  clickedId,
  setData,
  setFileDel,
  setRestore,
  apiBase,
  data,
}) {
  let fileName = data.map((data) =>
    data._id === clickedId ? data.fileName : null
  );

  const handleRestore = (id) => {
    fetch(`${apiBase}/files/restoreFile/` + id, {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: "",
    }).then((res) => {
      res.status === 200 ? setRestore("") : null;
    });
    setData((prev) => prev.filter((data) => data.id !== id));
  };

  const handleDelete = (id) => {
    fetch(`${apiBase}/files/deleteFile/` + id, {
      method: "DELETE",
    }).then((res) => {
      res.status === 200 ? setFileDel("") : null;
    });
    setData((prev) => prev.filter((data) => data.id !== id));
  };

  return (
    <>
      {/* Modal for Restore Button */}
      {showModal ? (
        <>
          <div className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-50 tw-outline-none focus:tw-outline-none">
            <div className="tw-relative tw-w-auto tw-my-6 tw-mx-auto tw-max-w-3xl">
              {/*content*/}
              <div className="tw-tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-w-full tw-flex tw-flex-col tw-bg-white tw-outline-none focus:tw-outline-none tw-py-10 tw-px-5 sm:tw-p-10">
                {/*header*/}
                <div className="tw-text-center sm:tw-text-left">
                  <h3 className="tw-text-2xl tw-text-text-grey tw-font-semibold">
                    Restore File
                  </h3>
                </div>
                {/*body*/}
                <div className="tw-relative tw-pt-3">
                  <p className="tw-mt-3 tw-mb-4 tw-text-text-grey tw-text-sm tw-text-center sm:tw-text-left">
                    Are you sure you want to restore ${fileName} File?
                  </p>
                </div>
                {/*footer*/}
                <div className="tw-flex tw-items-center tw-justify-center sm:tw-justify-end tw-pt-4  tw-rounded-b">
                  <button
                    className="tw-border tw-border-primary tw-text-primary tw-rounded tw-background-white tw-font-semibold tw-px-6 tw-py-3 tw-text-sm tw-outline-none focus:tw-outline-none tw-mr-5 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="tw-bg-primary tw-text-white active:tw-bg-emerald-600 tw-font-semibold tw-text-sm tw-px-6 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-xlg tw-outline-none focus:tw-outline-none tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                    type="button"
                    onClick={() => {
                      handleRestore(clickedId);
                      setShowModal(false);
                    }}
                  >
                    Restore
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="tw-opacity-30 tw-fixed tw-inset-0 tw-z-40 tw-bg-black"></div>
        </>
      ) : null}

      {/*Modal for Delete Button  */}

      {deleteModal ? (
        <>
          <div className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-50 tw-outline-none focus:tw-outline-none">
            <div className="tw-relative tw-w-auto tw-my-6 tw-mx-auto tw-max-w-3xl">
              {/*content*/}
              <div className="tw-tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-w-full tw-flex tw-flex-col tw-bg-white tw-outline-none focus:tw-outline-none tw-py-10 tw-px-5 sm:tw-p-10">
                {/*header*/}
                <div className="tw-text-center sm:tw-text-left">
                  <h3 className="tw-text-2xl tw-text-text-grey tw-font-semibold">
                    Delete Permanently
                  </h3>
                </div>
                {/*body*/}
                <div className="tw-relative tw-pt-3">
                  <p className="tw-mt-3 tw-mb-4 tw-text-text-grey tw-text-sm tw-text-center sm:tw-text-left">
                    `Are you sure you want to Delete ${fileName} Permanently?`
                  </p>
                </div>
                {/*footer*/}
                <div className="tw-flex tw-items-center tw-justify-center sm:tw-justify-end tw-pt-4 tw-rounded-b">
                  <button
                    className="tw-border tw-border-primary tw-text-primary tw-rounded tw-background-white tw-font-semibold tw-px-6 tw-py-3 tw-text-sm tw-outline-none focus:tw-outline-none tw-mr-5 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                    type="button"
                    onClick={() => setDeleteModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="tw-bg-primary tw-text-white active:tw-bg-emerald-600 tw-font-semibold tw-text-sm tw-px-6 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-xlg tw-outline-none focus:tw-outline-none tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
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
