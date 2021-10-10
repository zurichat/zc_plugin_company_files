import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from "react-loader-spinner";
import {Link} from "react-router-dom";
import { BsGrid3X2 } from "react-icons/bs";
import { BsArrowUpDown } from "react-icons/bs";
import FolderIcon from '../svg/FolderIcon';
import BackBtn from '../svg/BackBtn';
import classes from '../RecentlyViewed.module.css'

function RecentlyViewedFolders() {
    const [folders, setFolders] = useState([])
    
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("/folders/recentlyViewed");
                setFolders(res.data);
            } catch (error) {
                console.log(error);
            }
        })();        
    }, [])

    const truncateString = (string, number) => {
        if (string.length <= number) {
            return string
        }
        return string.slice(0, number) + '...'
    }
    
    const goBack = () => {
        const currentState = history.state;
        history.pushState(currentState, '', '/companyfiles');
    }

    if (folders.length === 0) {
        return (
        <div className="tw-w-full tw-py-10 ">
            <div className="tw-h-48 tw-flex tw-items-center tw-justify-center">
            <Loader
                type="ThreeDots"
                color="#00B87C"
                height={100}
                width={100}
                visible="true"
            />
            </div>
        </div>
        );
    }

    return (
        <div className={classes.recentlyViewed}>
            <div className={classes.header}>
                <div className={classes.left}>
                    <div onClick={goBack}>
                        <BackBtn />
                    </div>
                    <span>Recently Opened Folders</span>
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
                    folders.map((folder, idx) => (
                        <div key={folder._id} className={classes.container}>
                            <div className={classes.icon} style={{background: '#FEF3C7'}}>
                                <FolderIcon />
                            </div>
                            <div className={classes.fileDetails}>
                                <div className={classes.fileName}>
                                    {truncateString(folder?.folderName, 9)}
                                </div>
                                <div className={classes.timeStamp}>
                                    {folder?.lastAccessed}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentlyViewedFolders