import React from "react";
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
// const API_URL = window.location.hostname.includes("zuri.chat")
//   ? "https://companyfiles.zuri.chat/api/v1"
//   : "http://localhost:5500/api/v1";
  
// const index = () => {
//   const { data, error } = useSWR(
//     "https://companyfiles.zuri.chat/api/v1/files/nonDeletedFiles",
//     fetcher
//   );

  const API_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:5500/api/v1"
  : "https://companyfiles.zuri.chat/api/v1";
const index = () => {
  const { data, error } = useSWR(
    `${API_URL}/files/NonDeletedFiles`,
    fetcher
  );

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
    <div className="w-full px-10 flex-auto">
      <div className="top flex justify-between">
        <h2 className="text-2xl md:text-[20px]">Files</h2>

        <a href="/" className="text-gray-400 hover:text-green-400">
          View All
        </a>
      </div>

      <div className="project-box-wrapper">
        <div className="project-box w-full py-5 flex flex-wrap">
          {data.data.slice(0, 30).map((file, index) => {
            return new RegExp("\\b" + "image" + "\\b").test(file.type) ? (
              <div key={file._id} className="file flex items-center mr-0 my-5">
                <Image file={file} />
              </div>
            ) : new RegExp("\\b" + "pdf" + "\\b").test(file.type) ? (
              <div key={file._id} className="file flex items-center mr-0 my-5">
                <Pdf file={file} />
              </div>
            ) : new RegExp("\\b" + "zip" + "\\b").test(file.type) ? (
              <div key={file._id} className="file flex items-center mr-0 my-5">
                <Zip file={file} />
              </div>
            ) : new RegExp("\\b" + "excel" + "\\b").test(file.type) ? (
              <div key={file._id} className="file flex items-center mr-0 my-5">
                <Excel file={file} />
              </div>
            ) : new RegExp("\\b" + "word" + "\\b").test(file.type) ? (
              <div key={file._id} className="file flex items-center mr-0 my-5">
                <Document file={file} />
              </div>
            ) : new RegExp("\\b" + "powerpoint" + "\\b").test(file.type) ? (
              <div key={file._id} className="file flex items-center mr-0 my-5">
                <Powerpoint file={file} />
              </div>
            ) : new RegExp("\\b" + "audio" + "\\b").test(file.type) ? (
              <div key={file._id} className="file flex items-center mr-0 my-5">
                <Audio file={file} />
              </div>
            ) : (
              <div key={file._id} className="file flex items-center mr-0 my-5">
                <Video file={file} />
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default index;
