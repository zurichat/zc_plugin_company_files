import React from 'react'
import RecentlyViewed from '../RecentlyViewed/RecentlyViewed'
import Folder from '../Folder/Folder'
import Files from '../Files/Files'
function Home() {
  return (
    <div className="">
      <RecentlyViewed />

      <Folder />

      <Files />
    </div>
  )
}

export default Home
