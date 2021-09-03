import React from 'react';
import RecentlyViewed from "../RecentlyViewed/RecentlyViewed";
import Files from "../Files/Files";
import Folder from "../Folder/Folder";

function Home() {
    return (
        <div>
            <RecentlyViewed/>
            <Folder/>
            <Files/>
        </div>
    )
}

export default Home
