import React from "react";

import TableHeader from "../TableHeader/TableHeader";
import TableBody from "../TableBody/TableBody";
import FileBody from "../TableFileBody/FileBody";

function ListViewTable() {
  return (
    <table>
      <TableHeader />
      <TableBody />
      <TableBody name="Programming File" />
      <TableBody name="My favourite" />
      <TableBody name="Media Folder" />
      <FileBody name="My Videos" />
      <FileBody />
      <FileBody name="Programming Podcasts" />
      <FileBody name="Netflix Downloads" />
    </table>
  );
}

export default ListViewTable;
