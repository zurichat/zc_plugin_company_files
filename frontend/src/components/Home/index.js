import React from "react";
import RecentlyViewed from "./RecentlyViewed";
import Folder from "./Folder";
import Files from "./Files";
import SelectFileModal from "Components/FileUpload/SelectFileModal";
const Index = () => {
  return (
    <div className="relative">
      <RecentlyViewed />
      <Folder />
      <Files />
      <SelectFileModal />
    </div>
  );
};

export default Index;
