import React from "react";
import AllFiles from "../../../../public/Icons/AllFiles.svg";
import Shared from "../../../../public/Icons/shared.svg";
import Star from "../../../../public/Icons/Star.svg";
import Trash from "../../../../public/Icons/homeTrash.svg";
import Help from "../../../../public/Icons/Help.svg";
import Shortcuts from "./shortcuts";

const index = () => {
  return (
    <div className="tw-w-full tw-py-6">
      <div className="tw-w-full tw-grid tw-grid-cols-auto tw-gap-16">
        <Shortcuts
          link={"all-files"}
          image={AllFiles}
          name={"All Files"}
          altName={"all files"}
        />
        {/* <Shortcuts
          link={"shared"}
          image={Shared}
          name={"Shared"}
          altName={"shared"}
        /> */}
        <Shortcuts
          link={"starred"}
          image={Star}
          name={"Starred"}
          altName={"Starred"}
        />
        <Shortcuts
          link={"trash"}
          image={Trash}
          name={"Trash"}
          altName={"trash"}
        />
        <Shortcuts link={"help"} image={Help} name={"Help"} altName={"help"} />
      </div>
    </div>
  );
};

export default index;
