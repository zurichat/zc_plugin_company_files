import React from 'react'
import './FolderCardOption.css'

import EyeIcon from '../../../public/Icons/eye.svg'
import CopyIcon from '../../../public/Icons/copy.svg'
import DownloadIcon from '../../../public/Icons/download.svg'
import InfoIcon from '../../../public/Icons/info.svg'
import MoveIcon from '../../../public/Icons/move.svg'
import RenameIcon from '../../../public/Icons/rename.svg'
import ShareIcon from '../../../public/Icons/share.svg'
import ScissorIcon from '../../../public/Icons/scissors.svg'
import StarIcon from '../../../public/Icons/starred.svg'
import TrashIcon from '../../../public/Icons/trash.svg'
import ChainIcon from '../../../public/Icons/chain.svg'

function FolderCardOption() {
  function downloadFile() {

  }
  
  return (
    <div className="folderOptions">
      <ul>
        <li>
          <img src={EyeIcon} alt="" /> <p>Open</p>
        </li>

        <li>
          <img src={ChainIcon} alt="" /> <p>Get link</p>
        </li>

        <li onClick={downloadFile}>
          <img src={DownloadIcon} alt="" /> <p>Download</p>
        </li>

        <li>
          <img src={ShareIcon} alt="" /> <p>Share</p>
        </li>

        <li>
          <img src={CopyIcon} alt="" /> <p>Copy</p>
        </li>

        <li>
          <img src={ScissorIcon} alt="" /> <p>Cut</p>
        </li>

        <li>
          <img src={MoveIcon} alt="" /> <p>Move</p>
        </li>

        <li>
          <img src={StarIcon} alt="" /> <p>Add to starred</p>
        </li>

        <li>
          <img src={RenameIcon} alt="" /> <p>Rename</p>
        </li>

        <li>
          <img src={InfoIcon} alt="" /> <p>Properties</p>
        </li>

        <li>
          <img src={TrashIcon} alt="" /> <p>Delete</p>
        </li>
      </ul>
    </div>
  )
}

export default FolderCardOption
