import PropTypes from "prop-types";
// import Head from "next/head";
import React from "react";
// import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <title>Company files</title>
        <link rel="icon" href="/favicon.ico" />
      </div>

      {/* <Sidebar /> */}
      <main className="flex flex-start items-center justify-center w-full">
        {children}
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
    <a
      className="flex items-center justify-center"
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{" "}
      <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
    </a>
  </footer> */}
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
