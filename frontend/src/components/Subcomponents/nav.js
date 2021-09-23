import React from "react";
import active from "../../../public/Icons/arrow-left/active.svg";
import imageIcon from "../../../public/Icons/image/active.svg";
import downloadIcon from "../../../public/Icons/download/active.svg";
import Vertical from "../../../public/Icons/more-vertical/active.svg";


function nav({file, setOpenStatus}) {
  return (
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
          <a href={file.url} download>
            <img src={downloadIcon} alt="download-icon" />
          </a>
        </div>
        
        <div>
          <img src={Vertical} alt="more-icon" className="ml-2" />
        </div>
      </div>
    </nav>
  );
}

export default nav;
