import React from "react";

export default function Modal({
  showModal,
  setShowModal,
  deleteModal,
  setDeleteModal,
  clickedId,
  setData,
  data,
}) {
  const handleRestore = (id) => {
    fetch("http://localhost:5500/api/v1/files/restoreFile/" + id, {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: "",
    }).then(() => {
      console.log("Restored");
    });
    setData((prev) => prev.filter((data) => data.id !== id));
  };

  const handleDelete = (id) => {
    fetch("http://localhost:5500/api/v1/files/deleteFile/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("Deleted");
    });
    setData((prev) => prev.filter((data) => data.id !== id));
  };

  return (
    <>
      {/* Modal for Restore Button */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative w-full flex flex-col bg-white outline-none focus:outline-none p-4">
                {/*header*/}
                <div className="p-5 pt-7 text-center md:text-left">
                  <h3 className="text-2xl itemsTrash font-semibold">
                    Restore File
                  </h3>
                </div>
                {/*body*/}
                <div className="relative pb-3 px-5 md:pr-20 ">
                  <p className="mt-3 mb-4 itemsTrash text-sm text-center md:text-left">
                    Are you sure you want to restore Design File?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center md:justify-end p-6 pr-1- rounded-b">
                  <button
                    className="text-secondary border trashModal__cancel rounded background-white font-semibold px-6 py-3 text-sm outline-none focus:outline-none mr-5 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="modal__menu text-white active:bg-emerald-600 font-semibold text-sm px-6 py-3 rounded shadow hover:shadow-xlg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
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
          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/*Modal for Delete Button  */}

      {deleteModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative w-full flex flex-col bg-white outline-none focus:outline-none p-4">
                {/*header*/}
                <div className="p-5 pt-7 text-center md:text-left">
                  <h3 className="text-2xl itemsTrash font-semibold">
                    Delete Permanently
                  </h3>
                </div>
                {/*body*/}
                <div className="relative pb-3 px-5 md:pr-20 ">
                  <p className="mt-3 mb-4 itemsTrash text-sm text-center md:text-left">
                    Are you sure you want to Delete Design File Permanently?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center md:justify-end p-6 rounded-b">
                  <button
                    className="text-trashModal border trashModal__cancel rounded background-white font-semibold px-6 py-3 text-sm outline-none focus:outline-none mr-5 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setDeleteModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="modal__menu text-white active:bg-emerald-600 font-semibold text-sm px-6 py-3 rounded shadow hover:shadow-xlg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
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
          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
