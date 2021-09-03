import React, {useState, useRef} from 'react'
import './Upload.scss'

function Upload() {
    const [visible, setVisible] = useState(false)
    const triggerInputDocument = useRef()
    const triggerInputFile = useRef()
    const triggerInputFolder =useRef()

    const folderIcon = (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2578 14.2813C17.2578 15.1097 16.5862 15.7813 15.7578 15.7813H3.75781C2.92939 15.7813 2.25781 15.1097 2.25781 14.2813V3.78125C2.25781 2.95282 2.92939 2.28125 3.75781 2.28125H7.50781L9.00781 4.53125H15.7578C16.5862 4.53125 17.2578 5.20282 17.2578 6.03125V14.2813Z" stroke="#999999" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )

    const documentIcon = (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2578 2.16113H5.25781C4.42939 2.16113 3.75781 2.83271 3.75781 3.66113V15.6611C3.75781 16.4896 4.42939 17.1611 5.25781 17.1611H14.2578C15.0862 17.1611 15.7578 16.4896 15.7578 15.6611V6.66113L11.2578 2.16113Z" stroke="#999999" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.2578 2.16113V6.66113H15.7578" stroke="#999999" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.7578 10.4111H6.75781" stroke="#999999" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.7578 13.4111H6.75781" stroke="#999999" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.25781 7.41113H7.50781H6.75781" stroke="#999999" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )

    const fileUploadIcon = (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5076 1.79102H5.25757C4.42914 1.79102 3.75757 2.46259 3.75757 3.29102V15.291C3.75757 16.1194 4.42914 16.791 5.25757 16.791H14.2576C15.086 16.791 15.7576 16.1194 15.7576 15.291V7.04102L10.5076 1.79102Z" stroke="#999999" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5078 1.79102V7.04102H15.7578" stroke="#999999" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )

    const folderUploadIcon = (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2578 15.1709C17.2578 15.9993 16.5862 16.6709 15.7578 16.6709H3.75781C2.92939 16.6709 2.25781 15.9993 2.25781 15.1709V4.6709C2.25781 3.84247 2.92939 3.1709 3.75781 3.1709H7.50781L9.00781 5.4209H15.7578C16.5862 5.4209 17.2578 6.09247 17.2578 6.9209V15.1709Z" stroke="#999999" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )

    return (
        <div className='upload--component'>
            <button onClick={() => setVisible(!visible)}>
                Add New
            </button>
            {
                visible && (
                    <div className="btn--dropdown">
                        <div className="folder-create">
                            {folderIcon} <span>Folder</span> 
                            
                        </div>
                        <div className="doc-upload" onClick={() => triggerInputDocument.current.click()}>
                            {documentIcon} <span>Document Upload</span>
                            <input type="file" 
                                name='upload-a-document'
                                id='doc-upload'
                                ref={triggerInputDocument}
                                hidden
                                multiple
                            />
                        </div>
                        <div className="file-upload" onClick={() => triggerInputFile.current.click()}>
                            {fileUploadIcon} <span>File Upload</span> 
                            <input type="file" 
                                name='upload-a-file'
                                id='file-upload'
                                ref={triggerInputFile}
                                hidden
                                multiple
                            />
                        </div>
                        <div className="folder-upload" onClick={() => triggerInputFolder.current.click()}>
                            {folderUploadIcon} <span>Folder Upload</span> 
                            <input type="file" 
                                name='upload-a-folder'
                                id='folder-upload'
                                ref={triggerInputFolder}
                                hidden
                                multiple
                            />
                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default Upload
