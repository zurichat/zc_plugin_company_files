import React from "react";
import UserAllow from "./UserAllow";

import img1 from "../CollabImages/damilola-1.png";
import img2 from "../CollabImages/damilola-2.png";
import img3 from "../CollabImages/damilola-3.png";
import img4 from "../CollabImages/damilola-4.png";


const AdminAllow = (props) => {
  return (
    <div className="flex items-center px-3 space-x-4 h-14">
      {props.admin_image}
      <div className="w-10/12">
        <h1 className="capitalize w-full text-sm font-semibold">
          {props.admin_name}
        </h1>
        <span className="text-[14px] text-gray-500">{props.admin_email}</span>
      </div>
      <span className=" text-right min-w-min">Admin</span>
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
            className="h-9 rounded-full w-9"
            alt="profile pic of admin of folder"
            src={img1}
          />
        }
        admin_name="Damilola Designer"
      />
      <UserAllow
        image={
          <img
            className="h-9 rounded-full w-9"
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
            className="h-9 rounded-full w-9"
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
            className="h-9 rounded-full w-9"
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
            className="h-9 rounded-full w-9"
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
            className="h-9 rounded-full w-9"
            alt="profile pic of admin of folder"
            src={img4}
          />
        }
        name="Damilola Emmanuel"
        email="damilolaemma@hotmail.com"
      />
    </div>
  );
};

export default GivePermission;
