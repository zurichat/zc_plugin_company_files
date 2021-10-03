import React from "react";
import UserAllow from "./UserAllow";

import img1 from "../CollabImages/damilola-1.png";
import img2 from "../CollabImages/damilola-2.png";
import img3 from "../CollabImages/damilola-3.png";
import img4 from "../CollabImages/damilola-4.png";

const AdminAllow = (props) => {
  return (
    <div className="tw-flex  tw-items-center tw-px-3 tw-space-x-4 tw-h-14">
      {props.admin_image}
      <div className="tw-w-10/12 subject">
        <h1 className="tw-capitalize tw-w-full tw-text-sm tw-font-semibold">
          {props.admin_name}
        </h1>
        <span className="tw-text-[14px] tw-text-gray-500">
          {props.admin_email}
        </span>
      </div>
      <span className="tw-text-right tw-min-w-min tw-text-base">Admin</span>
    </div>
  );
};

const GivePermission = () => {
  return (
    <div className="div">
      <AdminAllow
        admin_email="damiloloa@zuri.hng"
        admin_image={
          <img
            className="tw-h-9 tw-rounded-full tw-w-9 predicate"
            alt="profile pic of admin of folder"
            src={img1}
          />
        }
        admin_name="Damilola Designer"
      />
      <UserAllow
        image={
          <img
            className="tw-h-9 tw-rounded-full tw-w-9 predicate"
            alt="profile pic of admin of folder"
            src={img1}
          />
        }
        name="Damilola Emmanuel"
        email="damilolaemma@hotmail.com"
      />

      <UserAllow
        image={
          <img
            className="tw-h-9 tw-rounded-full tw-w-9 predicate"
            alt="profile pic of admin of folder"
            src={img1}
          />
        }
        name="Damilola Emmanuel"
        email="damilolaemma@hotmail.com"
      />

      <UserAllow
        image={
          <img
            className="tw-h-9 tw-rounded-full tw-w-9 predicate"
            alt="profile pic of admin of folder"
            src={img2}
          />
        }
        name="Damilola Emmanuel"
        email="damilolaemma@hotmail.com"
      />

      <UserAllow
        image={
          <img
            className="tw-h-9 tw-rounded-full tw-w-9 predicate"
            alt="profile pic of admin of folder"
            src={img3}
          />
        }
        name="Damilola Emmanuel"
        email="damilolaemma@hotmail.com"
      />

      <UserAllow
        image={
          <img
            className="tw-h-9 tw-rounded-full tw-w-9 predicate"
            alt="profile pic of admin of folder"
            src={img4}
          />
        }
        name="Damilola Emmanuel"
        email="damilolaemma@hotmail.com"
      />

      <style jsx>{`
        @media (min-width: 300px) and (max-width: 499px) {
          .predicate {
            width: 28px !important;
            height: 28px !important;
            margin-right: 2px !important;
          }

          h1 {
            font-size: 12px !important;
            line-height: 15px;
          }

          .subject span {
            font-size: 10px !important;
          }

          .subject {
            margin-left: 0.65px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GivePermission;
