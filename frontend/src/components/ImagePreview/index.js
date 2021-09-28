import Nav from "../Subcomponents/nav";
import LeftArrow from "../../../public/Icons/arrow-left/active.svg";
import RightArrow from "../../../public/Icons/arrow-right/active.svg";
import ZoomIn from "../../../public/Icons/zoom-in/active.svg";
import ZoomOut from "../../../public/Icons/zoom-out/active.svg";
import ImageCropper from "../Image crop/ImageCropper";
import React, { useState } from "react";

import Preview from "../Image crop/reveal";
import CroppingCSS from "../Image crop/Cropping.module.css";
import Crop from "../Image crop/index";

function index({ file, setOpenStatus }) {
  const [showPreview, setShowPreview] = useState(false);
  return (
    <div className="tw-bg-gray-800 tw-bg-opacity-70 tw-overflow-auto tw-h-full tw-w-full tw-flex-auto tw-flex tw-flex-col tw-justify-between tw-pb-6 tw-fixed tw-z-30 tw-top-0 tw-left-0 tw-bottom-0 tw-right-0">
      <Nav file={file} setOpenStatus={setOpenStatus} />

      <div className="tw-flex tw-flex-col tw-justify-between tw-items-center tw-h-3/4 tw-w-full">
        <div className="tw-flex tw-justify-between tw-h-full tw-w-full md:tw-px-6 tw-px-2">
          <div className="tw-flex tw-self-center">
            <img
              src={LeftArrow}
              alt="left-arrow"
              className="tw-bg-black tw-rounded-full md:tw-h-14 md:tw-w-14 tw-w-5 tw-h-5 tw-p-1 md:tw-p-3"
            />
          </div>

          <div className="tw-flex tw-items-center tw-justify-center">
            <img
              src={file.url}
              alt="image"
              className="tw-max-w-sm tw-h-96 md:tw-max-w-lg md:tw-h-2/4 lg:tw-max-w-lg lg:tw-h-3/4"
            />
          </div>
          <div className="tw-flex tw-self-center">
            <img
              src={RightArrow}
              alt="right-arrow"
              className="tw-bg-black tw-rounded-full md:tw-h-14 md:tw-w-14 tw-w-5 tw-h-5 tw-p-1 md:tw-p-3"
            />
            <div></div>
          </div>
        </div>
        <div className="tw-bg-black tw-py-3 tw-px-7 tw-flex tw-justify-between tw-mt-5">
          <img src={ZoomIn} alt="zoom-in" className="md:tw-w-10 tw-w-7 tw-mr-4" />
          <img src={ZoomOut} alt="zoom-out" className="md:tw-w-10 tw-w-7" />
          <div>
            <div>
              <button
                className={CroppingCSS.crop}
                onClick={() => setShowPreview(true)}
              >
                <svg
                  id="Layer_1"
                  enableBackground="new 0 0 510 510"
                  fill="grey"
                  height="45"
                  viewBox="0 0 510 510"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m450 360v-278.787l55.606-55.606-21.212-21.214-55.607 55.607h-278.787v-60h-90v60h-60v90h60v300h300v60h90v-60h60v-90zm-420-240v-30h60v-60h30v60h278.787l-30 30h-248.787v248.787l-30 30v-278.787zm120 218.787v-188.787h188.787zm210-167.574v188.787h-188.787zm120 248.787h-60v60h-30v-60h-278.787l30-30h248.787v-248.787l30-30v278.787h60z" />
                </svg>
              </button>
              <Preview trigger={showPreview} setTrigger={setShowPreview}>
                <div>
                  <Crop src={file.url} alt="crop" width="100%" height="100%" />
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
