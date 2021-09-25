import React from "react";
import Searchbar from "./SearchBar";

import user from "../../../../public/Icons/folder-user.svg";
import linkIcon from "../../../../public/Icons/link.svg";
import down from "../../../../public/Icons/chevronDown.svg";
import save from "../../../../public/Icons/discIcon.svg";
import Dropdown from "./dropdown";

const FolderOptions = ({ options }) => {
  return (
    options && (
      <div className="w-full bg-white text-left shadow-md rounded-md shadow-lg text-sm">
        <div className="cursor-pointer text-gray-400 flex justify-between border-b py-2 px-5 items-center">
          <div className="w-8/12">
            <Searchbar />
          </div>
          <button className="w-20 p-2 text-xs text-green-400 border-2 rounded-sm border-green-400 hover:text-white hover:bg-green-400 outline-none">
            Send Invite
          </button>
        </div>
        <div className="border-b">
          <div className="px-5 my-2 text-[14px] cursor-pointer text-gray-400 hover:bg-gray-100 flex justify-between items-center ">
            <div className="flex">
              <img src={user} alt="folder user" className="mr-2" />
              <div className="flex flex-col">
                <p className="text-gray-700">Damilola Emmanuel</p>
                <p>damilolaemma02@hotmail.com</p>
              </div>
            </div>
            <div className="self-end text-gray-700 text-xs">Admin</div>
          </div>

          <div className="px-5 my-2 text-[14px] cursor-pointer text-gray-400 hover:bg-gray-100 flex justify-between items-center ">
            <div className="flex">
              <img src={user} alt="folder user" className="mr-2" />
              <div className="flex flex-col">
                <p className="text-gray-700">Damilola Emmanuel</p>
                <p>damilolaemma02@hotmail.com</p>
              </div>
            </div>
            <div className="self-end text-gray-700 flex text-xs">
              <p>Can Edit</p>
              <img src={down} alt="icon" className="mx-1" />
              <img src={save} alt="icon" />
            </div>
          </div>

          <div className="px-5 my-2 text-[14px] cursor-pointer text-gray-400 hover:bg-gray-100 flex justify-between items-center ">
            <div className="flex">
              <img src={user} alt="folder user" className="mr-2" />
              <div className="flex flex-col">
                <p className="text-gray-700">Damilola Emmanuel</p>
                <p>damilolaemma02@hotmail.com</p>
              </div>
            </div>
            <div className="self-end">
              <Dropdown />
            </div>
          </div>

          <div className="px-5 my-2 text-[14px] cursor-pointer text-gray-400 hover:bg-gray-100 flex justify-between items-center ">
            <div className="flex">
              <img src={user} alt="folder user" className="mr-2" />
              <div className="flex flex-col">
                <p className="text-gray-700">Damilola Emmanuel</p>
                <p>damilolaemma02@hotmail.com</p>
              </div>
            </div>
            <div className="self-end text-gray-700 flex text-xs">
              <p className="mr-1 text-xs">Can Edit</p>
              <img src={down} alt="icon" />
            </div>
          </div>

          <div className="px-5 my-2 text-[14px] cursor-pointer text-gray-400 hover:bg-gray-100 flex justify-between items-center ">
            <div className="flex">
              <img src={user} alt="folder user" className="mr-2" />
              <div className="flex flex-col">
                <p className="text-gray-700">Damilola Emmanuel</p>
                <p>damilolaemma02@hotmail.com</p>
              </div>
            </div>
            <div className="self-end text-gray-700 flex text-xs">
              <p className="mr-1">Can Edit</p>
              <img src={down} alt="icon" />
            </div>
          </div>
        </div>
        <div className="w-full px-5 py-2 text-green-400 items-center ">
          <a href={"#"} className="flex">
            <p className="mr-1">Copy link </p>
            <img src={linkIcon} alt="link icon" />
          </a>
        </div>
      </div>
    )
  );
};

export default FolderOptions;
