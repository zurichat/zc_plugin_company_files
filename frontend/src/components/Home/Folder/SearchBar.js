import { React, useState } from "react";

import searchIcon from "../../../../public/Icons/search.svg";

const Searchbar = ({ ...props }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleEnterSubmit = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div
      className="border-2 rounded-sm border-grey-400 w-full py-1 px-1 inline-flex justify-between items-center focus-within:shadow-lg focus-within:ring-1"
      {...props}
    >
      <label htmlFor="task search" role="search">
        <input
          className="text-gray-400 leading-tight text-xs text-center focus:text-black focus:outline-none mr-5 w-full"
          placeholder="Search email, name or status"
          type="text"
          value={input}
          onChange={handleInput}
          id="task search"
          onKeyDown={handleEnterSubmit}
        />
      </label>
      <div className="text-gray-400 w-3" type="submit" onClick={handleSubmit}>
        <img {...{ src: searchIcon, alt: "icon" }} />
      </div>
    </div>
  );
};
export default Searchbar;
