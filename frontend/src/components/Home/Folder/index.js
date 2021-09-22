import React, { useState } from "react";
import folderYellow from "../../../../public/Icons/folder/yellow.svg";
import options from "../../../../public/Icons/more-vertical/active.svg";
import user2 from "../../../../public/Icons/folder-user2.svg";
import user from "../../../../public/Icons/folder-user.svg";
import addUser from "../../../../public/Icons/plus/active.svg";
import ContextMenu from "../Files/ContextMenu";

const index = () => {
  const [revealContext, setRevealContext] = useState(false);
  const handleContext = (e) => {
    e.preventDefault();
    setRevealContext(!revealContext);
    console.log("I was clicked", revealContext);
  };
  return (
    <div className="w-full p-10 relative">
      <h2 className=" mb-8 text-[20px] text-gray-700">Folders</h2>
      <div className="flex flex-wrap justify-between">
        <div className="folderCard w-[235px] mb-10 px-6 py-7 flex flex-col bg-white rounded-md shadow-md">
          <div className="card flex justify-between mb-6">
            <div className="icons">
              <img src={folderYellow} alt="" />
            </div>
            {revealContext ? (
              <ContextMenu />
            ) : (
              <div className="icons cursor-pointer">
                <img src={options} alt="" onContextMenu={handleContext} />
              </div>
            )}
          </div>
          <div className="card text-sm flex justify-between items-center text-[13px]">
            <div className="w-32">
              <span className="block truncate">Design Files</span>
              <span className="block text-gray-400">140 people</span>
            </div>
            <div className="icons flex">
              <div className="avi w-6 h-6 -m-1 rounded-full object-fill">
                <img src={user} alt="folder user" />
              </div>
              <div className="avi w-6 h-6 -m-1 rounded-full object-fill">
                <img src={user2} alt="" />
              </div>
              <div className="avi w-6 h-6 -m-1 border-2 border-gray-300 border-dashed bg-white rounded-full flex justify-around">
                <img src={addUser} alt="add user" />
              </div>
            </div>
          </div>
        </div>
        <div className="folderCard w-[235px] mb-10 px-6 py-7 flex flex-col bg-white rounded-md shadow-md">
          <div className="card flex justify-between mb-6">
            <div className="icons">
              <img src={folderYellow} alt="" />
            </div>
            {revealContext ? (
              <ContextMenu />
            ) : (
              <div className="icons cursor-pointer">
                <img src={options} alt="" onContextMenu={handleContext} />
              </div>
            )}
          </div>
          <div className="card text-sm flex justify-between items-center text-[13px]">
            <div className="w-32">
              <span className="block truncate">Programming Document</span>
              <span className="block text-gray-400">140 people</span>
            </div>
            <div className="icons flex">
              <div className="avi w-6 h-6 -m-1 rounded-full object-fill">
                <img src={user} alt="folder user" />
              </div>
              <div className="avi w-6 h-6 -m-1 rounded-full object-fill">
                <img src={user2} alt="" />
              </div>
              <div className="avi w-6 h-6 -m-1 border-2 border-gray-300 border-dashed bg-white rounded-full flex justify-around">
                <img src={addUser} alt="add user" />
              </div>
            </div>
          </div>
        </div>
        <div className="folderCard w-[235px] mb-10 px-6 py-7 flex flex-col bg-white rounded-md shadow-md">
          <div className="card flex justify-between mb-6">
            <div className="icons">
              <img src={folderYellow} alt="" />
            </div>
            {revealContext ? (
              <ContextMenu />
            ) : (
              <div className="icons cursor-pointer">
                <img src={options} alt="" onContextMenu={handleContext} />
              </div>
            )}
          </div>
          <div className="card text-sm flex justify-between items-center text-[13px]">
            <div className="w-32">
              <span className="block truncate">My Favorites</span>
              <span className="block text-gray-400">140 people</span>
            </div>
            <div className="icons flex">
              <div className="avi w-6 h-6 -m-1 rounded-full object-fill">
                <img src={user} alt="folder user" />
              </div>
              <div className="avi w-6 h-6 -m-1 rounded-full object-fill">
                <img src={user2} alt="" />
              </div>
              <div className="avi w-6 h-6 -m-1 border-2 border-gray-300 border-dashed bg-white rounded-full flex justify-around">
                <img src={addUser} alt="add user" />
              </div>
            </div>
          </div>
        </div>
        <div className="folderCard w-[235px] mb-10 px-6 py-7 flex flex-col bg-white rounded-md shadow-md">
          <div className="card flex justify-between mb-6">
            <div className="icons">
              <img src={folderYellow} alt="" />
            </div>
            {revealContext ? (
              <ContextMenu />
            ) : (
              <div className="icons cursor-pointer">
                <img src={options} alt="" onContextMenu={handleContext} />
              </div>
            )}
          </div>
          <div className="card text-sm flex justify-between items-center text-[13px]">
            <div className="w-32">
              <span className="block truncate">Media Folder</span>
              <span className="block text-gray-400">140 people</span>
            </div>
            <div className="icons flex">
              <div className="avi w-6 h-6 -m-1 rounded-full object-fill">
                <img src={user} alt="folder user" />
              </div>
              <div className="avi w-6 h-6 -m-1 rounded-full object-fill">
                <img src={user2} alt="" />
              </div>
              <div className="avi w-6 h-6 -m-1 border-2 border-gray-300 border-dashed bg-white rounded-full flex justify-around">
                <img src={addUser} alt="add user" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
