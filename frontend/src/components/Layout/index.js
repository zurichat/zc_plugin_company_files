import PropTypes from "prop-types";
import React from "react";
import SnackbarProvider from 'react-simple-snackbar';

const Layout = ({ children }) => {
  return (
    <SnackbarProvider>
      <div className='tw-flex tw-items-center tw-justify-center tw-min-h-screen'>
        <div>
          <title>Company Files</title>
          <link rel='icon' href='/favicon.ico' />
          <script src='/frontend/src/components/Collaborators/PermissionSelector.js'></script>
        </div>

        <main className='tw-flex tw-flex-start tw-items-center tw-justify-center tw-w-full'>
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
    </SnackbarProvider>
  );
};
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;