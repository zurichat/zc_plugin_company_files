import React, { useState, useEffect } from "react";
import axios from "axios";

const RenameModal = ({ onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [fileName, setFileName] = useState("");
  const API_URL = window.location.hostname.includes("zuri.chat")
    ? "https://companyfiles.zuri.chat/api/v1"
    : "http://localhost:5500/api/v1";
  const handleRenameSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response = await axios.put(`${API_URL}`, {
        fileName,
      });
      alert(`${fileName} successfully renamed`);
      setFileName("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsError(false);
    }, 2500);
  }, [isError]);
  return (
    <form
      onSubmit={handleRenameSubmit}
      className="flex flex-col w-96 h-60 px-6 py-8 bg-white items-start justify-center rounded-lg shadow-xl"
    >
      <small className={!isError ? "display-none" : "text-red-700"}>
        {!isError ? <></> : "Something went wrong. Please try again later."}
      </small>

      <label className="mb-4">Rename</label>
      <input
        className="w-full rounded ring-1 ring-green-400 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-transparent h-10 mb-6 px-2"
        id="fileName"
        type="text"
        name="fileName"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />

      <span className="self-end">
        <button
          type="button"
          className="rounded border border-green-400 text-green-500 py-2 px-4 text-sm"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!loading}
          className="rounded py-2 px-4 bg-green-500 text-white ml-2 text-sm"
        >
          {!loading ? "Proceed" : "Loading..."}
        </button>
      </span>
    </form>
  );
};

export default RenameModal;
