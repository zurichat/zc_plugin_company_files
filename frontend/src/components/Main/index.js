import ComponentToTest from "../ComponentToTest";
import React from "react";
import SearchBar from "../SearchBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Files from "../Home/Files"

const Main = () => {
  return (
    <Router>
      <div className="bg-gray-50 h-screen flex flex-1 flex-col items-center ">
        <SearchBar />
        {/* <div className="block w-full h-11 bg-primary"></div> */}
        {/* <ComponentToTest /> */}

        <Switch>
          <Route path="/files">
            <Files />
            {/* <About /> */}
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>

      </div>
    </Router>
  );
};

export default Main;
