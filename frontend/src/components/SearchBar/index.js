import axios from "axios";
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
    title: "Text Documents",
    extensions: ["doc"],
  },
  {
    iconLink: pdfCat,
    bgColor: "bg-red-100",
    title: "PDF files",
    extensions: ["pdf"],
  },
  {
    iconLink: psCat,
    title: "Photoshop",
    extensions: "ps",
  },
  {
    iconLink: ppCat,
    bgColor: "bg-orange",
    title: "Powerpoint",
    extensions: "pp",
  },
  {
    iconLink: excelCat,
    bgColor: "bg-green-100",
    title: "Spreadsheets",
    extensions: ["application/vnd.ms-excel"],
  },
  {
    iconLink: videoCat,
    bgColor: "bg-red-50",
    title: "Videos",
    extensions: ["video/1d-interleaved-parityfec","video/3gpp","video/3gpp-tt","video/3gpp2","video/av1","video/bmpeg","video/bt656","video/celb","video/dv","video/encaprtp","video/ffv1","video/flexfec","video/h261","video/h263","video/h263-1998","video/h263-2000","video/h264","video/h264-rcdo","video/h264-svc","video/h265","video/iso.segment","video/jpeg","video/jpeg2000","video/jpm","video/jxsv","video/mj2","video/mp1s","video/mp2p","video/mp2t","video/mp4","video/mp4v-es","video/mpeg","video/mpeg4-generic","video/mpv","video/nv","video/ogg","video/parityfec","video/pointer","video/quicktime","video/raptorfec","video/raw","video/rtp-enc-aescm128","video/rtploopback","video/rtx","video/scip","video/smpte291","video/smpte292m","video/ulpfec","video/vc1","video/vc2","video/vnd.cctv","video/vnd.dece.hd","video/vnd.dece.mobile","video/vnd.dece.mp4","video/vnd.dece.pd","video/vnd.dece.sd","video/vnd.dece.video","video/vnd.directv.mpeg","video/vnd.directv.mpeg-tts","video/vnd.dlna.mpeg-tts","video/vnd.dvb.file","video/vnd.fvt","video/vnd.hns.video","video/vnd.iptvforum.1dparityfec-1010","video/vnd.iptvforum.1dparityfec-2005","video/vnd.iptvforum.2dparityfec-1010","video/vnd.iptvforum.2dparityfec-2005","video/vnd.iptvforum.ttsavc","video/vnd.iptvforum.ttsmpeg2","video/vnd.motorola.video","video/vnd.motorola.videop","video/vnd.mpegurl","video/vnd.ms-playready.media.pyv","video/vnd.nokia.interleaved-multimedia","video/vnd.nokia.mp4vr","video/vnd.nokia.videovoip","video/vnd.objectvideo","video/vnd.radgamettools.bink","video/vnd.radgamettools.smacker","video/vnd.sealed.mpeg1","video/vnd.sealed.mpeg4","video/vnd.sealed.swf","video/vnd.sealedmedia.softseal.mov","video/vnd.uvvu.mp4","video/vnd.vivo","video/vnd.youtube.yt","video/vp8","video/vp9","video/webm","video/x-f4v","video/x-fli","video/x-flv","video/x-m4v","video/x-matroska","video/x-mng","video/x-ms-asf","video/x-ms-vob","video/x-ms-wm","video/x-ms-wmv","video/x-ms-wmx","video/x-ms-wvx","video/x-msvideo","video/x-sgi-movie","video/x-smv"]
  },
  {
    iconLink: imgCat,
    title: "Images",
    extensions: ["image/aces","image/apng","image/avci","image/avcs","image/avif","image/bmp","image/cgm","image/dicom-rle","image/emf","image/fits","image/g3fax","image/gif","image/heic","image/heic-sequence","image/heif","image/heif-sequence","image/hej2k","image/hsj2","image/ief","image/jls","image/jp2","image/jpeg","image/jph","image/jphc","image/jpm","image/jpx","image/jxr","image/jxra","image/jxrs","image/jxs","image/jxsc","image/jxsi","image/jxss","image/ktx","image/ktx2","image/naplps","image/pjpeg","image/png","image/prs.btif","image/prs.pti","image/pwg-raster","image/sgi","image/svg+xml","image/t38","image/tiff","image/tiff-fx","image/vnd.adobe.photoshop","image/vnd.airzip.accelerator.azv","image/vnd.cns.inf2","image/vnd.dece.graphic","image/vnd.djvu","image/vnd.dvb.subtitle","image/vnd.dwg","image/vnd.dxf","image/vnd.fastbidsheet","image/vnd.fpx","image/vnd.fst","image/vnd.fujixerox.edmics-mmr","image/vnd.fujixerox.edmics-rlc","image/vnd.globalgraphics.pgb","image/vnd.microsoft.icon","image/vnd.mix","image/vnd.mozilla.apng","image/vnd.ms-dds","image/vnd.ms-modi","image/vnd.ms-photo","image/vnd.net-fpx","image/vnd.pco.b16","image/vnd.radiance","image/vnd.sealed.png","image/vnd.sealedmedia.softseal.gif","image/vnd.sealedmedia.softseal.jpg","image/vnd.svf","image/vnd.tencent.tap","image/vnd.valve.source.texture","image/vnd.wap.wbmp","image/vnd.xiff","image/vnd.zbrush.pcx","image/webp","image/wmf","image/x-3ds","image/x-cmu-raster","image/x-cmx","image/x-freehand","image/x-icon","image/x-jng","image/x-mrsid-image","image/x-ms-bmp","image/x-pcx","image/x-pict","image/x-portable-anymap","image/x-portable-bitmap","image/x-portable-graymap","image/x-portable-pixmap","image/x-rgb","image/x-tga","image/x-xbitmap","image/x-xcf","image/x-xpixmap","image/x-xwindowdump"]
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

const getCategoryExtension = (cat) => {
  if (!cat) return null;
  return SEARCH_CATEGORY_LIST?.find(
    (elm) => cat?.toLowerCase() === elm?.title?.toLowerCase()
  )?.extensions;
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
  const API_URL = window.location.hostname.includes('localhost') || window.location.hostname.includes('127.0.0.1')
    ? 'http://127.0.0.1:5500/api/v1'
    : 'https://companyfiles.zuri.chat/api/v1';

  const fetchUrl = `${API_URL}/search?fileName=${searchInputValue}&fileType=${getCategoryExtension(selectedCategory || "") || ""}`;

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
    return axios.get(fetchUrl)
      .then(data => console.log(`Search data`, data))
      .catch(error => console.log(error));
  };
  const handleSubmit = (e) => {
    if (!e) e = window.event;
    const keyCode = e.code || e.key;
    if (keyCode == "Enter") {
      return onSubmit();
    }
  };
  SearchInput.handleClickOutside = onBlurHandler;
  const selectCategoryHandler = (category) => {
    selectCategory(category);
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
