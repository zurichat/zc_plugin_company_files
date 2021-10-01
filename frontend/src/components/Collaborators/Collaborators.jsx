import React from "react";
import CollaNavigation from "./Navigation/CollaNavigation";
import FoldersGrid from "./FoldersGrid/FoldersGrid";
import FilesGrid from "./FilesGrid/FilesGrid";
import RecentlyViewed from "./RecentlyViewed/RecentlyViewed";

function Collaborators() {
  return (
    <div className="tw-w-full tw-h-screen collaborator tw-bg-white">
      <CollaNavigation />
      <RecentlyViewed />
      <FoldersGrid />
      <FilesGrid />

      <style jsx>
        {`
          .collaborator {
            overflow-x: hidden;
            position: relative;
          }
        `}
      </style>
    </div>
  );
}

export default Collaborators;
