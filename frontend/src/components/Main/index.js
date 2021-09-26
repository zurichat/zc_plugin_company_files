import React from "react";
import SearchBar from "../SearchBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Files from "../Home/Files";
import FileUpload from "../Home/index";
import Home from "../Home";

import NewFolder from "../FolderCreation/Folder";
import TrashApp from "../TrashListView/TrashApp";
import Starred from "../Starred/index";
import Activities from "../Activities/Activities";
import AddNewDoc from "../AddNewDoc/AddNewDoc";

import Test from "../ComponentToTest";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../Error/ErrorFallback";

import Help from "../Help/index";
import Collaborators from "../Collaborators/Collaborators";


const Main = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <Router basename="/">
        <div className="bg-gray-50 h-screen flex flex-1 flex-col items-center overflow-y-auto ">
          <SearchBar />
          {/* <div className="block w-full h-11 bg-primary"></div> */}
          {/* <ComponentToTest /> */}

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/add-new" exact>
              <AddNewDoc />
            </Route>
            <Route path="/activities" exact>
              <Activities />
            </Route>
            <Route path="/files" exact>
              <Files />
            </Route>
            <Route path="/test" exact>
              <Test />
            </Route>
            <Route path="/files" exact>
              <Files />
            </Route>
            <Route path="/starred" exact>
              <Starred />
            </Route>
            <Route path="/upload" exact>
              <FileUpload />
            </Route>
            <Route path="/newfolder" exact>
              <NewFolder />
            </Route>
            <Route path="/trashapp" exact>
              <TrashApp />
            </Route>
            <Route path="/help" exact>
              <Help />
            </Route>
            <Route path="/collaborators" exact>
              <Collaborators />
            </Route>
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default Main;
