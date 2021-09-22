import React, { useState } from "react";
import active from "../../../public/Icons/arrow-left/active.svg";
import imageIcon from "../../../public/Icons/image/active.svg";
import downloadIcon from "../../../public/Icons/download/active.svg";
import Vertical from "../../../public/Icons/more-vertical/active.svg";
import LeftArrow from "../../../public/Icons/arrow-left/active.svg";
import RightArrow from "../../../public/Icons/arrow-right/active.svg";
import ZoomIn from "../../../public/Icons/zoom-in/active.svg"
import ZoomOut from "../../../public/Icons/zoom-out/active.svg"
import { useHistory } from "react-router";
import ImageCropper from "../Image crop/ImageCropper";
import './ImagePreview.Module.css'

function index({ file, setOpenStatus }) {
  const history = useHistory();
  const [hidden, setHidden] = useState(true)

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
            <img src={Vertical} alt="more-icon" className="ml-2" onClick={() => setHidden(!hidden)} />
          </div>
        </div>
      </nav>
      <div className="flex flex-col justify-between items-center w-full">
        <div className="flex justify-between w-full md:px-6 px-2">
          <div className="flex self-center">
            <img
              src={LeftArrow}
              alt="left-arrow"
              className="bg-black rounded-full md:h-14 md:w-14 w-5 h-5 p-1 md:p-3"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={file.url}
              alt="image"
              className="md:min-w-0 min-w-full w-60 md:w-10/12"
            />
          </div>
          <div className="flex self-center">
            <img
              src={RightArrow}
              alt="right-arrow"
              className="bg-black rounded-full md:h-14 md:w-14 w-5 h-5 p-1 md:p-3"
            />
          </div>
        </div>
        <div className="bg-black py-3 px-7 flex justify-between mt-5">
          <img
            src={ZoomIn}
            alt="zoom-in"
            className="md:w-10 w-7 mr-4"
          />
          <img
            src={ZoomOut}
            alt="zoom-out"
            className="md:w-10 w-7"
          />
            <ImageCropper file={file.url} />
          
        </div>
      </div>
    </div>
  );
}

export default index;
