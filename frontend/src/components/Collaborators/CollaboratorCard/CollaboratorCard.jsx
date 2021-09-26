import React from "react";

import searchIcon from "../CollabImages/search-svg.svg";
import chainIcon from "../CollabImages/chain-green.svg.svg";

import GivePermission from "../GivePermission/GivePermission";

const CollaboratorCard = () => {
  return (
    <div className="collab_permission absolute">
      {/* Nav */}
      <div className="collab_nav flex justify-between">
        <div className="collab_search p-2">
          <form className="flex justify-between">
            <input
              type="search"
              placeholder="Search email, name or status"
              className="bg-none outline-none w-11/12"
              required="required"
            />

            <button type="submit">
              <img
                src={searchIcon}
                alt="search"
                className="cursor-pointer flex self-center"
              />
            </button>
          </form>
        </div>

        <div>
          <button className="invite_btn">Send Invite</button>
        </div>
      </div>

      <hr />

      {/* Body */}
      <div className="collab_body">
        <GivePermission />
      </div>

      {/* Footer */}
      <hr />
      <div className="collab_footer py-2">
        <a href="#" className="copy-link flex">
          <span> Copy link</span>
          <span className="imago ml-1">
            <img src={chainIcon} alt="copy link" width={16} height={16} />
          </span>
        </a>
      </div>
      <style jsx>
        {`
          .collab_permission {
            background: #ffffff;
            border: 1px solid #f1f1f1;
            box-shadow: 0px 2px 10px rgba(125, 177, 224, 0.25),
              0px 6px 28px -3px rgba(165, 165, 165, 0.4);
            border-radius: 9px;
            width: 537px;
            z-index: 1000;
          }

          .collab_nav {
            padding: 10px;
          }

          .collab_search {
            border: 1px solid rgba(153, 153, 153, 0.5);
            box-sizing: border-box;
            border-radius: 2px;
            width: 70%;
          }

          collab_search input {
            width: 80%;
          }

          .invite_btn {
            outline: none;
            border: 1px solid #00b876;
            border-radius: 3px;
            padding: 10px 14px;
            color: #00b876;
            font-size: 12px;
            line-height: 20px;
            font-weight: bold;
          }

          .collab_body {
            width: 96%;
            margin: 5px auto;
          }

          text {
            margin-left: 7px;
          }

          text h3 {
            color: #3a3a3a;
            font-size: 14px;
            line-height: 17px;
            font-weight: 600;
          }

          text p {
            color: #9a9a9a;
            font-size: 12px;
            line-height: 14px;
          }

          ul li {
            margin: 10px 0;
          }

          .collab_footer {
            margin-left: 2%;
          }

          .collab_footer a {
            color: #00b876;
            font-size: 14px;
            line-height: 17px;
            font-weight: 600;
          }

          Image {
            margin-top: -30px !important;
          }
        `}
      </style>
    </div>
  );
};

export default CollaboratorCard;
