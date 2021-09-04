import React, { useState } from 'react'
import styles from './FilePreview.module.css'
import FilePreview from './FilePreview'

export default function Demo() {
    const [ previewVisible, setPreviewVisible ] = useState(false)
    const [ activePreview, setActivePreview ] = useState(1)

    const files = [
        {
            url: 'https://placekitten.com/1500/1500',
            fileType: 'image',
            name: 'image1'
        },
        {
            url: 'https://placekitten.com/1500/2000',
            fileType: 'image',
            name: 'image2'
        },
    ]

    const showInPreview = (i) => {
        i && setActivePreview(i);
        setPreviewVisible(true);
    }

    return (
        <>
            <div className={styles.demoContainer}>
                {files.map((file, i) => (
                    <File key={i} name={file.name} onClick={() => showInPreview(i)} />
                ))}
            </div>
            <FilePreview activeSlide={activePreview} visible={previewVisible} files={files} hidePreview={() => setPreviewVisible(false)} />
        </>
    )
}


function FileIcon() {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8962 2.54199H6.89624C5.79167 2.54199 4.89624 3.43742 4.89624 4.54199V20.542C4.89624 21.6466 5.79167 22.542 6.89624 22.542H18.8962C20.0008 22.542 20.8962 21.6466 20.8962 20.542V8.54199L14.8962 2.54199Z" stroke="#5783CE" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.8962 2.54199V8.54199H20.8962" stroke="#5783CE" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.8962 13.542H8.89624" stroke="#5783CE" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.8962 17.542H8.89624" stroke="#5783CE" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.8962 9.54199H9.89624H8.89624" stroke="#5783CE" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

function File({ url, fileType, name, onClick }) {

    return (
        <div className={styles.file} onClick={onClick}>
            <div className={styles.fileIcon}>
                <FileIcon />
            </div>
            <div className={styles.fileDetails}>
                <p>{name}</p>
                <p>Added Today</p>
            </div>
        </div>
    )
}