import React from "react";

function FileStatus(props) {
  return (
    <div className="file_status">
      <span className="file_image">
        <img src={props.icon} alt="File" />
      </span>
      <h3 className="file_text text-center">{props.title}</h3>

      <style jsx>
        {`
          .file_status {
            margin: 50px 0;
          }

          h3 {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #4a4a4a;
            margin-top: 10px;
            text-transform: capitalize;
          }

          .file_image {
            background-color: #ceffef;
            padding: 50px;
            border: 1px solid #f7f7f7;
            border-radius: 9px;
            display: flex;
            align-self: center;
          }
        `}
      </style>
    </div>
  );
}

export default FileStatus;
