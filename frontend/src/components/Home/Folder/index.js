import React from "react";

const index = () => {
  return (
    <div className="w-full p-10 ">
      <h2 className=" mb-8 text-[20px] text-gray-700">Folders</h2>
      <div className="flex flex-wrap justify-between">
        <div className="folderCard w-[235px] mb-10 px-6 py-7 flex flex-col bg-white rounded-md shadow-md">
          <div className="card flex justify-between mb-6">
            <div className="icons">
              <img src="/Icons/folder/yellow.svg" alt="" />
            </div>
            <div className="icons">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="card text-sm flex justify-between items-center text-[13px]">
            <div className="w-[140px]">
              <span className="block truncate">Design Files</span>
              <span className="block text-gray-400">140 people</span>
            </div>
            <div className="icons flex">
              <div className="avi w-[23px] h-[23px] -m-1 rounded-full object-fill z-10">
                <img src="/Icons/folder-user.svg" alt="folder user" />
              </div>
              <div className="avi w-[23px] h-[23px] -m-1 rounded-full object-fill z-20">
                <img src="/Icons/folder-user2.svg" alt="" />
              </div>
              <div className="avi w-[23px] h-[23px] -m-1 border-2 border-gray-300 border-dashed bg-white rounded-full flex justify-around z-30">
                <img src="/Icons/plus/active.svg" alt="add user" />
              </div>
            </div>
          </div>
        </div>
        <div className="folderCard w-[235px] mb-10 px-6 py-7 flex flex-col bg-white rounded-md shadow-md">
          <div className="card flex justify-between mb-6">
            <div className="icons">
              <img src="/Icons/folder/yellow.svg" alt="" />
            </div>
            <div className="icons">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="card text-sm flex justify-between items-center text-[13px]">
            <div className="w-[140px]">
              <span className="block truncate">Programming Document</span>
              <span className="block text-gray-400">140 people</span>
            </div>
            <div className="icons flex">
              <div className="avi w-[23px] h-[23px] -m-1 rounded-full object-fill z-10">
                <img src="/Icons/folder-user.svg" alt="folder user" />
              </div>
              <div className="avi w-[23px] h-[23px] -m-1 rounded-full object-fill z-20">
                <img src="/Icons/folder-user2.svg" alt="" />
              </div>
              <div className="avi w-[23px] h-[23px] -m-1 border-2 border-gray-300 border-dashed bg-white rounded-full flex justify-around z-30">
                <img src="/Icons/plus/active.svg" alt="add user" />
              </div>
            </div>
          </div>
        </div>
        <div className="folderCard w-[235px] mb-10 px-6 py-7 flex flex-col bg-white rounded-md shadow-md">
          <div className="card flex justify-between mb-6">
            <div className="icons">
              <img src="/Icons/folder/yellow.svg" alt="" />
            </div>
            <div className="icons">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="card text-sm flex justify-between items-center text-[13px]">
            <div className="w-[140px]">
              <span className="block truncate">My Favorites</span>
              <span className="block text-gray-400">140 people</span>
            </div>
            <div className="icons flex">
              <div className="avi w-[23px] h-[23px] -m-1 rounded-full object-fill z-10">
                <img src="/Icons/folder-user.svg" alt="folder user" />
              </div>
              <div className="avi w-[23px] h-[23px] -m-1 rounded-full object-fill z-20">
                <img src="/Icons/folder-user2.svg" alt="" />
              </div>
              <div className="avi w-[23px] h-[23px] -m-1 border-2 border-gray-300 border-dashed bg-white rounded-full flex justify-around z-30">
                <img src="/Icons/plus/active.svg" alt="add user" />
              </div>
            </div>
          </div>
        </div>
        <div className="folderCard w-[235px] mb-10 px-6 py-7 flex flex-col bg-white rounded-md shadow-md">
          <div className="card flex justify-between mb-6">
            <div className="icons">
              <img src="/Icons/folder/yellow.svg" alt="" />
            </div>
            <div className="icons">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="card text-sm flex justify-between items-center text-[13px]">
            <div className="w-[140px]">
              <span className="block truncate">Media Folder</span>
              <span className="block text-gray-400">140 people</span>
            </div>
            <div className="icons flex">
              <div className="avi w-[23px] h-[23px] -m-1 rounded-full object-fill z-10">
                <img src="/Icons/folder-user.svg" alt="folder user" />
              </div>
              <div className="avi w-[23px] h-[23px] -m-1 rounded-full object-fill z-20">
                <img src="/Icons/folder-user2.svg" alt="" />
              </div>
              <div className="avi w-[23px] h-[23px] -m-1 border-2 border-gray-300 border-dashed bg-white rounded-full flex justify-around z-30">
                <img src="/Icons/plus/active.svg" alt="add user" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
