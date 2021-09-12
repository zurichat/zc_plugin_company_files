import Button from "Components/Button";
import CustomIcon from "Components/CustomIcon";
import NextImage from "next/image";
import PropTypes from "prop-types";
import React from "react";
const searchIcon = "/Icons/search.svg";
const cancelIcon = "Icons/x-icon.svg";
const settingsIcon = "Icons/parameters-icon.svg";
const greenCircleIcon = "Icons/green-circle.svg";
const docCat = "Icons/doc-cat.svg";
const pdfCat = "Icons/pdf-cat.svg";
const ppCat = "Icons/pp-cat.svg";
const psCat = "Icons/ps-cat.svg";
const videoCat = "Icons/video-cat.svg";
const excelCat = "Icons/excel-cat.svg";
const imgCat = "Icons/img-cat.svg";

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

const SearchResultCategory = ({ iconLink, bgColor, title }) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-lg ${bgColor || "bg-blue-100"}`}>
        <img {...{ src: iconLink, alt: "icon" }} />
      </div>
      <span className="">{title}</span>
    </div>
  );
};
SearchResultCategory.propTypes = {
  iconLink: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
const SearchResultCategoryList = ({ list = [] }) => {
  return (
    <div className="flex flex-wrap gap-8">
      {list?.map((elm, ind) => (
        <SearchResultCategory {...{ key: ind, ...elm }} />
      ))}
    </div>
  );
};
SearchResultCategoryList.propTypes = {
  list: PropTypes.arrayOf(SearchResultCategory.propTypes),
};
// const RecentSearchList = ({ list = [] }) => {
//     return (
//       <div className="flex flex-wrap gap-8">
//         {list?.map((elm, ind) => (
//           <SearchResultCategory {...{ key: ind, ...elm }} />
//         ))}
//       </div>
//     );
//   };
//   RecentSearchList.propTypes = {
//     list: PropTypes.arrayOf(SearchResultCategory.propTypes),
//   };

const SearchInput = ({ className: customClass, ...restProps }) => {
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
          type="text"
          placeholder="Search for your files"
        />
        <CustomIcon {...{ src: cancelIcon, alt: "cancel icon" }} />
      </div>
      <div className="bg-white w-full absolute top-full mt-1 py-2 px-5 shadow-md flex flex-col gap-3">
        <h2 className="text-text-dustygray mt-3">I'm searching for...</h2>
        <SearchResultCategoryList {...{ list: SEARCH_CATEGORY_LIST }} />
      </div>
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
        <CustomIcon {...{ src: settingsIcon, alt: "settings icon" }} />
        <CustomIcon
          {...{ src: greenCircleIcon, alt: "profile image" }}
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
