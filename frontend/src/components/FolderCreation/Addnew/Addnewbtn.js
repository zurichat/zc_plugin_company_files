import React, { useState } from "react";
import { BsFolder, BsFilesAlt, BsUpload } from "react-icons/bs";
import classes from "./Addnew.module.css";

const Addnewbtn = ({ handleModal }) => {
  const [showbtncard, setShowbtncard] = useState(false);

  const handleBtn = () => {
    setShowbtncard((prev) => setShowbtncard(!prev));
  };
  return (
    <div className={classes.addnew_wrapper}>
      <button onClick={() => handleBtn()} className={classes.btn}>
        Add New
      </button>
      {showbtncard && (
        <div className={classes.addNewCard}>
          <ul>
            <li
              onClick={() => {
                handleModal();
              }}
            >
              <BsFolder />
              <span>Folder</span>
            </li>
            <li>
              <BsFilesAlt />
              <span>Document</span>
            </li>
            <li>
              <BsUpload />
              <span>File Upload</span>
            </li>
            <li>
              <BsUpload />
              <span>Folder Upload</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Addnewbtn;
