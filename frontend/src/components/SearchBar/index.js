import CustomIcon from "../CustomIcon";
import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
const searchIcon = "/Icons/search.svg";
const cancelIcon = "Icons/x-icon.svg";
const docCat = "Icons/doc-cat.svg";
const pdfCat = "Icons/pdf-cat.svg";
const ppCat = "Icons/pp-cat.svg";
const psCat = "Icons/ps-cat.svg";
const videoCat = "Icons/video-cat.svg";
const excelCat = "Icons/excel-cat.svg";
const imgCat = "Icons/img-cat.svg";
const clockIcon = "Icons/clock-icon.svg";
const onlineUserIcon = "Icons/online-user.svg";

const SEARCH_CATEGORY_LIST = [
  {
    iconLink: docCat,
    title: "Document",
  },
  {
    iconLink: pdfCat,
    bgColor: "bg-red-100",
    title: "Pdf",
  },
  {
    iconLink: psCat,
    title: "Photoshop",
  },
  {
    iconLink: ppCat,
    bgColor: "bg-orange",
    title: "Powerpoint",
  },
  {
    iconLink: excelCat,
    bgColor: "bg-green-100",
    title: "Excel",
  },
  {
    iconLink: videoCat,
    bgColor: "bg-red-50",
    title: "Video",
  },
  {
    iconLink: imgCat,
    title: "Image",
  },
];
const RECENT_SEARCH_ITEMS = [
  {
    name: "design101.doc",
  },
  {
    name: "project.xlsx",
  },
];

const SearchResultCategory = ({ iconLink, bgColor, title }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className={`min-w-max p-2 rounded-lg ${bgColor || "bg-blue-100"}`}>
        <img {...{ src: iconLink, alt: "icon" }} />
      </div>
      <span className="">{title}</span>
    </div>
  );
};
SearchResultCategory.propTypes = {
  iconLink: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  title: PropTypes.string.isRequired,
};
const SearchResultCategoryList = ({ list = [] }) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-text-200">I&apos;m searching for...</h2>
      <div className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-8">
        {list?.map((elm, ind) => (
          <SearchResultCategory key={ind} {...elm} />
        ))}
      </div>
    </div>
  );
};
SearchResultCategoryList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(SearchResultCategory.propTypes)),
};

const RecentSearchItem = ({ name = "file_name.txt" }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <img {...{ src: clockIcon, alt: "icon" }} />
      <span className="text-sm text-text-300">{name}</span>
    </div>
  );
};
RecentSearchItem.propTypes = {
  name: PropTypes.string.isRequired,
};
const RecentSearchList = ({ list = [] }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-text-200 mb-1">Recent searches</h2>
      {list?.map((elm, ind) => (
        <RecentSearchItem key={ind} {...elm} />
      ))}
    </div>
  );
};
RecentSearchList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(RecentSearchItem.propTypes)),
};

const SearchInput = ({ className: customClass, ...restProps }) => {
  const [showSearchWindow, setShowSearchWindow] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("initialState");
  console.log(
    "🚀 ~ file: index.js ~ line 121 ~ SearchInput ~ searchInputValue",
    searchInputValue
  );
  const onChangeHandler = (e) => {
    setSearchInputValue(e?.target?.value);
  };
  const onFocusHandler = () => {
    setShowSearchWindow(true);
  };
  const onBlurHandler = () => {
    setShowSearchWindow(false);
  };
  return (
    <div className="bg-white flex flex-col w-full relative">
      <div
        {...{
          className: `flex items-center justify-between gap-1 py-2 px-5 shadow ${customClass}`,
          ...restProps,
        }}
      >
        <CustomIcon {...{ src: searchIcon, alt: "search icon" }} />
        <input
          className="flex-1 py-2 px-4 focus:outline-none"
          {...{
            type: "text",
            placeholder: "Search for your files",
            onChange: onChangeHandler,
            onFocus: onFocusHandler,
            onBlur: onBlurHandler,
          }}
        />
        <CustomIcon {...{ src: cancelIcon, alt: "cancel icon" }} />
      </div>
      {!!showSearchWindow && (
        <div className="bg-white z-20 w-full absolute top-full mt-1 py-5 px-5 shadow-md flex flex-col gap-10">
          <SearchResultCategoryList {...{ list: SEARCH_CATEGORY_LIST }} />
          <RecentSearchList {...{ list: RECENT_SEARCH_ITEMS }} />
        </div>
      )}
    </div>
  );
};
SearchInput.propTypes = {
  className: PropTypes.string,
  restProps: PropTypes.any,
};

const SearchBar = ({ className: customClass, ...restProps }) => {
  return (
    <div
      {...{
        className: `container flex items-center justify-between m-2 ${customClass}`,
        ...restProps,
      }}
    >
      <div className="flex items-center gap-4 w-full lg:w-2/3 xl:w-3/5">
        <SearchInput className="flex-1" />
      </div>
      <CustomIcon
        {...{ src: onlineUserIcon, alt: "profile image" }}
        className="h-16 hidden md:inline-flex"
      />
    </div>
  );
};
SearchBar.propTypes = {
  className: PropTypes.string,
  restProps: PropTypes.any,
};

export default SearchBar;
