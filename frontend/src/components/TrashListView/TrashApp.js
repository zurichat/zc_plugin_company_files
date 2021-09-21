import Trash from "./TrashHead";
import "./trashListView.css";
import { useState } from "react";

function TrashApp() {
  const [fileDel, setFileDel] = useState();
  const [restore, setRestore] = useState();

  return (
    <div className="TrashApp h-full w-full">
      <Trash
        fileDel={fileDel}
        restore={restore}
        setFileDel={setFileDel}
        setRestore={setRestore}
      />
    </div>
  );
}

export default TrashApp;
