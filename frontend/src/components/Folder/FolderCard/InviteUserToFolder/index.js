import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import User from './user-7.jpg'

function ArrowIcon() {
  return (
    <FontAwesomeIcon
      className="h-full ml-2 text-[#BEBEBE] text-lg text-gray-primary"
      icon={faChevronDown}
    />
  )
}

function SearchIcon() {
  return (
    <FontAwesomeIcon
      className="h-full text-[#BEBEBE] text-lg text-gray-primary"
      icon={faSearch}
    />
  )
}

function SearchUserForm() {
  return (
    <div className="h-12 w-full my-auto border-gray-primary   border-b-[2px] px-5">
      <form className="flex w-full justify-between items-center h-10">
        <span className="flex items-center justify-between px-4 w-9/12 max-w-[48rem]  border-2  border-black-light ">
          <input
            className="appearance-none outline-none w-full h-9 o border-0"
            type="text"
            placeholder="search email, name or status"
          />
          <SearchIcon />
        </span>
        <button
          className="border-[2px] h-9 w-[110px] border-blue-400 text-blue-400 rounded-md"
          type="submit"
        >
          Send Invite
        </button>
      </form>
    </div>
  )
}
function AdminUser() {
  return (
    <div className="flex items-center px-5 space-x-4 h-14">
      <img
        className="h-9 rounded-full w-9"
        alt="profile pic of admin of folder"
        src={User}
      />
      <div className="w-10/12">
        <h1 className="capitalize w-full text-sm font-semibold">
          Damilola Emmanuel
        </h1>
        <span className="text-[14px] text-gray-500">damilolae@hng.com</span>
      </div>
      <span className=" text-right min-w-min">Admin</span>
    </div>
  )
}

function NormalUser() {
  const [show, setShow] = useState(false)

  function handleShow(e) {
    e.preventDefault()

    setShow(!show)
  }
  return (
    <div className="flex w-full items-center px-5 space-x-4 h-14">
      <img
        className="h-9 rounded-full w-9"
        alt="profile pic of admin of folder"
        src={User}
      />
      <div className="w-10/12">
        <h1 className="capitalize w-full text-sm font-semibold">
          Damilola Emmanuel
        </h1>
        <span className="text-[14px] text-gray-500">damilolae@hng.com</span>
      </div>

      <div className="tooltip w-40 inline-flex flex-col justify-center items-end order-2">
        <button
          className="inline-flex items-center tooltip-child"
          onClick={(e) => handleShow(e)}
        >
          <span className="pr-2">Can edit</span>
          <span className={`transform ${!show ? 'rotate-180' : 'rotate-0'} `}>
            <ArrowIcon />
          </span>
        </button>
        <span
          className={`${
            show ? 'flex' : 'hidden'
          } justify-start  w-44  z-30 bg-gray-600 mt-48   h-44 absolute `}
        >
          <ul className="inline-flex  rounded-[0.3rem] flex-col text-center items-center  space-x-1 space-y-2 bg-gray-300 h-[10.5rem] w-full min-h-full  ">
            <li className="py-2 bg-">Admin</li>
            <li className=" py-1 ">Can Edit</li>
            <li className=" py-1 ">Can View</li>
            <li className="inline-flex justify-center w-full py-1 border-t-2">
              Remove
            </li>
          </ul>
        </span>
      </div>
    </div>
  )
}

function InvitedUserList() {
  return (
    <div className="flex flex-col  py-3">
      <AdminUser />
      <NormalUser />
      <NormalUser />
      <NormalUser />
      <NormalUser />
      <div className="border-t-2 text-blue-600 px-5 pt-3">
        <span>Copy Link</span>
      </div>
    </div>
  )
}
function InviteUserToFolder() {
  return (
    <div
      className="absolute top-32
     z-10 bg-white rounded-md shadow-lg h-96  w-96  "
    >
      <SearchUserForm />
      <InvitedUserList />
    </div>
  )
}
export default InviteUserToFolder
