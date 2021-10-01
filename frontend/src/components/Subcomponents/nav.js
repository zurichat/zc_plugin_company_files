import React from 'react';
import FilePreviewMenu from './FilePreviewMenu';
import active from '../../../public/Icons/arrow-left/active.svg';
import imageIcon from '../../../public/Icons/image/active.svg';
import downloadIcon from '../../../public/Icons/download/active.svg';
import Vertical from '../../../public/Icons/more-vertical/active.svg';

function nav({ file, setOpenStatus }) {
  return (
    <nav className='tw-h-10 tw-w-full tw-flex tw-flex-row tw-justify-between tw-p-3 md:tw-px-5 lg:tw-px-7'>
      <FilePreviewMenu />
      <div className='tw-flex'>
        <div>
          <img src={active} alt='arrow-left' className='tw-mr-5' onClick={() => setOpenStatus(false)} />
        </div>
        <div>
          <div className='tw-flex tw-flex-row'>
            <img src={imageIcon} alt='image-icon' className='tw-mr-2' />
            <p className='tw-text-white'>{file.fileName}</p>
          </div>
        </div>
      </div>
      <div className='tw-flex'>
        <div>
          <a href={file.url} download>
            <img src={downloadIcon} alt='download-icon' />
          </a>
        </div>

        <div>
          <img src={Vertical} alt='more-icon' className='tw-ml-2' />
        </div>
      </div>
    </nav>
  );
}

export default nav;
