import React from "react";

function MenuButton({ name, children, cmd }) {


  return (
    <button
      className="btn btn-outline-primary btn-block hover:bg-green-400 text-gray-500 py-2 px-6 w-full flex items-start"
      onClick={() => cmd()}
    >
      {children}
      {name}
    </button>
  );
}

export default MenuButton;
