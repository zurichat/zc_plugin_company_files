import './App.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Activities from './components/Activities/Activities'
import AllFiles from './components/All files/AllFiles'
import Favourites from './components/Favourites/Favourites'
import Help from './components/Help/Help'
import Shared from './components/Shared/Shared'
import Trash from './components/Trash/Trash'
import Folder from './components/Folder/Folder'
import FilePreviewDemo from './FilePreview/Demo'
// import Sidebar from "./components/SideBar/Sidebar";
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <div className="App font-lato flex">
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
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/Activities">
            <Activities />
          </Route>
          <Route path="/fileviewer">
            <FilePreviewDemo />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
