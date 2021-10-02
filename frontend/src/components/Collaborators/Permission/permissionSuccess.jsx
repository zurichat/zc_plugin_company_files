import React, { useState } from "react";

import close from "../CollabImages/default.svg";

const permissionSuccess = () => {
  const [showNotification, setShowNotification] = useState(true);
  const closeNotification = () => {
    setShowNotification((show) => !show);
  };

  return (
    <div>
      {showNotification && (
        <div className="permission_wrapper flex-cen">
          <p>Permission Changed Successfully</p>

          <span
            className="tw-absolute tw-right-20 cursor-pointer"
            id="notification"
            onClick={closeNotification}
          >
            <img src={close} alt="close" />
          </span>
        </div>
      )}

      <style jsx>
        {`
          .flex-cen {
            display: flex;
            justify-content: center;
          }
          .permission_wrapper {
            font-weight: 600;
            padding: 5px;
            position: fixed;
            top: 0;
            left: 0;
            margin-left: 0px !important;
            width: 100%;
            background-color: #cbffee;
          }

          .permission_wrapper p {
            text-align: center;
            align-self: center;
            color: #000;
          }
        `}
      </style>
    </div>
  );
};

export default permissionSuccess;
