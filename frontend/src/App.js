/* eslint-disable react/jsx-filename-extension */
import "@fortawesome/fontawesome-svg-core/styles.css";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import Layout from "./components/Layout";
import Main from "./components/Main";
import "./App.css";
import { getUserInfo } from "./actions/workspaceInfo";
import store from "./store/store";

const API_URL =
  window.location.hostname.includes("localhost") ||
  window.location.hostname.includes("127.0.0.1")
    ? "http://localhost:5500/api/v1"
    : "https://companyfiles.zuri.chat/api/v1";
axios.defaults.baseURL = API_URL;
const { info } = store.getState().rootReducer.workspaceReducer;
axios.defaults.headers.common.Authorization = `Bearer ${info?.token}`;
axios.defaults.headers.userObject = {
  userName:
    typeof info === "object" &&
    info !== null &&
    info !== {} &&
    info[0]?.user_name,
  imageUrl:
    typeof info === "object" &&
    info !== null &&
    info !== {} &&
    info[0]?.img_url,
  userId:
    // eslint-disable-next-line no-underscore-dangle
    typeof info === "object" && info !== null && info !== {} && info[0]?._id,
  userEmail:
    typeof info === "object" && info !== null && info !== {} && info[0]?.email,
  userOrgId:
    typeof info === "object" && info !== null && info !== {} && info[0]?.org_id,
};
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(getUserInfo());
    })();
  }, []);

  return (
    <Layout>
      <Main />
    </Layout>
  );
}
