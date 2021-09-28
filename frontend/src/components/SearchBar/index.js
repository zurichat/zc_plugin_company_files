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

import {AiOutlineClose} from 'react-icons/ai/index';

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
    <div className="tw-flex tw-flex-col tw-gap-6">
      <h2 className="text-text-200">I&apos;m searching for...</h2>
      <div className="tw-grid tw-grid-flow-row sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-auto-rows-max tw-gap-8">
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
    <div className="tw-flex tw-items-center tw-gap-3 tw-cursor-pointer">
      <img {...{ src: clockIcon, alt: "icon" }} />
      <span className="tw-text-sm text-text-300">{name}</span>
    </div>
  );
};
RecentSearchItem.propTypes = {
  name: PropTypes.string.isRequired,
};
const RecentSearchList = ({ list = [] }) => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-3">
      <h2 className="text-text-200 tw-mb-1">Recent searches</h2>
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
    <div className="tw-flex tw-items-center tw-justify-center tw-mr-2 tw-py-1 tw-px-3 tw-bg-blue-50 tw-gap-3">
      {category}
      <CustomIcon
        {...{
          src: cancelIcon,
          alt: "cancel category",
          className: "tw-h-6",
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
    <div className="tw-flex tw-flex-col tw-w-full tw-relative">
      <div
        {...{
          className: `tw-flex tw-items-center tw-justify-between tw-py-1.5 tw-px-2 tw-border tw-border-gray-200 tw-rounded ${customClass}`,
          ...restProps,
        }}
      >
        {!selectedCategory ? (
          <p> </p>
        ) : (
          <SelectedCategory className="tw-mr-4"
            {...{ category: selectedCategory || "", selectCategoryHandler }}
          />
        )}

        <input
          className="tw-flex-1 tw-text-sm tw-justify-start focus:tw-outline-none"
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

          <AiOutlineClose className="tw-text-gray-500 tw-cursor-pointer" onClick={clearInput}/>
          // <CustomIcon
          //   {...{ src: cancelIcon, alt: "cancel icon", onClick: clearInput }}
          // />
        )}

        
      </div>
      {!!showSearchWindow && (
        <div className="tw-bg-white tw-z-20 tw-w-full tw-absolute tw-top-full tw-mt-1 tw-py-5 tw-px-5 tw-shadow-md tw-flex tw-flex-col tw-gap-10">
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
        className: `tw-w-full tw-flex tw-items-center tw-justify-between tw-py-3 tw-px-10 ${customClass}`,
        ...restProps,
      }}
    >
      <div className="tw-flex tw-items-center tw-gap-4 tw-w-full lg:tw-w-2/3 xl:tw-w-3/5">
        <SearchInputWithOnclick className="tw-flex-1" />
      </div>
      <CustomIcon
        {...{ src: onlineUserIcon, alt: "profile image" }}
        className="tw-h-10 tw-ml-2 -tw-mr-2 tw-hidden md:tw-inline-flex"
      />
    </div>
  );
};
SearchBar.propTypes = {
  className: PropTypes.string,
  restProps: PropTypes.any,
};

export default SearchBar;
