import React from "react";
import Loader from 'react-loader-spinner';
import { Link } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";
import FolderComponent from "./Folder";

async function fetcher(url) {
  const res = await axios.get(url);
  return res.data;
}

const API_URL = window.location.hostname.includes('localhost') || window.location.hostname.includes('127.0.0.1')
  ? 'http://127.0.0.1:5500/api/v1'
  : 'https://companyfiles.zuri.chat/api/v1';

const index = () => {
  const { data, error } = useSWR(`${API_URL}/folders/all`, fetcher);

  if (error)
    return (
      <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center tw-text-red-600 py-4">
        failed to load
      </div>
    );

  if (!data)
    return (
<<<<<<< HEAD
      <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center py-4">
        loading...
=======
      <div className="w-full py-10 ">
        <div className="w-full flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Folders</h2>
          <Link to="/folders" className="text-green-500 text-lg font-semibold hover:text-green-600">
            View All
          </Link>
        </div>
        <div className='h-48 flex items-center justify-center'>
          <Loader type='ThreeDots' color='#00B87C' height={100} width={100} visible='true' />
        </div>
>>>>>>> 4c8c96fb8f581154fe903895a050c2dd30c2f698
      </div>
    );

  return (
<<<<<<< HEAD
    <div className="tw-w-full tw-py-10 ">
      <div className="tw-w-full tw-flex tw-justify-between tw-items-center tw-mb-4">
        <h2 className="tw-text-lg tw-font-semibold tw-text-gray-900">Folders</h2>
        <Link
          to="/all-folders"
          className="tw-text-green-500 tw-text-lg tw-font-semibold hover:tw-text-green-600"
        >
=======
    <div className="w-full py-10 ">
      <div className="w-full flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Folders</h2>
        <Link to="/folders" className="text-green-500 text-lg font-semibold hover:text-green-600">
>>>>>>> 4c8c96fb8f581154fe903895a050c2dd30c2f698
          View All
        </Link>
      </div>
      <div className="tw-flex tw-flex-wrap tw-justify-between">
        {data.data.length ? (
          data.data
            .slice(0, 4)
            .map((folder) => (
              <FolderComponent key={folder.folderId} folder={folder} />
            ))
        ) : (
          <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center">
            No Folders
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
