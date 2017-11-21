// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import type { Match } from 'react-router-dom';

import Landing from './Landing';
import BeanList from './BeanList';
import PageNotFound from './PageNotFound';
import BeanBrewDetail from './BeanBrewDetail';

import BeansData from './../db/seeds/exampleBeanData.json';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          path="/beanlist"
          component={props => <BeanList beans={BeansData.beans} {...props} />}
        />
        <Route
          path="/bean/:id"
          component={(props: { match: Match }) => (
            <BeanBrewDetail
              bean={BeansData.beans.find(
                cur => props.match.params.id === cur.id,
              )}
              {...props}
            />
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
