import React from "react";
import FolderIcon from "./folderIcon.svg";
import PropTypes from "prop-types";

function TableBody({ name, owner, date, size }) {
  return (
    <tr>
      <td>
        <p className="folder_name">
          {" "}
          <img src={FolderIcon} alt="folder name" /> <h3>{name}</h3>{" "}
        </p>
      </td>

      <td>
        <p className="folder_owner">{owner}</p>
      </td>

      <td>
        <p className="folder_date">{date} </p>
      </td>

      <td>
        <p className="folder_size">{size}</p>
      </td>
    </tr>
  );
}

TableBody.propTypes = {
  name: PropTypes.string,
  owner: PropTypes.string,
  size: PropTypes.string,
  date: PropTypes.string,
};

TableBody.defaultProps = {
  name: "Design Files",
  owner: "me",
  size: "20G",
  date: "29 July, 2021",
};

export default TableBody;
