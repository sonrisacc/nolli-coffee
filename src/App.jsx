import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import BeanList from './BeanList';
import PageNotFound from './PageNotFound';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/beanlist" component={BeanList} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
