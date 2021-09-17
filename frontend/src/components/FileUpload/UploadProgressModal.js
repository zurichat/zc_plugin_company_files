import React from "react";

const UploadProgressModal = ({ progress, files, hideUploadModal }) => {
  // console.log(files);
  return (
    <div className='absolute left-1/2 top-32 z-30 w-auto h-auto'>
      {progress && (
        <div className="w-[400px] bg-white rounded-md h-auto">
          {files && (
            <div className="w-full mb-4">
              {files[1].map((file) => (
               <div className='flex justify-between'>
                  <div className=" w-11/12">
                    <p className="text-[14px]">{file[1].name}</p>
                    <div className="w-full h-[6px] my-4 bg-green-50 rounded-full">
                      <div className="block w-[200px] h-full bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className='w-1/12'>
                  &#10005;
                  </div>
               </div>
              ))}
            </div>
          )}
          <button
            onClick={hideUploadModal}
            className="px-3 py-1 bg-white border-2 border-green-400 text-green-400 rounded-md"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadProgressModal;
