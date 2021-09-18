import React from "react";
import Link from "next/link";
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
dayjs.extend(relativeTime);

async function fetcher(url) {
  const res = await axios.get(url);
  return res.data;
}

const index = () => {
  const { data, error } = useSWR(
    "http://localhost:5500/api/v1/files/NonDeletedFiles",
    fetcher
  );

  if (error) return <div className="text-3xl flex items-center justify-center text-red-600">failed to load</div>;
  if (!data) return <div className="text-3xl flex items-center justify-center">loading...</div>;
  console.log(data);

  return (
    <div className="w-full px-10 flex-auto">
      <div className="top flex justify-between">
        <h2 className="text-2xl md:text-[20px]">Files</h2>

        <Link href="/">
          <a className="text-gray-400 hover:text-green-400">View All</a>
        </Link>
      </div>

      <div className="project-box-wrapper">
        <div className="project-box w-full py-5 flex flex-wrap justify-between">
          {data.data.slice(0, 10).map((file, index) => {
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
            ) : (
              <div key={file._id} className="file flex items-center mr-0 my-5">
                <Video file={file} />
              </div>
            );
          })}
          {/* <div className="file w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex items-center mr-3 my-5">
            <div className="fileIcon w-[56px] h-[56px] flex justify-around  bg-blue-100 rounded-md">
              <img
                src="/Icons/docfile.svg"
                alt=""
                className="w-[24px] h-[24px] m-auto"
              />
            </div>
            <div className="fileInfo w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className="w-full truncate text-[14px]">Excl.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex items-center mr-3 my-5">
            <div className="fileIcon w-[56px] h-[56px] flex justify-around  bg-green-100 rounded-md">
              <img
                src="/Icons/xlsfile.svg"
                alt=""
                className="w-[24px] h-[24px] m-auto"
              />
            </div>
            <div className="fileInfo w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className="w-full truncate text-[14px]">Excl.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex items-center mr-3 my-5">
            <div className="fileIcon w-[56px] h-[56px] flex justify-around  bg-green-100 rounded-md">
              <img
                src="/Icons/xlsfile.svg"
                alt=""
                className="w-[24px] h-[24px] m-auto"
              />
            </div>
            <div className="fileInfo w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className="w-full truncate text-[14px]">Excl.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex items-center mr-3 my-5">
            <div className="fileIcon w-[56px] h-[56px] flex justify-around  bg-green-100 rounded-md">
              <img
                src="/Icons/xlsfile.svg"
                alt=""
                className="w-[24px] h-[24px] m-auto"
              />
            </div>
            <div className="fileInfo w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className="w-full truncate text-[14px]">Excl.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div> */}
          <div className="file flex items-center mr-0 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
              <img src="/Icons/pdffile.svg" alt="" className=" w-1/2" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className="w-full truncate text-[14px]">
                Integration.pdf
              </span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" className=" w-1/2" />
            </div>
          </div>
          <div className="file flex items-center mr-0 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className="" className=" w-1/2" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className=" text-[14px]">Text.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" className=" w-1/2" />
            </div>
          </div>
          <div className="file flex items-center mr-0 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
              <img src="/Icons/pdffile.svg" alt="" className="" className=" w-1/2" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className=" text-[14px]">Adobe.pdf</span>
              <span className="text-gray-400  text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" className=" w-1/2" />
            </div>
          </div>
          <div className="file flex items-center mr-0 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className=" w-1/2" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className=" text-[14px]">Text.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" className=" w-1/2" />
            </div>
          </div>
          <div className="file flex items-center mr-0 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className=" w-1/2" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className=" text-[14px]">Text.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" className=" w-1/2" />
            </div>
          </div>
          <div className="file flex items-center mr-0 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className=" w-1/2" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className=" text-[14px]">Text.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" className=" w-1/2" />
            </div>
          </div>
          <div className="file flex items-center mr-0 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-blue-100 rounded-md">
              <img src="/Icons/docfile.svg" alt="" className=" w-1/2" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className="w-full truncate text-[14px]">
                Integration.pdf
              </span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" className=" w-1/2" />
            </div>
          </div>
          <div className="file flex items-center mr-0 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className=" w-1/2" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className="w-full truncate text-[14px]">Excl.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" className=" w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
