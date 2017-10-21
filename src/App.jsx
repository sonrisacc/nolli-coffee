// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import BeanList from './BeanList';
import PageNotFound from './PageNotFound';
import BeanBrewDetail from './BeanBrewDetail';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/beanlist" component={BeanList} />
        <Route path="/bean/:id" component={BeanBrewDetail} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
