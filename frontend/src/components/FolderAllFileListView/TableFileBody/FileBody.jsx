import React from 'react';
import FileIcon from '../../../../public/Icons/fileIcon.svg';
import PropTypes from 'prop-types';



function FileBody ({ name, owner, date, size }) {

  return (
    <tr>
    <td>
      <p className="folder_name">  <img src={FileIcon} /> <h3>{name}</h3> </p>
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
};



FileBody.propTypes = {
  name: PropTypes.string,
  owner: PropTypes.string,
  size: PropTypes.string,
  date: PropTypes.sring,
};

FileBody.defaultProps = {
  name: 'My Tutorials',
  owner: 'me',
  size: '200G',
  date: '29 July, 2021',
};

export default FileBody;