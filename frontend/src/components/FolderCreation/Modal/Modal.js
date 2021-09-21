import React, { useState } from "react";
import classes from "./Modal.module.css";

const Spinner = () => {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.spinner}></div>
    </div>
  )
}

const Modal = ({ handleModal, handleFolder }) => {
  const [folderName, setFoldername] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(null)
  const API_BASE_URL = location.hostname.includes("zuri.chat") ? "https://companyfiles.zuri.chat/api/v1" : "http://localhost:5500/api/v1"

  const onChange = (e) => {
    setFoldername(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null)
    const newFolder = { folderName };
    try {
      if (!folderName) {
        setErrors("Please Enter a Name")
        throw "folder name is empty"
      }
      setIsSubmitting(true)
      const response = await fetch(
        `${API_BASE_URL}/folders/write`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newFolder),
        }
      );
      const { data } = await response.json();
      console.log(data);
      handleFolder([data]);
      handleModal();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false)
    }
  };
  return (
    <div className={classes.modal_wrapper}>
      <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
        <label>New Folder</label>
        <div className={classes.inputWrapper}>
          <input type="text" value={folderName} onChange={(e) => onChange(e)} />
          {errors && <p>{errors}</p>}
        </div>
        <div className={classes.btnWrapper}>
          <button className={classes.btnCancel} onClick={() => handleModal()}>
            Cancel
          </button>
          <button className={classes.btnCreate}>
            { isSubmitting && <Spinner /> }
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
