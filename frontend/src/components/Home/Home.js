import React from 'react'
import RecentlyViewed from '../RecentlyViewed/RecentlyViewed'
import Folder from '../Folder/Folder'
import Files from '../Files/Files'
import SearchBar from '../SearchBar/SearchBar'
function Home() {
  return (
    <div className="">
      <SearchBar />
      <RecentlyViewed />

      <Folder />

      <Files />
    </div>
  )
}

export default Home
