import React from "react";
// import { Link } from 'react-router-dom'
// import folderYellow from "../../../../public/Icons/folder/yellow.svg";
// import options from "../../../../public/Icons/more-vertical/active.svg";
// import user2 from "../../../../public/Icons/folder-user2.svg";
// import user from "../../../../public/Icons/folder-user.svg";
// import addUser from "../../../../public/Icons/plus/active.svg";
// import folderUsers from "../../../../public/Icons/folderUsers.png";

import {Link} from 'react-router-dom'

import useSWR from "swr";
import axios from "axios";
import FolderComponent from "./Folder";

async function fetcher(url) {
  const res = await axios.get(url);
  return res.data;
}

const API_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:5500/api/v1"
  : "https://companyfiles.zuri.chat/api/v1";

const index = () => {
  const { data, error } = useSWR(`${API_URL}/folders/all`, fetcher);

  if (error)
    return (
      <div className="text-3xl flex items-center justify-center text-red-600">
        failed to load
      </div>
    );

  if (!data)
    return (
      <div className="text-3xl flex items-center justify-center">
        loading...
      </div>
    );

  return (
    <div className="w-full py-10 ">
      <div className="w-full flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Folders</h2>
        <Link to="./" className="text-green-500 text-lg font-semibold hover:text-green-600" >View All</Link>
      </div>
      <div className="flex flex-wrap justify-between">
        {data.data.length ? (
          data.data
            .slice(0, 4)
            .map((folder) => (
              <FolderComponent key={folder.folderId} folder={folder} />
            ))
        ) : (
          <div className="text-3xl flex items-center justify-center">
            No Folders
          </div>
        )}

        
            </div>
        </div>
  );
};

export default index;
