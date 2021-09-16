import React, { Link } from 'react';
import axios from 'axios';

const index = ({ res }) => {
  console.log(res);

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
              <img src="/Icons/pdffile.svg" alt="" className="" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className="w-full truncate text-[14px]">
                Integration.pdf
              </span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-0 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className="" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className=" text-[14px]">Text.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-0 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
              <img src="/Icons/pdffile.svg" alt="" className="" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className=" text-[14px]">Adobe.pdf</span>
              <span className="text-gray-400  text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-0 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className="" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className=" text-[14px]">Text.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-0 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className="" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className=" text-[14px]">Text.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-0 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className="" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className=" text-[14px]">Text.xls</span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-0 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-blue-100 rounded-md">
              <img src="/Icons/docfile.svg" alt="" className="" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
              <span className="w-full truncate text-[14px]">
                Integration.pdf
              </span>
              <span className="text-gray-400 text-[13px]">5 days ago</span>
            </div>
            <div className="options self-start mx-3">
              <img src="/Icons/more-vertical/active.svg" alt="" />
            </div>
          </div>
          <div className="file flex items-center mr-0 my-5">
            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
              <img src="/Icons/xlsfile.svg" alt="" className="" />
            </div>
            <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
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

export async function getStaticProps() {
  let urlLink;
  console.log(process.env.NODE_ENV)
  process.env.NODE_ENV === 'production' ?
    urlLink = 'http://companyfiles.zuri.chat/api/v1/files/all'
    :
    urlLink = 'http://localhost:5500/api/v1/files/all';
  const res = await axios.get('http://localhost:5500/api/v1/files/all');
  console.log(res)
  return {
    props: {
      res
    }
  }
}

export default index;
