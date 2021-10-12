import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import Header from "../Help/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import FileUpload from "../Home/index";
import Home from "../Home";

import NewFolder from "../FolderCreation/Folder";
import TrashApp from "../TrashListView/Trash";
import Starred from "../Starred/index";
import Activities from "../Activities/Activities";
import RecentlyViewedDocs from "../RecentlyViewed/RecentlyViewedDocs/RecentlyViewedDocs";
import RecentlyViewedImg from "../RecentlyViewed/RecentlyViewedImg/RecentlyViewedImg";
import RecentlyViewedVid from "../RecentlyViewed/RecentlyViewedVid/RecentlyViewedVid";
import RecentlyViewedZip from "../RecentlyViewed/RecentlyViewedZip/RecentlyViewedZip";
import RecentlyViewedFolders from "../RecentlyViewed/RecentlyViewedFolders/RecentlyViewedFolders";
import AddNewDoc from "../AddNewDoc/AddNewDoc";
import Security from "../security/Security";

import Test from "../ComponentToTest";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../Error/ErrorFallback";

import Help from "../Help/index";
import Collaborators from "../Collaborators/Collaborators";
import AllFolders from "../Home/Folder/AllFolders";
import AllFiles from "../Home/Files/AllFiles";
import AllTheFiles from "../OpenFolder/Files/AllFiles";
import ScrollRestoration from "../Subcomponents/ScrollRestoration";
import Parcel from "single-spa-react/parcel";
import { pluginHeader } from "@zuri/plugin-header";
import {
  getUserInfo,
  getWorkspaceUser,
  getWorkspaceUsers,
} from "../../actions/workspaceInfo";
import { useDispatch, useSelector } from "react-redux";

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
        <div className="tw-bg-white tw-h-full tw-flex tw-flex-1 tw-flex-col tw-items-center md:tw-ml-2">
          {/* <SearchBar /> */}
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
            <Route path="/recently-viewed-docs" exact>
              <RecentlyViewedDocs />
            </Route>
            <Route path="/recently-viewed-images" exact>
              <RecentlyViewedImg />
            </Route>
            <Route path="/recently-viewed-videos" exact>
              <RecentlyViewedVid />
            </Route>
            <Route path="/recently-viewed-zips" exact>
              <RecentlyViewedZip />
            </Route>
            <Route path="/recently-viewed-folders" exact>
              <RecentlyViewedFolders />
            </Route>
            <Route path="/open-folder" exact>
              <AllTheFiles />
            </Route>
            <Route path="/security" exact>
              <Security />
            </Route>
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default Main;
