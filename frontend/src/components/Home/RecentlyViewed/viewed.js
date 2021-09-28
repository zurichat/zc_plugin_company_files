import React from "react";

function viewed({ image, name, dateViewed, altText, bgColor }) {
  return (
    <div className="tw-w-auto tw-flex tw-flex-col">
      <div className={`tw-w-32 tw-h-32 md:tw-w-28 md:tw-h-28  lg:tw-w-56 lg:tw-h-52 xl:tw-w-60 xl:tw-h-56 tw-flex tw-justify-around tw-${bgColor} tw-rounded-md tw-transition-all tw-duration-150 tw-shadow-md`}>
        <img className="icon tw-w-1/3" src={image} alt={altText} title={altText} />
      </div>
      <div className="mt-5">
        <p className="name tw-text-sm tw-font-semibold">{name}</p>
        <p className="date tw-text-xs tw-text-gray-400">Viewed {dateViewed}</p>
      </div>
    </div>
  );
}

export default viewed;
