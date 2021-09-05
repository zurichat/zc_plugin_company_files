import React, { useState } from 'react';
import styles from './videopreview.module.css';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faDownload, faEllipsisV, faPhotoVideo } from '@fortawesome/free-solid-svg-icons'

function VideoPreview() {

    const [videoPreview, setVideoPreview] = useState(false);


    const files = [
        {
            url: 'https://www.youtube.com/watch?v=X8YVLMuasGQ',
            filetype: 'video',
            name: 'video 1'
        }
    ]




    return (
        <>
            <div className={styles.demoContainer}>
                {files.map((file, i) => (
                        <File key={i} name={file.name} url={file.url} videoPreview={videoPreview} onClick={() => setVideoPreview(!videoPreview)} />
                ))}
            </div>
        </>
    )
}

export default VideoPreview


function FileIcon() {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8962 2.54199H6.89624C5.79167 2.54199 4.89624 3.43742 4.89624 4.54199V20.542C4.89624 21.6466 5.79167 22.542 6.89624 22.542H18.8962C20.0008 22.542 20.8962 21.6466 20.8962 20.542V8.54199L14.8962 2.54199Z" stroke="#5783CE" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.8962 2.54199V8.54199H20.8962" stroke="#5783CE" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.8962 13.542H8.89624" stroke="#5783CE" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.8962 17.542H8.89624" stroke="#5783CE" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.8962 9.54199H9.89624H8.89624" stroke="#5783CE" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function File({ url, name, onClick, videoPreview }) {

    return (
        <>
            <div className={styles.file} onClick={onClick}>
                <div className={styles.fileIcon}>
                    <FileIcon />
                </div>
                <div className={styles.fileDetails}>
                    <p>{name}</p>
                    <p>Added Today</p>
                </div>
            </div>
            <VideoPlayer
                videoPreview={videoPreview}
                setVideoPreview={onClick}
                url={url}
                name={name}
            />
        </>
    )
}

function VideoPlayer({ videoPreview, setVideoPreview, url, name }) {
    return (
        videoPreview && <div className={styles.videopreviewOverlay}>
            <div className={styles.videopreviewTopbar}>
                <div className='videopreview_topbarleft'>
                    <FontAwesomeIcon onClick={() => setVideoPreview(!videoPreview)} className='icon' icon={faArrowLeft} inverse />
                    <FontAwesomeIcon className='icon' icon={faPhotoVideo} inverse />
                    <span>{name}</span>
                </div>
                <div className='videopreview_topbarright'>
                    <FontAwesomeIcon className='icon' icon={faDownload} inverse />
                    <FontAwesomeIcon className='icon' icon={faEllipsisV} inverse />

                </div>

            </div>
            <div className={styles.videopreviewContainer}>
                <ReactPlayer
                    width='906px'
                    height='504px'
                    url={url}
                    controls
                />
            </div>

        </div>

    )
}
