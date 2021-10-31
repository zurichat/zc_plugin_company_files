import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserAllow from "./UserAllow";

import {
  getUserInfo,
  getWorkspaceUser,
  getWorkspaceUsers
} from "../../../actions/workspaceInfo";

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

const GivePermission = ({ search }) => {
  const ZuriUsers = [];

  const userArray = [];

  const onSaveHandler = (col) => {
    userArray.push(col);
  };

  const dispatch = useDispatch();
  const { loading, error, users, user, info } = useSelector(
    (state) => state.rootReducer.workspaceReducer
  );

  useEffect(() => {
    (async () => {
      dispatch(getUserInfo());
      dispatch(getWorkspaceUser("eosabiya@gmail.com")); // takes email as parameter
      dispatch(getWorkspaceUsers());
    })();
    if (users !== null && users !== undefined) {
      Object.keys(users).map((key) => ZuriUsers.push(users[key]));
    }
  }, []);

  // user == {} ?
  // <div>
  // <p>Ooops! It seems you are not logged in</p>
  // <a className="tw-p-3 tw-text-white tw-bg-green-500" href="https://zuri.chat">Go to Zuri.chat</a>
  // </div> :

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
      {search == ""
        ? ZuriUsers.slice(0, ZuriUsers.length - 1).map((user) => (
            <UserAllow
              key={user._id}
              user={user}
              onSaveHandler={onSaveHandler}
            />
          ))
        : ZuriUsers.filter(
            (user) => user.user_name == search || user.email == search
          )
            .slice(0, 457)
            .map((user) => (
              <UserAllow
                key={user._id}
                user={user}
                onSaveHandler={onSaveHandler}
              />
            ))}
      {/* <UserAllow
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
      /> */}
    </div>
  );
};

export default GivePermission;
