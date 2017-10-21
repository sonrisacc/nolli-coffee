// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>Nolli Coffee</h1>
    <Link to="/beanlist">Browse your bean collection!</Link>
  </div>
);

export default Landing;
