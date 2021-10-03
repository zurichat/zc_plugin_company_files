import React, { useEffect, useState } from "react";

import searchIcon from "../CollabImages/search-svg.svg";
import chainIcon from "../CollabImages/chain-green.svg.svg";

import { getUserInfo } from "../../../actions/workspaceInfo";
import { useDispatch, useSelector } from "react-redux";

import GivePermission from "../GivePermission/GivePermission";

const CollaboratorCard = (props) => {
  // avoid scrolling when modal is active
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  // states
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const dispatch = useDispatch();
  const { loading, error, person, people, info } = useSelector(
    (state) => state.rootReducer.workspaceReducer
  );
  console.log({ loading, error, person, people, info });

  // Getting the user details

  // useEffect(() => {
  //   (async () => {
  //     dispatch(getUserInfo());
  //   })();
  // }, []);

  useEffect(() => {
    const showUsers = async () => {
      const res = dispatch(getUserInfo());
      console.log(res.Body.email);
      setUsers(res.Body.email);
    };
    showUsers();
  }, []);

  // the email suggestion

  const handleSuggestions = (text) => {
    setText(text);
    setSuggestions({});
  };

  const handleTextChange = (text) => {
    let matches = [];
    if (text.lenght > 0) {
      matches = users.filter((user) => {
        const regex = new RegExp(`${text}`, "gi");
        return user.email.match(regex);
      });
    }
    console.log("matches are", matches);
    setSuggestions(matches);
    setText(text);
  };

  return (
    <div className="collab_permission">
      {/* Nav */}
      <div className="collab_nav tw-flex tw-justify-between">
        <div className="collab_search tw-p-2">
          <form className="tw-flex tw-justify-between">
            <input
              type="text"
              placeholder="Search for email address"
              className="tw-bg-none tw-outline-none tw-w-11/12 tw-text-base tw-self-center"
              required="required"
              onChange={(e) => handleTextChange(e.target.value)}
              value={text}
              onBlur={() =>
                setTimeout(() => {
                  setSuggestions([]);
                }, 100)
              }
            />

            {suggestions &&
              suggestions.map((suggestion, i) => (
                <div
                  key={i}
                  className="suggestions tw-bg-black
                 tw-text-white"
                  onClick={() => handleSuggestions(suggestion.email)}
                >
                  {suggestion.email}
                </div>
              ))}

            <button type="submit">
              <img
                src={searchIcon}
                alt="search"
                className="tw-cursor-pointer tw-flex tw-self-center"
              />
            </button>
          </form>
        </div>

        <div>
          <button className="invite_btn" value={text}>
            Send Invite
          </button>
        </div>
      </div>

      <hr />

      {/* Body */}
      <div className="collab_body">
        <GivePermission />
      </div>

      {/* Footer */}
      <hr />
      <div className="collab_footer tw-py-2 tw-flex tw-justify-between">
        <div className="fl_link">
          <a href="#" className="copy-link tw-flex">
            <span> Copy link</span>
            <span className="imago tw-ml-1">
              <img
                src={chainIcon}
                alt="copy link"
                className="tw-w-[15px] tw-h-[15px]"
              />
            </span>
          </a>
        </div>
        <div>
          <p
            className="tw-cursor-pointer tw-text-base tw-mr-3"
            onClick={props.onCancel}
          >
            CLOSE
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .collab_permission {
            background: #ffffff;
            border: 1px solid #f1f1f1;
            box-shadow: 0px 2px 10px rgba(125, 177, 224, 0.25),
              0px 6px 28px -3px rgba(165, 165, 165, 0.4);
            border-radius: 9px;
            width: 500px;
            z-index: 200;

            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }

          .collab_permission:before {
            content: "";
            display: inline-block;
            height: 100%;
            vertical-align: middle;
            margin-right: -4px;
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

          .invite_btn:hover {
            background-color: #00b876;
            color: #fff;
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

          @media (min-width: 300px) and (max-width: 499px) {
            .collab_permission {
              width: 98%;
            }

            .collab_nav {
              padding: 5px;
            }

            .collab_search {
              width: 200px;
            }

            collab_search input {
              width: 90%;
            }

            .collab_body {
              width: 98%;
              margin: 2px auto;
            }

            text {
              margin-left: 4px;
            }

            text h3 {
              font-size: 10px;
              line-height: 14px;
            }

            text p {
              font-size: 8px;
              line-height: 12px;
            }

            .invite_btn {
              padding: 8px;
              font-size: 9px;
              line-height: 18px;
              height: 100%;
            }

            .image img {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CollaboratorCard;
