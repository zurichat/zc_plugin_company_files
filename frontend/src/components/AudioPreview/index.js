import React from "react";
import active from "../../../public/Icons/arrow-left/active.svg";
import imageIcon from "../../../public/Icons/image/active.svg";
import downloadIcon from "../../../public/Icons/download/active.svg";
import Vertical from "../../../public/Icons/more-vertical/active.svg";

function index({ file, setOpenStatus }) {
  return (
    <div className="bg-gray-800 bg-opacity-70 overflow-auto h-full w-full flex-auto flex flex-col justify-between pb-6 absolute z-10 top-0 left-0 bottom-0 right-0">
      <nav className="h-10 w-full flex flex-row justify-between py-3 px-3 md:px-5 lg:px-7">
        <div className="flex">
          <div>
            <img
              src={active}
              alt="arrow-left"
              className="mr-5"
              onClick={() => setOpenStatus(false)}
            />
          </div>
          <div>
            <div className="flex flex-row">
              <img src={imageIcon} alt="image-icon" className="mr-2" />
              <p className="text-white">{file.fileName}</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={downloadIcon} alt="download-icon" />
          </div>
          <div>
            <img src={Vertical} alt="more-icon" className="ml-2" />
          </div>
        </div>
      </nav>
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
