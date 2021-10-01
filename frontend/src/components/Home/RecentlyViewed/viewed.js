import React from "react";

function viewed({ image, name, dateViewed, altText, bgColor }) {
  return (
    <div className="tw-w-auto tw-flex tw-flex-col">
      <div className={`tw-w-auto tw-h-60 tw-flex tw-justify-around ${bgColor} tw-rounded-md tw-transition-all tw-duration-150 tw-shadow-md`}>
        <img className="icon tw-w-1/3" src={image} alt={altText} title={altText} />
      </div>
      <div className="tw-mt-5">
        <p className="name tw-text-sm tw-font-semibold tw-mb-3">{name}</p>
        <p className="date tw-text-sm tw-text-gray-400">Viewed {dateViewed}</p>
      </div>
    </div>
  );
}

export default viewed;
