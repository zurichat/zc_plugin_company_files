import React from "react";

import PhotoImage from "../CollabImages/photo-svg.svg";
import VideoImage from "../CollabImages/video-svg.svg";
import DocumentImage from "../CollabImages/document-svg.svg";
import CompressedImage from "../CollabImages/compressed-svg.svg";

const FilesGrid = () => {
  return (
    <div className="files_grid flex justify-between">
      <div>
        <div className="fileview flex fl_photo">
          <img src={PhotoImage} alt="Picture" />
        </div>
        <h3 className="file_heading">Images</h3>
        <p className="file_info">Viewed 20 Jul 2020</p>
      </div>

      <div>
        <div className="fileview flex fl_video">
          <img src={VideoImage} alt="Video" />
        </div>
        <h3 className="file_heading">Videos</h3>
        <p className="file_info">Viewed 20 Jul 2020</p>
      </div>

      <div>
        <div className="fileview flex fl_document">
          <img src={DocumentImage} alt="Document" />
        </div>
        <h3 className="file_heading">Documents</h3>
        <p className="file_info">Viewed 20 Jul 2020</p>
      </div>

      <div>
        <div className="fileview flex fl_compressed">
          <img src={CompressedImage} alt="Compressed" />
        </div>
        <h3 className="file_heading">Compressed</h3>
        <p className="file_info">Viewed 20 Jul 2020</p>
      </div>

      <style jsx>
        {`
          .files_grid {
            width: 96%;
            margin: 10px auto;
          }

          .fl_photo,
          .fl_video,
          .fl_document,
          .fl_compressed {
            justify-content: center;
            border-radius: 9px;
            border: 1px solid #f7f7f7;
            width: 233.39px;
            height: 214.82px;
          }

          .fl_photo {
            background: #e3eeff;
          }

          .fl_photo img {
            width: 58px;
            height: 54px;
            align-self: center;
          }

          .fl_video {
            background: #fff0f0;
          }

          .fl_video img {
            width: 66px;
            height: 45px;
            align-self: center;
          }

          .fl_document {
            background: #ceffef;
          }

          .fl_document img {
            width: 53px;
            height: 66px;
            align-self: center;
          }

          .fl_compressed {
            background: #ffe0f6;
          }

          .fl_compressed img {
            width: 56px;
            height: 67px;
            align-self: center;
          }

          .file_heading {
            color: #4a4a4a;
            font-weight: 600;
            font-size: 15px !important;
            line-height: 18px;
          }

          .file_info {
            color: #999999;
            font-size: 14!importantpx;
            line-height: 17px;
          }
        `}
      </style>
    </div>
  );
};

export default FilesGrid;
