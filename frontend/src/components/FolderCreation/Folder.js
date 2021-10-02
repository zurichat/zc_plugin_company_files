import React, { useState, useEffect } from "react";
import FolderCard from "./FolderCard/FolderCard";
import Addnewbtn from "./Addnew/Addnewbtn";
import Modal from "./Modal/Modal";
import classes from "./Folder.module.css";


function Folder() {
  const [showModal, setShowModal] = useState(false);
  const [folderArray, setFolderArray] = useState([]);
  const [submitting, setIsSubmitting] = useState(false)
  const API_BASE_URL = location.hostname.includes("zuri.chat") ? "https://companyfiles.zuri.chat/api/v1" : "http://localhost:5500/api/v1"

  useEffect(() => {
    async function fetchFolder() {
      try {
        let response = await fetch(`${API_BASE_URL}/folders/all`);
        let { data } = await response.json();

        // data = data.slice(data.length - 4, data.length);
        // console.log(data);
        handleFolder(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFolder();
  }, []);

  const handleFolder = (data) => {
    setIsSubmitting(true)
    setFolderArray((prev) => [...prev, ...data]);
    setIsSubmitting(false)
  };

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className={classes.sectionWrapper} style={{ width: "100%" }}>
      <Addnewbtn handleModal={handleModal} />
      <div className={classes.folder__wrapper}>
        {folderArray.map((folder) => (
          <FolderCard key={folder._id} name={folder.folderName} />
        ))}
      </div>
      {showModal && (
        <Modal handleModal={handleModal} handleFolder={handleFolder} />
      )}
    </div>
  );
}

export default Folder;
