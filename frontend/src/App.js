import './App.css';
import Sidebar from './components/SideBar/Sidebar';
import RecentlyViewed from './components/RecentlyViewed/RecentlyViewed';
import Files from './components/Files/Files';
import Folder from './components/Folder/Folder';
import SearchBar from './components/SearchBar/SearchBar';
import Activities from './components/Activities/Activities';
import TotalSpace from './components/TotalSpace/TotalSpace';
import Upload from './components/Upload/Upload';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex font-lato bg-bg-lightGrey">
        <Sidebar />
        <div className="main">
          <div className="">Top items and Search Component <SearchBar /></div>
          <Switch>
            <Route path="/activities" component={Activities} />
            <Route path="/recently-viewed" component={RecentlyViewed} />
            <Route path="/files" component={Files} />
            <Route path="/folder" component={Folder} />
            <Route path="/total-space" component={TotalSpace} />
            <Route path="/upload" component={Upload} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
