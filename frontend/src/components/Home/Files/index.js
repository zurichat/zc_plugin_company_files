import React, { Link } from "react";

const index = () => {
  return (
    <div className="w-full px-10">
      <div className="top flex justify-between">
        <h2 className="text-2xl md:text-[20px]">Files</h2>

        {/* <Link to="/" className="text-gray-400 hover:text-green-400">
          <span>View All</span>
        </Link> */}
      </div>

      <div className="project-box-wrapper">
        <div className="project-box w-full py-5 flex flex-wrap justify-between">
          <div className="file flex items-center mr-3 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-blue-100 rounded-md">
              <img src="/Icons/docfile.svg" alt="" className="" />
            </div>
            <div className="fileInfo w-40 sm:w-30 md:w-36 lg:w-40  flex flex-col mx-3">
              <span className="w-full truncate text-[14px]">Excl.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-3 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className="" />
            </div>
            <div className="fileInfo w-40 sm:w-30 md:w-36 lg:w-40  flex flex-col mx-3">
              <span className="w-full truncate text-[14px]">Excl.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-3 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
              <img src="/Icons/pdffile.svg" alt="" className="" />
            </div>
            <div className="fileInfo w-40 sm:w-30 md:w-36 lg:w-40  flex flex-col mx-3">
              <span className="w-full truncate text-[14px]">
                Integration.pdf
              </span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-3 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className="" />
            </div>
            <div className="fileInfo w-40 sm:w-30 md:w-36 lg:w-40  flex flex-col mx-3">
              <span className=" text-[14px]">Text.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-3 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
              <img src="/Icons/pdffile.svg" alt="" className="" />
            </div>
            <div className="fileInfo w-40 sm:w-30 md:w-36 lg:w-40  flex flex-col mx-3">
              <span className=" text-[14px]">Adobe.pdf</span>
              <span className="text-gray-400  text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-3 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className="" />
            </div>
            <div className="fileInfo w-40 sm:w-30 md:w-36 lg:w-40  flex flex-col mx-3">
              <span className=" text-[14px]">Text.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-3 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className="" />
            </div>
            <div className="fileInfo w-40 sm:w-30 md:w-36 lg:w-40  flex flex-col mx-3">
              <span className=" text-[14px]">Text.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-3 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className="" />
            </div>
            <div className="fileInfo w-40 sm:w-30 md:w-36 lg:w-40  flex flex-col mx-3">
              <span className=" text-[14px]">Text.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-3 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-blue-100 rounded-md">
              <img src="/Icons/docfile.svg" alt="" className="" />
            </div>
            <div className="fileInfo w-40 sm:w-30 md:w-36 lg:w-40  flex flex-col mx-3">
              <span className="w-full truncate text-[14px]">
                Integration.pdf
              </span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-3 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className="" />
            </div>
            <div className="fileInfo w-40 sm:w-30 md:w-36 lg:w-40  flex flex-col mx-3">
              <span className="w-full truncate text-[14px]">Excl.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
