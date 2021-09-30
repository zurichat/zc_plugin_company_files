import React from "react";
import { Link } from "react-router-dom";

function shortcuts({ link, image, altName, name }) {
  return (
    <Link to={`/${link}`}>
      <div className="tw-mb-10 md:tw-mb-0">
        <div className="tw-w-auto tw-h-48 tw-flex tw-justify-around tw-bg-green-100 tw-rounded-md tw-transition-all tw-duration-150 tw-shadow-md hover:tw-bg-green-200">
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
