import React, { useState, useEffect } from 'react'
import { BsArrowUpDown } from "react-icons/bs";
import { BsGrid3X2 } from "react-icons/bs";
import {Link} from "react-router-dom";
import axios from 'axios'
import VideoIcon from '../svg/VideoIcon';
import classes from '../RecentlyViewed.module.css'

function RecentlyViewedVideos() {
    const [images, setImages] = useState([])
    
    useEffect(() => {
        axios.get('https://companyfiles.zuri.chat/api/v1/files/recentlyViewedVideos')
        .then(res => {
            console.log('res', res.data)
            setImages(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    const goBack = () => {
        const currentState = history.state;
        history.pushState(currentState, '', '/companyfiles');
    }

    const backBtn = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12H4" stroke="#333333" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 18L4 12L10 6" stroke="#333333" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )

    console.log(images)
    return (
        <div className={classes.recentlyViewed}>
            <div className={classes.header}>
                <div className={classes.left}>
                    <div onClick={goBack}>
                        {backBtn}
                    </div>
                    <span>Recently Watched Videos</span>
                </div>
                <div className={classes.right}>
                    <BsArrowUpDown title="sort" className="tw-text-gray-400 tw-text-lg tw-mx-2 hover:tw-text-gray-500 tw-cursor-pointer" />
                    <BsGrid3X2 title="grid" className="tw-text-gray-400 tw-mx-2 tw-text-2xl hover:tw-text-gray-500 tw-cursor-pointer" />
                    <Link
                        to="/activities"
                        className="tw-mx-4 tw-py-2 tw-px-4 tw-bg-green-500 tw-text-white tw-text-sm tw-rounded hover:tw-bg-green-600"
                    >
                        See Activities
                    </Link>
                </div>
            </div>
            <div className={classes.body}>
                {
                    images.map((image, idx) => (
                        <div className={classes.container}>
                            <div className={classes.icon} style={{background: '#FFF0F0'}}>
                                <VideoIcon />
                            </div>
                            <div className={classes.fileDetails}>
                                <div className={classes.fileName}>
                                    {image.fileName}
                                </div>
                                <div className={classes.timeStamp}>
                                    {image.lastAccessed}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentlyViewedVideos