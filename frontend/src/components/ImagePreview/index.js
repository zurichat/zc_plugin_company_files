
import Nav from "../Subcomponents/nav";
import LeftArrow from "../../../public/Icons/arrow-left/active.svg";
import RightArrow from "../../../public/Icons/arrow-right/active.svg";
import ZoomIn from "../../../public/Icons/zoom-in/active.svg";
import ZoomOut from "../../../public/Icons/zoom-out/active.svg";
import ImageCropper from "../Image crop/ImageCropper";
import React, {useState} from 'react';

import  Preview from "../Image crop/reveal";
import CroppingCSS from "../Image crop/Cropping.module.css";
import Crop from "../Image crop/index"


function index({ file, setOpenStatus }) {
  const [showPreview, setShowPreview] = useState(false);
  return (
    <div className="bg-gray-800 bg-opacity-70 overflow-auto h-full w-full flex-auto flex flex-col justify-between pb-6 absolute z-10 top-0 left-0 bottom-0 right-0">
      <Nav file={file} setOpenStatus={setOpenStatus} />
      
      <div className="flex flex-col justify-between items-center h-3/4 w-full">
        <div className="flex justify-between h-full w-full md:px-6 px-2">
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
              className="max-w-sm h-96 md:max-w-lg md:h-2/4 lg:max-w-lg lg:h-3/4"
            />
          </div>
          <div className="flex self-center">
            <img
              src={RightArrow}
              alt="right-arrow"
              className="bg-black rounded-full md:h-14 md:w-14 w-5 h-5 p-1 md:p-3"
            />
            <div>
       
      </div>
          </div>
        </div>
        <div className="bg-black py-3 px-7 flex justify-between mt-5">
          <img src={ZoomIn} alt="zoom-in" className="md:w-10 w-7 mr-4" />
          <img src={ZoomOut} alt="zoom-out" className="md:w-10 w-7" />
          <div>
        <div>
    <button className={CroppingCSS.crop} onClick={() => setShowPreview(true) }><svg id="Layer_1" enable-background="new 0 0 510 510" fill="grey" height="45" viewBox="0 0 510 510" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m450 360v-278.787l55.606-55.606-21.212-21.214-55.607 55.607h-278.787v-60h-90v60h-60v90h60v300h300v60h90v-60h60v-90zm-420-240v-30h60v-60h30v60h278.787l-30 30h-248.787v248.787l-30 30v-278.787zm120 218.787v-188.787h188.787zm210-167.574v188.787h-188.787zm120 248.787h-60v60h-30v-60h-278.787l30-30h248.787v-248.787l30-30v278.787h60z"/></svg></button>
    <Preview trigger={showPreview} setTrigger={setShowPreview}>
      
        <div >
          <Crop src={file.url} alt='crop' width='100%' height='100%' />
        </div>
      
      </Preview>
    </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default index;
