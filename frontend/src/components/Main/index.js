import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import Header from "../Help/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
import AllFolders from "../Home/Folder/AllFolders";
import AllFiles from "../Home/Files/AllFiles";
import ScrollRestoration from "../Subcomponents/ScrollRestoration";
import Parcel from "single-spa-react/parcel";
import { pluginHeader } from "@zuri/plugin-header";
import {
  getUserInfo,
  getWorkspaceUser,
  getWorkspaceUsers,
} from "../../actions/workspaceInfo";
import { useDispatch, useSelector } from "react-redux";
import MemberList from "../MembersList/MemberList";

const Main = () => {
  const headerConfig = {
    name: "#  Files",
    logo: "https://www.pngfind.com/pngs/m/19-194225_png-file-svg-hashtag-icon-png-transparent-png.png",
    thumbnailUrl: [
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg",
      "https://www.kemhospitalpune.org/wp-content/uploads/2020/12/Profile_avatar_placeholder_large.png",
    ],
    userCount: 300,
    eventTitle: () => {
      const currentState = history.state;
      history.pushState(currentState, "", "/companyfiles");
    },
    eventThumbnail: () => {
      //Block of code to be triggered on thumbnail click
    },
    hasThumbnail: true,
  };

  const dispatch = useDispatch();
  const { loading, error, users, user, info } = useSelector(
    (state) => state.rootReducer.workspaceReducer
  );
  console.log({ loading, error, users, user, info });

  useEffect(() => {
    (async () => {
      dispatch(getUserInfo());
      dispatch(getWorkspaceUser("billmal071@gmail.com")); //takes email as parameter
      dispatch(getWorkspaceUsers());
    })();
  }, []);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <Router basename="/companyfiles">
        <ScrollRestoration />
        <div className="tw-bg-white tw-h-full tw-flex tw-flex-1 tw-flex-col tw-items-center">
          <SearchBar />
          <Parcel
            config={pluginHeader}
            wrapWith="div"
            wrapStyle={{ width: "100%" }}
            headerConfig={headerConfig}
          />
          {/* <div className="block w-full h-11 bg-primary"></div> */}
          {/* <ComponentToTest /> */}

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/addNew" exact>
              <AddNewDoc />
            </Route>
            <Route path="/activities" exact>
              <Activities />
            </Route>
            <Route path="/all-files" exact>
              <AllFiles />
            </Route>
            <Route path="/all-folders" exact>
              <AllFolders />
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
            <Route path="/trash" exact>
              <TrashApp />
            </Route>
            <Route path="/help" exact>
              <Help />
            </Route>
            <Route path="/collaborators" exact>
              <Collaborators />
            </Route>
            <Route path="/member" exact>
              <MemberList />
            </Route>
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default Main;
