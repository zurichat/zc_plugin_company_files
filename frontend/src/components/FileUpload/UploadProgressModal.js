import React from "react";

const UploadProgressModal = ({
  progress,
  files,
  hideUploadModal,
  hideProgressModal,
}) => {
  return (
    <div className="absolute w-full bottom-12 z-30 overflow-x-hidden">
      {progress && (
        <div className="relative w-4/5 mx-auto sm:w-96 sm:mx-auto sm:mr-12 sm:right-12 h-auto p-6 bg-white shadow-2xl rounded-2xl overflow-y-auto">
          <div className="w-full flex items-center justify-between mb-4">
            <div className="text-gray-500">
              <p>Your Uploads</p>
              <div className="flex justify-between text-gray-400 my-1 ">
                <span>40%</span>
                <span className=" mx-1">{files ? files.length : ""}</span>
                <span className="inline-block w-6 h-6 mx-1 text-center rounded-full bg-gray-500 text-white">
                  &#x2713;
                </span>
                <span>0</span>
                <span className="inline-block w-6 h-6 mx-1 text-center rounded-full bg-gray-500 text-white">
                  &#10005;
                </span>
                <p>0</p>
              </div>
            </div>
            <button
              onClick={hideUploadModal}
              className="px-3 py-1 bg-white border-2 border-green-400 text-green-400 text-[12px] rounded-md"
            >
              Close
            </button>
          </div>
          {files && (
            <div className="w-full mb-4 max-h-40 overflow-y-auto shadow-inner">
              {Object.entries(files).map((file) => (
                <div
                  className="flex justify-between pl-3 my-2"
                  key={file[1].name}
                >
                  <div className="w-10/12">
                    <div className="w-full flex">
                      <span className="inline-block w-6 h-6 text-center rounded-full bg-green-700 text-white">
                        &#x2713;
                      </span>
                      <span className="inline-block w-6 h-6 mx-1 text-center rounded-full bg-red-600 text-white">
                        &#10005;
                      </span>
                      <p className="w-3/4 text-[14px] truncate">
                        {file[1].name}
                      </p>
                    </div>
                    <div className="w-full h-[6px] my-4 bg-green-50 rounded-full">
                      <div className="block w-[200px] h-full bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-2/12 text-right">
                    <span>&#10005;</span>
                    <span>&#x27F3;</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadProgressModal;
