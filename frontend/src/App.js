import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Sidebar from './components/SideBar/Sidebar';
import AllFiles from './components/All files/AllFiles';
import Favourites from './components/Favourites/Favourites';
import Shared from './components/Shared/Shared';
import Trash from './components/Trash/Trash';
import Help from './components/Help/Help';
import TotalSpace from './components/TotalSpace/TotalSpace'; 

function App() {
  return (
    <Router>
    <div className="App">
    <Sidebar/> 
        <Switch>
          <Route exact path = "/">
            <AllFiles/>
            <TotalSpace/>
          </Route>
          <Route path = '/shared'>
            <Shared/>
          </Route>
          <Route path = '/favourites'>
            <Favourites/>
          </Route>
          <Route path = '/Trash'>
            <Trash/>
          </Route>
          <Route path = '/Help'>
           <Help/>
          </Route>
        </Switch>
    </div>
</Router>
  );
}

export default App;
