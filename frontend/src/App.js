import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Activities from "./components/Activities/Activities";
import AllFiles from "./components/All files/AllFiles";
import Favourites from "./components/Favourites/Favourites";
import Help from "./components/Help/Help";
import Shared from "./components/Shared/Shared";
import Sidebar from "./components/SideBar/Sidebar";
import Trash from "./components/Trash/Trash";

function App() {
  return (
    <Router>
      <div className="App font-lato flex">
        {/* <Sidebar /> */}
        <Switch>
          <Route exact path="/">
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
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/Activities">
            <Activities />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
