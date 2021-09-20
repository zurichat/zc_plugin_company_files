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
import ImagePreview from "../ImagePreview"
import FileUpload from "../Home"
// import VideoPreview from "../VideoPreview"
import PdfPreview from "../PdfPreview"

const Main = () => {
  return (
    <Router basename="/companyfiles">
      <div className="bg-gray-50 h-screen flex flex-1 flex-col items-center ">
        <SearchBar />
        {/* <div className="block w-full h-11 bg-primary"></div> */}
        {/* <ComponentToTest /> */}

        <Switch>
          <Route path="/files" exact>
            <Files />

          </Route>
          <Route path="/image">
            <ImagePreview />
          </Route>
          <Route path="/upload" exact>
            <FileUpload />
          </Route>
          <Route path="/singleSapa" exact>
            {/* <VideoPreview /> */}
          </Route>
          <Route path="/PdfPreview">
            <PdfPreview />
          </Route>
        </Switch>

      </div>
    </Router>
  );
};

export default Main;
