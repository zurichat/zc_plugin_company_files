import React from 'react';
import { BsStar, BsInfoCircle, BsTrash, BsInfo } from 'react-icons/bs';
import { FaShareAlt } from 'react-icons/fa';

const FilePreviewMenu = () => {
  const liststyle = {
    fontSize: '1rem',
    paddingLeft: '1.5rem',
  };
  return (
    <div style={{ position: 'absolute', zIndex: '100', right: '2rem', top: '2rem', border: 'border: 1px solid #F7F7F7' }}>
      <ul style={{ padding: '1rem 0', width: '15rem', backgroundColor: 'white', borderRadius: '0.5rem' }}>
        <li style={liststyle}>
          <FaShareAlt />
          <span>Share</span>
        </li>
        <li style={liststyle}>
          <BsStar />
          <span>Add to Starred</span>
        </li>
        <li style={liststyle}>
          <BsInfoCircle />
          <span>Properties</span>
        </li>
        <li style={liststyle}>
          <BsTrash />
          <span>Delete</span>
        </li>
      </ul>
    </div>
  );
};

export default FilePreviewMenu;
