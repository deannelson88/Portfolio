/* eslint-disable import/no-named-as-default */
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import Layout from "../layout/Layout";

const App = () => {
  return (
    <Layout />
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
