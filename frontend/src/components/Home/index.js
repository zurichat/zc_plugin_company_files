import React from "react";
import RecentlyViewed from "./RecentlyViewed";
import Folder from "./Folder";
import Files from "./Files";
const Index = () => {
  return (
    <div>
      <RecentlyViewed />
      <Folder />
      <Files />
    </div>
  );
};

export default Index;
