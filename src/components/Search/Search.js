import React, { Fragment } from "react";
import PropTypes from "prop-types";

export default function Search({ value, onHandleSearch }) {
  return (
    <Fragment>
      <input
        type="text"
        value={value}
        placeholder="Search"
        onChange={onHandleSearch}
      />
    </Fragment>
  );
}
Search.propTypes = {
  value: PropTypes.string.isRequired,
  onHandleSearch: PropTypes.func.isRequired,
};
