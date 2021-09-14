import React from "react";
import RecentlyViewed from "./RecentlyViewed";
import Folder from "./Folder";
import Files from "./Files";
import ShortCut from "./ShortCut";
const Index = () => {
  return (
    <div>
      <ShortCut />
      <RecentlyViewed />
      <Folder />
      <Files />
    </div>
  );
};

export default Index;
