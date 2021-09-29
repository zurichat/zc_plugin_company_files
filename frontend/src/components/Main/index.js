import React from "react";
import SearchBar from "../SearchBar";
import Header from '../Help/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Files from "../Home/Files";
import AllFiles from "../allFiles/index";
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
    <Router basename="/companyfiles">
      <div className="tw-bg-white tw-h-full tw-flex tw-flex-1 tw-flex-col tw-items-center tw-overflow-y-auto ">
        <SearchBar />
        <Header />
        {/* <div className="block w-full h-11 bg-primary"></div> */}
        {/* <ComponentToTest /> */}

        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          {/* <Route path="/add-new" exact>
            <AddNewTextDoc />
          </Route> */}
          <Route path="/add-new" exact>
            <AddNewDoc />
          </Route>
          <Route path="/activities" exact>
            <Activities />
          </Route>
          <Route path="/files" exact>
            <Files />
          </Route>
          <Route path="/allfiles" exact>
            <AllFiles />
          </Route>
          <Route path="/test" exact>
            <Test />
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
          <Route path="/help/" exact>
            <Help />
          </Route>
          <Route path="/collaborators/" exact>
            <Collaborators />
          </Route>
        </Switch>
      </div>
    </Router>
    </ErrorBoundary>
  );
};

export default Main;
