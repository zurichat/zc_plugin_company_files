import React, { useState, useEffect } from 'react'
import { BsArrowUpDown } from "react-icons/bs";
import { BsGrid3X2 } from "react-icons/bs";
import {Link} from "react-router-dom";
import axios from 'axios'
import ZippedIcon from '../svg/zippedIcon';
import classes from '../RecentlyViewed.module.css'
import { format } from "timeago.js";

function RecentlyViewedZip() {
    return (
        <div className={classes.recentlyViewed}>
            <div className={classes.header}>
                <div className={classes.left}>
                    <div onClick={goBack}>
                        {backBtn}
                    </div>
                    <span>Compressed</span>
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
                            <div className={classes.icon} style={{background: '#FFE0F6'}}>
                                <ZippedIcon />
                            </div>
                            <div className={classes.fileDetails}>
                                <div className={classes.fileName}>
                                    {image.fileName}
                                </div>
                                <div className={classes.timeStamp}>
                                    {format(image.lastAccessed)}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentlyViewedZip