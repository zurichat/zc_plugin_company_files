import React from 'react';

function TableHeader() {
   
  return (
    <tr>
  <th>Name</th>
  <th className="center">Owner</th>
  <th className="center">Date Modified</th>
  <th className="center">File Size</th>
</tr>
  );
}

export default TableHeader;