import TrashHead from "./TrashHead";
import "./trashListView.css";
import { useState } from "react";
import useFetch from "./useFetch";

const Trash = () => {
  const API_BASE_URL = location.hostname.includes("zuri.chat")
    ? "https://companyfiles.zuri.chat/api/v1"
    : "http://localhost:5500/api/v1";

  const [fileDel, setFileDel] = useState(null);
  const [restore, setRestore] = useState(null);
  const [emptyTrash, setEmptyTrash] = useState(null);

  const {
    data = [],
    setData,
    isLoading,
    error,
  } = useFetch(
    `${API_BASE_URL}/files/deletedFiles`,
    restore,
    fileDel,
    emptyTrash
  );

  return (
    <div className="TrashApp tw-h-full tw-w-full tw-font-lato">
      <TrashHead
        setFileDel={setFileDel}
        setRestore={setRestore}
        setEmptyTrash={setEmptyTrash}
        data={data}
        setData={setData}
        isLoading={isLoading}
        error={error}
        apiBase={API_BASE_URL}
      />
    </div>
  );
};

export default Trash;
