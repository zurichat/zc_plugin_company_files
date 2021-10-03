import React, { useState } from "react";
import MessageInfo from "../Permission/permissionSuccess";
import saveIcon from "../CollabImages/save-svg.svg";

import { Helmet } from "react-helmet";

const UserAllow = (props) => {
  const [showMessage, setShowMessage] = useState(false);
  const displayMessage = () => {
    setShowMessage((prev) => !prev);
  };

  return (
    <div className="tw-flex tw-w-full tw-items-center tw-px-3 tw-space-x-4 tw-h-14">
      {props.image}
      <div className="tw-w-10/12 subject">
        <h1 className="tw-capitalize tw-w-full tw-text-sm tw-font-semibold">
          {props.name}
        </h1>
        <span className="tw-text-[14px] tw-text-gray-500">{props.email}</span>
      </div>

      <div className="tw-w-40 tw-flex tw-justify-between">
        <span className={`{user_roles tw-flex`}>
          <div className="custom-select" style={{ width: "119.2px" }}>
            <select>
              <option value="0">Role:</option>

              <option value="Editor">Can Edit</option>
              <option value="Viewer">Can View</option>
              <option value="Remove">Remove</option>
            </select>
          </div>

          <div className="save_icon">
            <img
              src={saveIcon}
              alt=""
              className="tw-cursor-pointer"
              onClick={displayMessage}
            />
          </div>
        </span>
      </div>
      {showMessage && <MessageInfo />}

      <style jsx>
        {`
          .user_roles {
            align-items: center;
          }
          .save_icon img {
            width: 15px;
            height: 15px;
            align-self: center;
          }

          .save_icon {
            align-self: center;
            margin-left: 5px;
          }

          @media (min-width: 300px) and (max-width: 499px) {
            .custom-select {
              width: 80px !important;
            }

            .save_icon img {
              width: 10px !important;
              height: 10px !important;
            }
          }

          /*SELECTOR CSS */

          /*the container must be positioned relative:*/
          .custom-select {
            position: relative;
          }

          .custom-select select {
            display: none; /*hide original SELECT element:*/
          }

          .select-selected {
            background-color: #fff;
            color: #000000 !important;
            font-size: 12px;
            line-height: 14.4px;
          }

          /*style the arrow inside the select element:*/
          .select-selected:after {
            position: absolute;
            content: "";
            top: 14px;
            right: 0px;
            width: 0;
            height: 0;
            border: 6px solid transparent;
            border-color: #000 transparent transparent transparent;
          }

          /*point the arrow upwards when the select box is open (active):*/
          .select-selected.select-arrow-active:after {
            border-color: transparent transparent #000 transparent;
            top: 7px;
          }

          /*style the items (options), including the selected item:*/
          .select-items div,
          .select-selected {
            color: #000000;
            padding: 8px 16px;
            // border: 1px solid transparent;
            //border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
            cursor: pointer;
            user-select: none;
            text-align: center;
          }

          /*style items (options):*/
          .select-items {
            position: absolute;
            background-color: #ffffff;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            font-size: 12px;
            line-height: 14.4px;
            box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
          }

          /*hide the items when the select box is closed:*/
          .select-hide {
            display: none;
          }

          .select-items div:hover {
            background-color: #00b87c;
          }

          .same-as-selected::before {
            content: "✔ ";
            position: absolute;
            left: 10%;
            margin-right: 10px;
            color: #000;
          }
        `}

        <Helmet>
          <script>
            {`
              let x, i, j, l, ll, selElmnt, a, b, c;
              /*look for any elements with the class "custom-select":*/
              
              x = document.getElementsByClassName("custom-select");
              l = x.length;
              for (i = 0; i < l; i++) {
                selElmnt = x[i].getElementsByTagName("select")[0];
                ll = selElmnt.length;
                /*for each element, create a new DIV that will act as the selected item:*/
                a = document.createElement("DIV");
                a.setAttribute("class", "select-selected");
                a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
                x[i].appendChild(a);
                /*for each element, create a new DIV that will contain the option list:*/
                b = document.createElement("DIV");
                b.setAttribute("class", "select-items select-hide");
                for (j = 1; j < ll; j++) {
                  /*for each option in the original select element,
                  create a new DIV that will act as an option item:*/
                  c = document.createElement("DIV");
                  c.innerHTML = selElmnt.options[j].innerHTML;
                  c.addEventListener("click", function (e) {
                    /*when an item is clicked, update the original select box,
                      and the selected item:*/
              
                    let y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                      if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                          y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                      }
                    }
                    h.click();
                  });
                  b.appendChild(c);
                }
                x[i].appendChild(b);
                a.addEventListener("click", function (e) {
                  /*when the select box is clicked, close any other select boxes,
                    and open/close the current select box:*/
                  e.stopPropagation();
                  closeAllSelect(this);
                  this.nextSibling.classList.toggle("select-hide");
                  this.classList.toggle("select-arrow-active");
                });
              }
              
              const closeAllSelect = (elmnt) => {
                /*a function that will close all select boxes in the document,
                except the current select box:*/
                let x,
                  y,
                  i,
                  xl,
                  yl,
                  arrNo = [];
                x = document.getElementsByClassName("select-items");
                y = document.getElementsByClassName("select-selected");
                xl = x.length;
                yl = y.length;
                for (i = 0; i < yl; i++) {
                  if (elmnt == y[i]) {
                    arrNo.push(i);
                  } else {
                    y[i].classList.remove("select-arrow-active");
                  }
                }
                for (i = 0; i < xl; i++) {
                  if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                  }
                }
              };
              /*if the user clicks anywhere outside the select box,
              then close all select boxes:*/
              document.addEventListener("click", closeAllSelect);
              
          `}
          </script>
        </Helmet>
      </style>
    </div>
  );
};

export default UserAllow;
