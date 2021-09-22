import React from 'react';
import Nav from "../Subcomponents/nav"

function index({ file, setOpenStatus }) {
  return (
    <div className="bg-gray-800 bg-opacity-70 overflow-auto h-full w-full flex-auto flex flex-col justify-between pb-6 absolute z-10 top-0 left-0 bottom-0 right-0">
      <Nav file={file} setOpenStatus={setOpenStatus} />
      <div className="flex flex-col justify-between items-center h-3/4 w-full">
        <div className="flex justify-between h-full w-full md:px-6 px-2">
          <div className="flex items-center justify-center">
            <audio
              src={file.url}
              controls
              className="max-w-sm h-96 md:max-w-lg md:h-2/4 lg:max-w-lg lg:h-3/4"
            >
              Your browser does not support the <code>audio</code> element
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
