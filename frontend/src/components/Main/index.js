import ComponentToTest from "../ComponentToTest";
import React from "react";
import SearchBar from "../SearchBar";

const Main = () => {
  return (
    <div className="bg-gray-50 h-screen flex flex-1 flex-col items-center ">
      <SearchBar />
      <div className="block w-full h-11 bg-primary"></div>
      <ComponentToTest />
    </div>
  );
};

export default Main;
