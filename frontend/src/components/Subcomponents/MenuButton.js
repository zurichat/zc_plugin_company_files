import React from "react";

function MenuButton({ name, children, cmd }) {


  return (
    <button
      className="tw-btn tw-btn-outline-primary tw-btn-block hover:tw-bg-green-500 hover:tw-text-white tw-text-gray-500 tw-py-2 tw-px-6 tw-w-full tw-flex tw-items-start tw-text-base"
      onClick={() => cmd()}
    >
      {children}
      {name}
    </button>
  );
}

export default MenuButton;
