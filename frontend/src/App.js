import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Activities from "./components/Activities/Activities";
import AddNewTextDoc from "./components/AddNewTextDoc/AddNewTextDoc";
import AllFiles from "./components/All files/AllFiles";
import Favourites from "./components/Favourites/Favourites";
import FilePreviewDemo from "./FilePreview/Demo";
import Folder from "./components/Folder/Folder";
import FolderListView from "./components/FolderAllFileListView/FolderTableList/FolderAllFileListView";
import Help from "./components/Help/Help";
// import Sidebar from './components/SideBar/Sidebar'//
import Home from "./components/Home/Home";
import Shared from "./components/Shared/Shared";
import Trash from "./components/Trash/Trash";
import Upload from "./components/Upload/Upload";
import VideoPreview from "./components/VideoPreview/VideoPreview";

function App() {
  return (
    <Router>
      <div className="App font-lato">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/files">
            <AllFiles />
          </Route>
          <Route path="/shared">
            <Shared />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/trash">
            <Trash />
          </Route>
          <Route path="/folder">
            <Folder />
          </Route>
          <Route path="/add-new">
            <AddNewTextDoc />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/Activities">
            <Activities />
          </Route>
          <Route path="/fileviewer">
            <FilePreviewDemo />
          </Route>
          <Route path="/folder-list-view">
            <FolderListView />
          </Route>
          <Route path="/videopreview">
            <VideoPreview />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
