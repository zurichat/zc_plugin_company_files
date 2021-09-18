import React from "react";
import Image from "next/image";

function index() {
  return (
    <div className="bg-backGround h-full w-full flex-auto flex flex-col justify-between pb-6">
      <nav className="h-10 w-full flex flex-row justify-between py-3 px-3 md:px-5 lg:px-7">
        <div className="flex">
          <div>
            <img
              src="/Icons/arrow-left/active.svg"
              alt="arrow-left"
              className="mr-5"
            />
          </div>
          <div>
            <div className="flex flex-row">
              <img
                src="/Icons/image/active.svg"
                alt="image-icon"
                className="mr-2"
              />
              <p className="text-white">file name.jpg</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src="/Icons/download/active.svg" alt="download-icon" />
          </div>
          <div>
            <img
              src="/Icons/more-vertical/active.svg"
              alt="more-icon"
              className="ml-2"
            />
          </div>
        </div>
      </nav>
      <div className="flex flex-col justify-between items-center w-full">
        <div className="flex justify-between w-full md:px-6 px-2">
          <div className="flex self-center">
            <img
              src="/Icons/arrow-left/active.svg"
              alt="left-arrow"
              className="bg-black rounded-full md:h-14 md:w-14 w-5 h-5 p-1 md:p-3"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1580746342105-d49a38cbccb4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
              alt="image"
              className="md:min-w-0 min-w-full w-60 md:w-10/12"
            />
          </div>
          <div className="flex self-center">
            <img
              src="/Icons/arrow-right/active.svg"
              alt="right-arrow"
              className="bg-black rounded-full md:h-14 md:w-14 w-5 h-5 p-1 md:p-3"
            />
          </div>
        </div>
        <div className="bg-black py-3 px-7 flex justify-between mt-5">
          <img src="/Icons/zoom-in/active.svg" alt="zoom-in" className="md:w-10 w-7 mr-4" />
          <img src="/Icons/zoom-out/active.svg" alt="zoom-out" className="md:w-10 w-7" />
        </div>
      </div>
    </div>
  );
}

export default index;
