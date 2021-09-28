import React from "react";
import Loader from 'react-loader-spinner';
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "../../Subcomponents/Image";
import Pdf from "../../Subcomponents/Pdf";
import Zip from "../../Subcomponents/Zip";
import Excel from "../../Subcomponents/Excel";
import Video from "../../Subcomponents/Video";
import Powerpoint from "../../Subcomponents/Powerpoint";
import Document from "../../Subcomponents/Document";
import Audio from "../../Subcomponents//audio";
dayjs.extend(relativeTime);

async function fetcher(url) {
  const res = await axios.get(url);
  return res.data;
}

const API_URL = window.location.hostname.includes('localhost') || window.location.hostname.includes('127.0.0.1')
  ? 'http://127.0.0.1:5500/api/v1'
  : 'https://companyfiles.zuri.chat/api/v1';

const index = () => {
  const { data, error } = useSWR(`${API_URL}/files/all`, fetcher);

  if (error)
    return (
      <div className="text-3xl flex items-center justify-center text-red-600">
        failed to load
      </div>
    );
  if (!data)
    return (
      <div className="w-full py-10">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Files</h2>
          <Link to="/allfiles" className="text-green-500 text-lg font-semibold hover:text-green-600">
            View All
          </Link>
        </div>
        <div className='h-48 flex items-center justify-center'>
          <Loader type='ThreeDots' color='#00B87C' height={100} width={100} visible='true' />
        </div>
      </div>
    );

  return (
    <div className="w-full py-10">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Files</h2>
        <Link
          to="/allfiles"
          className="text-green-500 text-lg font-semibold hover:text-green-600"
        >
          View All
        </Link>
      </div>

      <div className="project-box-wrapper">
        <div className="project-box w-full py-5 flex flex-wrap justify-between -mx-2">
          {data.data.length > 0 ? (
            data.data.slice(0, 15).map((file) => {
              return new RegExp("\\b" + "image" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file flex items-center mr-0 my-5 relative"
                >
                  <Image file={file} />
                </div>
              ) : new RegExp("\\b" + "pdf" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file flex items-center mr-0 my-5 relative"
                >
                  <Pdf file={file} />
                </div>
              ) : new RegExp("\\b" + "zip" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file flex items-center mr-0 my-5 relative"
                >
                  <Zip file={file} />
                </div>
              ) : new RegExp("\\b" + "excel" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file flex items-center mr-0 my-5 relative"
                >
                  <Excel file={file} />
                </div>
              ) : new RegExp("\\b" + "word" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file flex items-center mr-0 my-5 relative"
                >
                  <Document file={file} />
                </div>
              ) : new RegExp("\\b" + "powerpoint" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file flex items-center mr-0 my-5 relative"
                >
                  <Powerpoint file={file} />
                </div>
              ) : new RegExp("\\b" + "audio" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file flex items-center mr-0 my-5 relative"
                >
                  <Audio file={file} />
                </div>
              ) : (
                <div
                  key={file._id}
                  className="file flex items-center mr-0 my-5 relative"
                >
                  <Video file={file} />
                </div>
              );
            })
          ) : (
            <div className="text-3xl flex items-center justify-center">
              No Files
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
