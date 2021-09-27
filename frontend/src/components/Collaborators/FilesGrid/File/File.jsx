import React from "react";

import word from "../../CollabImages/word-svg.svg";
import pdf from "../../CollabImages/pdf-svg.svg";
import sheet from "../../CollabImages/excel-svg.svg";

function File(props) {
  return (
    <div className="file_card">
      <div className="file_list">
        <div className="fl_img">
          <span className="img img_1">
            <img src={word} alt="" />
          </span>
        </div>

        <div className="file_title">
          <h3>{props.title}</h3>
          <p>{props.time}</p>
        </div>
      </div>

      <div className="file_list">
        <div className="fl_img">
          <span className="img img_3">
            <img src={pdf} alt="" />
          </span>
        </div>

        <div className="file_title">
          <h3>{props.title}</h3>
          <p>{props.time}</p>
        </div>
      </div>

      <div className="file_list">
        <div className="fl_img">
          <span className="img img_3">
            <img src={pdf} alt="" />
          </span>
        </div>

        <div className="file_title self-center">
          <h3>{props.title}</h3>
          <p>{props.time}</p>
        </div>
      </div>

      <div className="file_list">
        <div className="fl_img">
          <span className="img img_1">
            <img src={word} alt="" />
          </span>
        </div>

        <div className="file_title">
          <h3>{props.title}</h3>
          <p>{props.time}</p>
        </div>
      </div>

      <div className="file_list">
        <div className="fl_img">
          <span className="img img_3">
            <img src={sheet} alt="" />
          </span>
        </div>

        <div className="file_title">
          <h3>{props.title}</h3>
          <p>{props.time}</p>
        </div>
      </div>

      <style jsx>
        {`
          .file_card {
            margin-top: 30px;
            margin-bottom: 5px;
          }
          .file_title h3 {
            color: #4a4a4a;
            font-weight: 600;
            font-size: 14px;
            line-height: 16px;
            margin-bottom: 4px;
          }

          .file_title p {
            color: #999999;
            font-weight: 600;
            font-size: 13px;
            line-height: 15px;
          }

          .img {
            border-radius: 6px;
            padding: 25px;
            margin-right: 4px;
          }

          .file-image {
            align-self: center;
            margin-right: 12px;
          }

          .file_card {
            display: flex;
            justify-content: space-between;
          }

          .file_list {
            display: flex;
            justify-content: space-between;
          }

          .img img {
            width: 25px !important;
            height: 25px !important;
          }

          .img_1 {
            display: flex;
            background-color: #e3eeff;
          }

          .img_2 {
            display: flex;
            background-color: #fed4d4;
          }

          .img_3 {
            display: flex;
            background-color: #d7fceb;
          }

          .file_title {
            align-self: center;
          }
        `}
      </style>
    </div>
  );
}

export default File;
