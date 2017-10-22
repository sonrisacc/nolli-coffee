// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props: {
  beanSearch?: boolean,
  searchTerm?: string,
  handleSearchTermChange?: Function,
}) => {
  let utliSpace;
  if (props.beanSearch) {
    utliSpace = (
      <h2>
        <Link to="/beanlist">back</Link>
      </h2>
    );
  } else {
    utliSpace = (
      <input
        type="text"
        placeholder="Search"
        onChange={props.handleSearchTermChange}
        value={props.searchTerm}
      />
    );
  }
  return (
    <header>
      <h5 className="header">
        <Link to="/">Nolli-Coffee</Link>
      </h5>
      {utliSpace}
    </header>
  );
};
Header.defaultProps = {
  beanSearch: false,
  handleSearchTermChange: function anony() {},
  searchTerm: '',
};
export default Header;
