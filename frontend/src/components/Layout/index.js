import PropTypes from "prop-types";
import React from "react";
import SnackbarProvider from "react-simple-snackbar";

const Layout = ({ children }) => {
  return (
    <SnackbarProvider>
      <div className="tw-flex tw-justify-center tw-min-h-screen">
        <main className="tw-flex tw-flex-start tw-items-center tw-justify-center tw-w-full">
          {children}
        </main>
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
