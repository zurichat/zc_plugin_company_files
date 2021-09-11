import React from 'react'
import Button from 'Components/Button'
import Styles from './FolderDescription.module.css'

export default function index() {
    const properties = {
        "Type": "Folder",
        "Location": "All Files",
        "Size": "28 MB",
        "Files": "18",
        "Owner": "me",
        "Modified": "12:39 by me",
        "Opened": "12:30 by me",
        "Created": "12:30 by me"
    }

    return (
        <div className={`flex flex-col ${Styles.folderDescription}`}>
            <div className="flex items-center">
                <h3 className="mr-auto">Daniel’s Folder</h3>
                <Button variant="outline-primary">Edit</Button>
            </div>
            <hr className="my-3" />
            <div className="p-8">
                <FolderIcon className="mx-auto" />
            </div>
            <hr className="my-3" />
            <div className="mt-2">
                <h4 className="mr-auto">Who has access</h4>
                <span className="flex items-center mt-2">
                    <LockIcon className="mr-2" />
                    <p>Not Shared</p>
                </span>
            </div>
            <div className="mt-8">
                <h4 className="mr-auto">Properties</h4>
                <table>
                    {Object.entries(properties).map(([key, value], i) => (
                        <tr className="mb-5" key={i}>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className="flex items-center mt-3">
                <p className="mr-auto">Add a description</p>
                <EditIcon />
            </div>
        </div>
    )
}

function FolderIcon({className}) {
    return (
        <svg className={className} width="113" height="102" viewBox="0 0 113 102" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clipRule="evenodd" d="M112.557 90.2132C112.557 96.3804 107.558 101.38 101.391 101.38H12.0573C5.89011 101.38 0.890625 96.3804 0.890625 90.2132V12.0466C0.890625 5.87937 5.89011 0.879883 12.0573 0.879883H39.974L51.1406 17.6299H101.391C107.558 17.6299 112.557 22.6294 112.557 28.7966V90.2132Z" fill="#FFC107"/>
        </svg>
    )
}

function LockIcon({className}) {
    return (
        <svg className={className} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.19922 10.193C3.19922 9.51538 3.74853 8.96606 4.42614 8.96606H15.4723C16.1499 8.96606 16.6992 9.51538 16.6992 10.193V15.9891C16.6992 16.6668 16.1499 17.2161 15.4723 17.2161H4.42614C3.74853 17.2161 3.19922 16.6668 3.19922 15.9891V10.193Z" stroke="#999999" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.19922 8.96594V5.96594C6.19922 3.89487 7.87815 2.21594 9.94922 2.21594C12.0203 2.21594 13.6992 3.89487 13.6992 5.96594V8.96594" stroke="#999999" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

function EditIcon({className}) {
    return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.30859 1.59692L11.8086 4.09692L4.93359 10.9719H2.43359V8.47192L9.30859 1.59692V1.59692Z" stroke="#999999" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.43359 14.0969H13.6836" stroke="#999999" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
