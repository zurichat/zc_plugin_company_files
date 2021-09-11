import Button from "Components/Button";
import CustomIcon from "Components/CustomIcon";
import NextImage from "next/image";
import PropTypes from "prop-types";
import React from "react";
const searchIcon = "/Icons/search.svg";
const cancelIcon = "Icons/x-icon.svg";
const settingsIcon = "Icons/parameters-icon.svg";
const greenCircleIcon = "Icons/green-circle.svg";

const SearchInput = ({ className: customClass, ...restProps }) => {
  return (
    <div
      {...{
        className: `flex items-center justify-between gap-1 py-1 px-2 shadow ${customClass}`,
        ...restProps,
      }}
    >
      <CustomIcon {...{ src: searchIcon, alt: "search icon" }} />
      <input
        className="flex-1 py-2 px-4 focus:outline-none"
        type="text"
        placeholder="Search for your files"
      />
      <CustomIcon {...{ src: cancelIcon, alt: "cancel icon" }} />
    </div>
  );
};

const SearchBar = ({ className: customClass, ...restProps }) => {
  return (
    <div
      {...{
        className: `container flex items-center justify-between m-2 ${customClass}`,
        ...restProps,
      }}
    >
      <div className="flex items-center gap-4">
        <span className="text-2xl">Files</span>
        <Button {...{ variant: "outline-primary" }}>Add New</Button>
      </div>
      <div className="flex items-center gap-4 lg:w-2/3 xl:w-3/5">
        <SearchInput className="flex-1" />
        <CustomIcon {...{ src: settingsIcon, alt: "search icon" }} />
        <CustomIcon
          {...{ src: greenCircleIcon, alt: "search icon" }}
          className="h-16"
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  restProps: PropTypes.any,
};

export default SearchBar;
