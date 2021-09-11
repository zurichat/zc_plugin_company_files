import Button from "Components/Button";
import React from "react";
import EmptyFolder from "Components/EmptyFolder";
import FolderDescription from "Components/FolderDescription";

const ComponentToTest = () => {
  return (
    <div className="flex">
      <EmptyFolder />
      <FolderDescription />
    </div>
  )
};

export default ComponentToTest;
