import React, { useState } from "react";
import { FaCopy, FaCheckSquare, FaTimes } from "react-icons/fa";

const Copy = ({ file: { url }, setShowshareurl, copied, setLinkCopy }) => {
  const inputStyle = {
    padding: "0rem 1rem"
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setLinkCopy();
  };
  return (
    <div
      style={{
        backgroundColor: "#fff",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        display: "flex",
        alignItems: "center",
        fontSize: "1rem",
        padding: "0.5rem",
        borderRadius: "0.5rem",
        color: "#777",
        zIndex: "1000"
      }}
    >
      <FaTimes
        style={{ cursor: "pointer" }}
        onClick={() => setShowshareurl(false)}
      />
      <span style={inputStyle}>{`${url.slice(0, 35)}...`}</span>
      {!copied ? (
        <FaCopy style={{ cursor: "pointer" }} onClick={() => handleCopy()} />
      ) : (
        <FaCheckSquare
          style={{ cursor: "pointer" }}
          onClick={() => handleCopy()}
        />
      )}
    </div>
  );
};

export default Copy;
