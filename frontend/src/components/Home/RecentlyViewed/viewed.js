import React from "react";
import { Link } from "react-router-dom";

function viewed({ link, image, name, dateViewed, altText, bgColor }) {
  return (
    <div className="tw-w-auto tw-flex tw-flex-col">
      <Link to={`/${link}`}>
      <div
        className={`tw-w-36 tw-h-36 sm:tw-w-36 sm:tw-h-36 md:tw-w-44 md:tw-h-44 lg:tw-w-56 lg:tw-h-56 tw-flex tw-justify-around ${bgColor} tw-rounded-md tw-transition-all tw-duration-150 tw-shadow-md`}
      >
        <img
          className="icon tw-w-1/3"
          src={image}
          alt={altText}
          title={altText}
        />
      </div>
      </Link>
      <div className="tw-mt-5 tw-text-center md:tw-text-left">
        <Link to={`/${link}`}>
        <p className="name tw-text-sm tw-font-semibold tw-mb-3">{name}</p>
        </Link>
        <p className="date tw-text-sm tw-text-gray-400">Viewed {dateViewed}</p>
      </div>
    </div>
  );
}

export default viewed;