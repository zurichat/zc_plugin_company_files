import React from "react";
import { HandleClickEvent } from "./HandleClickEvent";
import SortMenuButton from "./MenuButton";

function SortingMenu({file, setOpenStatus, openStatus}) {
  function sortByDate() {}
  function sortByName() {}
  function sortBySize() {}
  function sortByType() {}

  return (
    <HandleClickEvent
      show={openStatus}
      onClickOutside={() => {
        setOpenStatus(false);
      }}
    >
      <div className="tw-bg-white tw-py-3 tw-w-44 tw-absolute tw--left-3/4 tw-z-20 tw-rounded-sm">
        <SortMenuButton name={"Sort By Name"} cmd={sortByName} />
        <SortMenuButton name={"Sort By Date"} cmd={sortByDate} />
        <SortMenuButton name={"Sort By Size"} cmd={sortBySize} />
        <SortMenuButton name={"Sort By Type"} cmd={sortByType} />
      </div>
    </HandleClickEvent>
  );
}

export default SortingMenu;
