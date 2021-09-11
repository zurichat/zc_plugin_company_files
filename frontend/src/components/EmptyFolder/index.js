import React from 'react'
import Styles from './EmptyFolder.module.css'

export default function EmptyFolder() {
    return (
        <div className={`flex flex-col items-center mx-auto ${Styles.EmptyFolder}`}>
            <FolderIcon className="mb-8"/>
            <h3 className="mb-2">There are no files in Daniel’s Folder</h3>
            <p>Drop files here or use the add new button</p>
        </div>
    )
}

function FolderIcon({className}) {
    return (
        <svg className={className} width="76" height="94" viewBox="0 0 76 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M42.2624 1.43774H10.496C5.48343 1.43774 1.41992 5.50125 1.41992 10.5138V83.1227C1.41992 88.1352 5.48343 92.1988 10.496 92.1988H64.9526C69.9652 92.1988 74.0287 88.1352 74.0287 83.1227V33.2041L42.2624 1.43774Z" stroke="#999999" strokeWidth="2.23" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M42.2637 1.43774V33.2041H74.03" stroke="#999999" strokeWidth="2.23" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M37.7285 78.9958V46.8177" stroke="#999999" strokeWidth="2.23" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M25.6602 58.8849L37.7269 46.8181L49.7937 58.8849" stroke="#999999" strokeWidth="2.23" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}