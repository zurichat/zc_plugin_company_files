import React from "react";
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
    <div className="w-full p-10 ">
      <h2 className=" mb-8 text-xl ">Folders</h2>
      <div className="flex flex-wrap justify-between">
        {data.data.slice(0, 4).map((folder) => (
          <FolderComponent key={folder.id} folder={folder} />
        ))}
      </div>
    </div>
  );
};

export default index;
