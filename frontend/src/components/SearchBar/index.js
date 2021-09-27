import Axios from "axios";
import CustomIcon from "../CustomIcon";
import PropTypes from "prop-types";
import React from "react";
import cancelIcon from "../../../public/Icons/x-icon.svg";
import clockIcon from "../../../public/Icons/clock-icon.svg";
import docCat from "../../../public/Icons/doc-cat.svg";
import excelCat from "../../../public/Icons/excel-cat.svg";
import imgCat from "../../../public/Icons/img-cat.svg";
import onClickOutside from "react-onclickoutside";
import onlineUserIcon from "../../../public/Icons/online-user.svg";
import pdfCat from "../../../public/Icons/pdf-cat.svg";
import ppCat from "../../../public/Icons/pp-cat.svg";
import psCat from "../../../public/Icons/ps-cat.svg";
import searchIcon from "../../../public/Icons/search.svg";
import { useState } from "react";
import videoCat from "../../../public/Icons/video-cat.svg";

import {AiOutlineClose} from 'react-icons/ai/index'

const SEARCH_CATEGORY_LIST = [
  {
    iconLink: docCat,
    title: "Document",
    ext: "doc",
  },
  {
    iconLink: pdfCat,
    bgColor: "bg-red-100",
    title: "Pdf",
    ext: "pdf",
  },
  {
    iconLink: psCat,
    title: "Photoshop",
    ext: "ps",
  },
  {
    iconLink: ppCat,
    bgColor: "bg-orange",
    title: "Powerpoint",
    ext: "pp",
  },
  {
    iconLink: excelCat,
    bgColor: "bg-green-100",
    title: "Excel",
    ext: "xls",
  },
  {
    iconLink: videoCat,
    bgColor: "bg-red-50",
    title: "Video",
    ext: "mp4",
  },
  {
    iconLink: imgCat,
    title: "Image",
    ext: "png",
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
const getCatExt = (cat) => {
  if (!cat) return null;
  return SEARCH_CATEGORY_LIST?.find(
    (elm) => cat?.toLowerCase() === elm?.title?.toLowerCase()
  )?.ext;
};

const SearchResultCategory = ({ iconLink, bgColor, title, ...restProps }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer" {...restProps}>
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
const SearchResultCategoryList = ({ list = [], selectCategoryHandler }) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-text-200">I&apos;m searching for...</h2>
      <div className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-8">
        {list?.map((elm, ind) => (
          <SearchResultCategory
            key={ind}
            {...{ ...elm, onClick: () => selectCategoryHandler(elm?.title) }}
          />
        ))}
      </div>
    </div>
  );
};
SearchResultCategoryList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(SearchResultCategory.propTypes)),
  selectCategoryHandler: PropTypes.func,
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

const SelectedCategory = ({ category = "Document", selectCategoryHandler }) => {
  return (
    <div className="flex items-center justify-center mr-2 py-1 px-3 bg-blue-50 gap-3">
      {category}
      <CustomIcon
        {...{
          src: cancelIcon,
          alt: "cancel category",
          className: "h-6",
          onClick: () => selectCategoryHandler(false),
        }}
        customHeight
      />
    </div>
  );
};
SelectedCategory.propTypes = {
  category: PropTypes.string,
  selectCategoryHandler: PropTypes.func,
};

const SearchInput = ({ className: customClass, ...restProps }) => {
  const [showSearchWindow, setShowSearchWindow] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [selectedCategory, selectCategory] = useState(false);
  const fetchUrl = `https://companyfiles.zuri.chat/api/v1/search${
    !searchInputValue
      ? ""
      : `/filter?filename=${searchInputValue}&filetype=${
          getCatExt(selectedCategory || "") || "all"
        }`
  }`;

  const onChangeHandler = (e) => {
    setSearchInputValue(e?.target?.value);
  };
  const onFocusHandler = () => {
    setShowSearchWindow(true);
  };
  const onBlurHandler = () => {
    setShowSearchWindow(false);
  };
  const clearInput = () => {
    setSearchInputValue("");
    selectCategory(false);
  };
  const onSubmit = () => {
    return Axios.get(fetchUrl)
      .then((data) => console.log(`Search data`, data))
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == "Enter") {
      return onSubmit();
    }
  };
  SearchInput.handleClickOutside = onBlurHandler;
  const selectCategoryHandler = (cat) => {
    selectCategory(cat);
  };
  return (
    <div className="flex flex-col w-full relative">
      <div
        {...{
          className: `flex items-center justify-between py-1.5 px-2 border border-gray-200 rounded ${customClass}`,
          ...restProps,
        }}
      >
        {!selectedCategory ? (
          <p> </p>
        ) : (
          <SelectedCategory className="mr-4"
            {...{ category: selectedCategory || "", selectCategoryHandler }}
          />
        )}

        <input
          className="flex-1 text-sm justify-start focus:outline-none"
          {...{
            value: searchInputValue,
            type: "text",
            placeholder: "Search for your files",
            onChange: onChangeHandler,
            onFocus: onFocusHandler,
            onKeyPress: handleSubmit,
          }}
        />
        
        {!selectedCategory ? (
          <p> </p>
        ) : (

          <AiOutlineClose className="text-gray-500 cursor-pointer" onClick={clearInput}/>
          // <CustomIcon
          //   {...{ src: cancelIcon, alt: "cancel icon", onClick: clearInput }}
          // />
        )}

        
      </div>
      {!!showSearchWindow && (
        <div className="bg-white z-20 w-full absolute top-full mt-1 py-5 px-5 shadow-md flex flex-col gap-10">
          {!!selectedCategory ? null : (
            <SearchResultCategoryList
              {...{ list: SEARCH_CATEGORY_LIST, selectCategoryHandler }}
            />
          )}
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
const searchInputClickOutsideConfig = {
  handleClickOutside: () => SearchInput.handleClickOutside,
};
const SearchInputWithOnclick = onClickOutside(
  SearchInput,
  searchInputClickOutsideConfig
);

const SearchBar = ({ className: customClass, ...restProps }) => {
  return (
    <div
      {...{
        className: `w-full flex items-center justify-between py-3 px-10 ${customClass}`,
        ...restProps,
      }}
    >
      <div className="flex items-center gap-4 w-full lg:w-2/3 xl:w-3/5">
        <SearchInputWithOnclick className="flex-1" />
      </div>
      <CustomIcon
        {...{ src: onlineUserIcon, alt: "profile image" }}
        className="h-10 ml-2 -mr-2 hidden md:inline-flex"
      />
    </div>
  );
};
SearchBar.propTypes = {
  className: PropTypes.string,
  restProps: PropTypes.any,
};

export default SearchBar;
