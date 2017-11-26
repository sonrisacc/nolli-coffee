// @flow
/* eslint no-console:0 */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import type { Match } from 'react-router-dom';
import axios from 'axios';

import Landing from './Landing';
import BeanList from './BeanList';
import PageNotFound from './PageNotFound';
import BeanBrewDetail from './BeanBrewDetail';

// import BeansData from './../db/seeds/exampleBeanData.json';

class App extends Component {
  state = {
    beanList: [],
  };
  componentDidMount() {
    axios
      .get('http://127.0.0.1:1337/beanlist')
      .then(resData => {
        console.log('line24', resData.data.length);
        this.setState({ beanList: resData.data });
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              path="/beanlist"
              component={props => (
                <BeanList beans={this.state.beanList} {...props} />
              )}
            />
            <Route
              path="/bean/:id"
              component={props => (
                <BeanBrewDetail
                  bean={this.state.beanList.find(
                    cur => Number(props.match.params.id) === Number(cur.id),
                  )}
                  queryId={props.match.params.id}
                  {...props}
                />
              )}
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
