import React from "react";

import searchIcon from "../../../public/Icons/search.svg";

const SearchBar = (props) => {
  console.log(props);
  return (
    <div className="tw-my-8 tw-flex tw-items-center tw-border tw-rounded-sm tw-border-gray-200 tw-py-3 tw-px-5 tw-w-11/12">
      <img src={searchIcon} className="w-6" />
      <input
        onChange={(e) => props.onSearched(e.target.value)}
        className="tw-appearance-none tw-bg-transparent tw-border-none tw-w-full tw-ml-4 focus:tw-outline-none tw-text-sm"
        type="text"
        placeholder="Search the help center"
      />
    </div>
  );
};

export default SearchBar;
