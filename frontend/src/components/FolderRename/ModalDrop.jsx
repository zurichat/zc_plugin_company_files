import React from "react";

const ModalDrop = (props) => {
  return (
    <div
      className="overlay"
      onClick={props.onCancel}
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: "100",
        left: "0",
        top: "0",
        background: "rgba(0, 0, 0, 0.65)",
        cursor: "pointer"
      }}
    />
  );
};

export default ModalDrop;
