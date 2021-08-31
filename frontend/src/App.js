import React from "react"
import './App.css';
import Sidebar from './components/SideBar/Sidebar';
import RecentlyViewed from './components/RecentlyViewed/RecentlyViewed';
import Files from './components/Files/Files';
import Folder from './components/Folder/Folder';
import SearchBar from './components/SearchBar/SearchBar';
import Activities from './components/Activities/Activities';
import TotalSpace from './components/TotalSpace/TotalSpace';
import Upload from './components/Upload/Upload';

function App() {
  return (
    <div className="App">
      <Sidebar/> 
      <div className="main">
          <div >Top items and Search Component <SearchBar/></div>
          <div>
            <RecentlyViewed/>
            <Folder/>
            <Files/>
          </div>
          <div>
            <TotalSpace/>
            <Activities/>
            <Upload/>
         </div>
      </div>
    </div>
  );
}

export default App;
