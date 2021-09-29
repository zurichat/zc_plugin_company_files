import { useState } from "react";
import useFetch from "./useFetch";
import StarredHead from "./StarredHead";
import "./StarredListView.css";

function index() {
  const API_BASE_URL = location.hostname.includes("zuri.chat")
    ? "https://companyfiles.zuri.chat/api/v1"
    : "http://localhost:5500/api/v1";

  const [fileDel, setFileDel] = useState(null);
  const [emptyStarred, setEmptyStarred] = useState(null);

  const {
    data = [],
    setData,
    isLoading,
    error,
  } = useFetch(
    `${API_BASE_URL}/files/searchStarredFiles`,
    restore,
    fileDel,
    emptyTrash
  );

  return (
    <div className="StarredApp h-full w-full">
      <StarredHead
        setFileDel={setFileDel}
        setEmptyTrash={setEmptyStarred}
        data={data}
        setData={setData}
        isLoading={isLoading}
        error={error}
        apiBase={API_BASE_URL}
      />
    </div>
  );
}

export default index;
