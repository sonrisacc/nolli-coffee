// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1 className="header">
      <Link to="/beanlist">Nolli-beans</Link>
    </h1>
  </header>
);

export default Header;
