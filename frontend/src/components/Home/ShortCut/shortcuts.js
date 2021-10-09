import React from "react";
import { Link } from "react-router-dom";

function shortcuts({ link, image, altName, name }) {
  return (
    <Link to={`/${link}`} className="hover:tw-text-green-400">
      <div className="tw-mb-2 md:tw-mb-0 tw-flex tw-flex-col tw-justify-around tw-items-center">
        <div className="tw-w-16 sm:tw-w-28 sm:tw-h-28 tw-h-16 md:tw-w-32 md:tw-h-32 lg:tw-h-48 lg:tw-w-48 tw-flex tw-justify-around tw-items-center tw-bg-green-100 tw-rounded-md tw-transition-all tw-duration-150 tw-shadow-md">
          <img
            src={image}
            alt={altName}
            className="icon tw-w-1/3"
            title={altName}
          />
        </div>
        <div className="tw-mt-5">
          <p className="name tw-text-base tw-font-semibold tw-text-center">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default shortcuts;
