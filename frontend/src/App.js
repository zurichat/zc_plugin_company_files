import "@fortawesome/fontawesome-svg-core/styles.css";
import store from "./store/store";
import { Provider } from "react-redux";

import Layout from "./components/Layout";
import Main from "./components/Main";
import React from "react";
import "./App.css";
import axios from "axios";

const API_URL = window.location.hostname.includes('localhost') || window.location.hostname.includes('127.0.0.1')
  ? 'http://localhost:5500/api/v1'
  : 'https://companyfiles.zuri.chat/api/v1';
axios.defaults.baseURL = API_URL;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function Home() {
  return (
    <Provider store={store}>
      <Layout>
        <Main />
      </Layout>
    </Provider>
  );
}
