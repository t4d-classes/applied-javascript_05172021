import React from "react";
import PropTypes from "prop-types";

export const ToolHeader = ({ headerText }) => {
  return (
    <header>
      <h1>{headerText}</h1>
      <h2>React and DevOps is cool!</h2>
    </header>
  );
};

ToolHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
};
