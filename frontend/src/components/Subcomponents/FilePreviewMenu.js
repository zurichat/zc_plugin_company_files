import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsStar, BsInfoCircle, BsTrash, BsInfo } from 'react-icons/bs';
import { FaShareAlt } from 'react-icons/fa';
import { starFile } from '../../actions/fileAction';

const FilePreviewMenu = ({ file, setOpenStatus, more, setShowshareurl }) => {
  const [showproperties, setShowproperties] = useState(false);
  const date = new Date(file.dateAdded);
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };
  const fileSize = formatBytes(file.size);
  const dispatch = useDispatch();
  const liststyle = {
    fontSize: '1rem',
    paddingLeft: '1.5rem',
  };

  const liststyle2 = {
    fontSize: '1rem',
    padding: '0.5rem',
    paddingRight: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const handleStarred = (file) => {
    dispatch(starFile(file));
    setOpenStatus(false);
  };
  const handleDelete = (file) => {
    
    setOpenStatus(false);
  };
  return (
    <div style={{ position: 'absolute', zIndex: '100', right: '2rem', top: '2rem' }}>
      {more && (
        <div style={{ position: 'absolute', zIndex: '100', right: '2rem', top: '2rem', border: 'border: 1px solid #F7F7F7' }}>
          <ul style={{ padding: '1rem 0', width: '15rem', backgroundColor: 'white', borderRadius: '0.5rem' }}>
            <li style={liststyle} onMouseEnter={() => setShowproperties((prev) => !prev)} onMouseLeave={() => setShowproperties((prev) => !prev)}>
              <BsInfoCircle />
              <span>Properties</span>
            </li>
            <li style={liststyle} onClick={() => handleStarred(file)}>
              <BsStar />
              <span>Add to Starred</span>
            </li>
            <li style={liststyle} onClick={() => setShowshareurl(true)}>
              <FaShareAlt />
              <span>Share</span>
            </li>
            <li style={liststyle} onClick={() => handleDelete(file)}>
              <BsTrash />
              <span>Delete</span>
            </li>
          </ul>
        </div>
      )}
      {showproperties && (
        <div style={{ position: 'absolute', zIndex: '100', top: '15rem', right: '2rem', border: 'border: 1px solid red' }}>
          <ul style={{ padding: '1rem 0', width: '15rem', backgroundColor: 'white' }}>
            <li style={liststyle2}>
              <span>File name</span>
              <span>{file.fileName.split('.')[0]}</span>
            </li>
            <li style={liststyle2}>
              <span>Type</span>
              <span>{file.type.split('/')[1]}</span>
            </li>
            <li style={liststyle2}>
              <span>Starred</span>
              <span>{file.isStarred ? 'Yes' : 'No'}</span>
            </li>
            <li style={liststyle2}>
              <span>Size</span>
              <span>{fileSize}</span>
            </li>
            <li style={liststyle2}>
              <span>Created</span>
              <span>{date.toLocaleDateString('en-US')}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilePreviewMenu;
