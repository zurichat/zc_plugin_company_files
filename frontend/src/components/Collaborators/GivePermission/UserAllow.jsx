import React, { useState } from "react";
import MessageInfo from "../Permission/permissionSuccess";
import saveIcon from "../CollabImages/save-svg.svg";
import { BsChevronDown } from "react-icons/bs"
import { BiSave} from 'react-icons/bi'
import { BsPersonSquare } from 'react-icons/bs'
import { MdRemoveCircleOutline } from 'react-icons/md';

// import axios from 'axios';

import { Helmet } from "react-helmet";
import './userAllow.css';


const UserAllow = ({user}) => {
  //assigning unique ids
  const roleListId = `${user._id}rl`
  const saveBtnId = `${user._id}sb`
  const userRoleId = `${user._id}ur`
  const ddAId = `${user._id}dd`

  const [showMessage, setShowMessage] = useState(false);
  const displayMessage = () => {
    setShowMessage((prev) => !prev);
  };

  const [modalState, setModalState] = useState(true)
  const [role, setRole] = useState(user.role)


  //onClick and onChange Handlers
  const modalToggleHandler = () => {
    const rolesList = document.getElementById(roleListId)

    modalState == true ? rolesList.classList.remove('tw-hidden') : rolesList.classList.add('tw-hidden');
    setModalState(!modalState)
  }

  const toggleRoles = e => {
    const rolesList = document.getElementById(roleListId)

    document.getElementById(ddAId).classList.toggle('dropDownToggle')

    setModalState(!modalState);
    rolesList.classList.toggle('displayList');

    modalToggleHandler();
  }

//handling the role change 
  const roleChangeHandler = e => {
    document.getElementById(userRoleId).innerText = e.target.innerText

    document.getElementById(userRoleId).innerText !== role ? document.getElementById(saveBtnId).classList.add('displaySaveBtn'): document.getElementById(saveBtnId).classList.remove('displaySaveBtn')

    toggleRoles()
  // const value = select.options[select.selectedIndex].value;
  }

  const roleRmoveHandler = e => {
    document.getElementById(userRoleId).innerText = "Role: "

    document.getElementById(userRoleId).innerText !== role ? document.getElementById(saveBtnId).classList.add('displaySaveBtn'): document.getElementById(saveBtnId).classList.remove('displaySaveBtn')

    toggleRoles()
  // const value = select.options[select.selectedIndex].value;
  }

  // const onSaveHandler = () => {
  //   const data = {

  //   }
  //   axios.post('http://localhost:5500/api/v1/access/give', {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  // }


  return (
    <div className="tw-flex tw-w-full tw-items-center tw-my-2 tw-px-4 tw-space-x-4 tw-h-14 tw-hover:bg-gray-100">
      {
        user.image_url == "" ? <BsPersonSquare className="tw-text-gray-700 tw-text-4xl" /> : <img className="tw-h-9 tw-rounded-sm tw-w-9" src={user.image_url} /> 
      }
      <div className="tw-w-8/12">
        <h1 className="tw-capitalize tw-w-full tw-text-sm tw-font-semibold">
          {user.user_name}
        </h1>
        <span className="tw-text-[14px] tw-text-gray-500">{user.email}</span>
      </div>

      <div className=" tw-flex tw-w-3/12 tw-justify-between tw-text-base">
        {/* <span className={`{tw-pr-2 tw-w-full user_roles tw-flex`}>
          <div className="custom-select tw-w-full" > */}
            <div className="tw-relative tw-w-full tw-text-sm tw-font-normal tw-text-black">


              <div onClick={toggleRoles} className="tw-flex tw-justify-between tw-items-center tw-cursor-pointer tw-w-full" >
                <p id={userRoleId} className="tw-text-black roleText tw-text-sm tw-font-light">Role:  </p> <BsChevronDown id={ddAId} className="tw-ml-1 "/>
              </div>


              <div id={roleListId}  className="tw-absolute tw-hidden tw-bg-white tw-mt-2 tw--ml-20 tw-text-black tw-z-10 tw-rounded tw-shadow">
                <div>
                  <div className="tw-cursor-pointer tw-hover:bg-green-500 tw-hover:text-white tw-py-1 tw-px-5" onClick={roleChangeHandler}>Admin</div>
                  <div className="tw-cursor-pointer tw-hover:bg-green-500 tw-hover:text-white tw-py-1 tw-px-5"  onClick={roleChangeHandler}>Can Edit</div>
                  <div className="tw-cursor-pointer tw-hover:bg-green-500 tw-hover:text-white tw-py-1 tw-px-5"  onClick={roleChangeHandler}>Can View</div>
                </div>

                <div className="tw-flex tw-rounded tw-border-t tw-items-center tw-cursor-pointer tw-w-full tw-py-3 tw-px-10 removeUser" onClick={roleRmoveHandler}><MdRemoveCircleOutline /> Remove</div>
                
              </div>
            </div>
          {/* </div> */}
          <div className="save_icon" id={saveBtnId}>
            <BiSave className="tw-text-green-500 tw-text-lg tw-ml-0.5 tw-font-light" onClick={displayMessage} />
            
          </div>
        {/* </span> */}
      </div>
      {showMessage && <MessageInfo />}

      
    </div>
  );
};

export default UserAllow;
