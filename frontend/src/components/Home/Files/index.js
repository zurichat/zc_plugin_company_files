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
      <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center tw-text-red-600 tw-py-4">
        failed to load...
      </div>
    );
  if (!data)
    return (
      <div className="tw-w-full tw-py-10">
        <div className="tw-w-full tw-flex tw-justify-between tw-items-center">
          <h2 className="tw-text-lg tw-font-semibold tw-text-gray-900">Files</h2>
          <Link to="/allFiles" className="tw-text-green-500 tw-text-lg tw-font-semibold tw-hover:text-green-600">
            View All
          </Link>
        </div>
        <div className='tw-h-48 tw-flex tw-items-center tw-justify-center'>
          <Loader type='ThreeDots' color='#00B87C' height={100} width={100} visible='true' />
        </div>
      </div>
    );

  return (
    <div className="tw-w-full tw-py-10">
      <div className="tw-w-full tw-flex tw-justify-between tw-items-center">
        <h2 className="tw-text-lg tw-font-semibold tw-text-gray-900">Files</h2>
        <Link
          to="/allFiles"
          className="tw-text-green-500 tw-text-lg tw-font-semibold tw-hover:text-green-600"
        >
          View All
        </Link>
      </div>

      <div className="project-box-wrapper">
        <div className="project-box tw-w-full tw-py-5 tw-flex tw-flex-wrap tw-justify-between tw--mx-2">
          {data.data.length > 0 ? (
            data.data.slice(0, 15).map((file) => {
              return new RegExp("\\b" + "image" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Image file={file} />
                </div>
              ) : new RegExp("\\b" + "pdf" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Pdf file={file} />
                </div>
              ) : new RegExp("\\b" + "zip" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Zip file={file} />
                </div>
              ) : new RegExp("\\b" + "excel" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Excel file={file} />
                </div>
              ) : new RegExp("\\b" + "word" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Document file={file} />
                </div>
              ) : new RegExp("\\b" + "powerpoint" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Powerpoint file={file} />
                </div>
              ) : new RegExp("\\b" + "audio" + "\\b").test(file.type) ? (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Audio file={file} />
                </div>
              ) : (
                <div
                  key={file._id}
                  className="file tw-flex tw-items-center tw-mr-0 tw-my-5 tw-relative"
                >
                  <Video file={file} />
                </div>
              );
            })
          ) : (
            <div className="tw-text-3xl tw-flex tw-items-center tw-justify-center">
              No Files
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;