import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "./components/Layout";
import Main from "./components/Main";
import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { getUserInfo } from "./actions/workspaceInfo";
import { useDispatch, useSelector } from "react-redux";
import store from "./store/store";

const API_URL =
  window.location.hostname.includes("localhost") ||
  window.location.hostname.includes("127.0.0.1")
    ? "http://localhost:5500/api/v1"
    : "https://companyfiles.zuri.chat/api/v1";
axios.defaults.baseURL = API_URL;
const info = store.getState().rootReducer.workspaceReducer.info;
axios.defaults.headers.common["Authorization"] = `Bearer ${info?.token}`;
axios.defaults.headers.userObj = {
  userName: typeof info === "object" && info !== null && info !== {} && info[0]?.user_name,
  imageUrl: typeof info === "object" && info !== null && info !== {} && info[0]?.img_url,
  userId: typeof info === "object" && info !== null && info !== {} && info[0]?._id,
};
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function Home() {
  const dispatch = useDispatch();
  const { loading, error, info } = useSelector(
    (state) => state.rootReducer.workspaceReducer
  );

  useEffect(() => {
    (async () => {
      try {
        dispatch(getUserInfo());
      } catch (err) {
        throw err;
      }
    })();
  }, []);

  return (
    <Layout>
      <Main />
    </Layout>
  );
}
