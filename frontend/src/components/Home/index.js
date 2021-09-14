import React, { useState } from "react";
import RecentlyViewed from "./RecentlyViewed";
import Folder from "./Folder";
import Files from "./Files";
import SelectFileModal from "Components/FileUpload/SelectFileModal";
const Index = () => {
  const [upload, setUpload] = useState(false);

  return (
    <div className="z-10">
      <RecentlyViewed />
      <Folder />
      <Files />
      {upload && <SelectFileModal className="" upload={upload} />}
    </div>
  );
};

export default Index;
