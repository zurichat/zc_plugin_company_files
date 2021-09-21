import React from "react";
import classes from "./Addnew.module.css";
const Addnewbtn = ({ handleModal }) => {
  return (
    <div className={classes.addnew_wrapper}>
      <button
        className={classes.btn}
        onClick={() => {
          handleModal();
        }}
      >
        Add folder
      </button>
    </div>
  );
};

export default Addnewbtn;
