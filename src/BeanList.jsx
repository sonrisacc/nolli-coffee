// @flow
/* eslint no-console:0 */
import React, { Component } from 'react';
import axios from 'axios';
import BeanCard from './BeanCard';
import Header from './Header';

class BeanList extends Component {
  state = {
    searchTerm: '',
    beanList: '',
  };

  componentDidMount() {
    axios
      .get('http://127.0.0.1:1337/beanlist')
      .then(resData => {
        this.setState({ beanList: resData.data });
        console.log('line 16', this.state.beanList);
      })
      .catch(err => console.log(err));
  }

  props: {
    beans: Array<Bean>,
  };

  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement },
  ) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleFilterBeansInput = () => {
    const beans = this.props.beans.filter(
      cur =>
        `${cur.name} ${cur.region} ${cur.description}`
          .toUpperCase()
          .indexOf(this.state.searchTerm.toUpperCase()) >= 0,
    );
    return beans || [];
  };

  render() {
    return (
      <div className="beanList">
        <Header
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.handleFilterBeansInput().map(curBean => (
            <BeanCard key={curBean.id} {...curBean} />
          ))}
        </div>
      </div>
    );
  }
}
export default BeanList;
