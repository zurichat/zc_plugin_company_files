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
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative w-full flex flex-col bg-white outline-none focus:outline-none px-11">
                {/*header*/}
                <div className="p-5 pt-7 text-center md:text-left">
                  <h3 className="text-2xl itemsStarred font-semibold">
                    Remove Starred
                  </h3>
                </div>
                {/*body*/}
                <div className="relative px-5 md:pr-20 ">
                  <p className="mt-3 mb-4 itemsStarred text-sm text-center md:text-left">
                  Are you sure you want to remove Design Files?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end md:justify-end py-6 rounded-b">
                  <button
                    className="text-starredModal border starredModal__cancel rounded background-white font-semibold px-6 py-3 text-sm outline-none focus:outline-none mr-5 mb-1 ease-linear transition-all duration-150"
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
