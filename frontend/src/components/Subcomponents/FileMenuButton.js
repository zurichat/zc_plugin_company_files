import React from "react";

function FileMenuButton({ name, imgLink, altText }) {
  return (
    <button
      className="btn btn-outline-primary btn-block capitalize hover:bg-green-400 py-2 px-6 w-full flex items-start"
    >
      <img src={imgLink} alt={altText} className="mr-2 flex self-center" />
      {name}
    </button>
  );
}

export default FileMenuButton;
