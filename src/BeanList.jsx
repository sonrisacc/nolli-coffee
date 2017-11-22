// @flow
/* eslint no-console:0 */
import React, { Component } from 'react';
import axios from 'axios';
import BeanCard from './BeanCard';
import Header from './Header';

class BeanList extends Component {
  state = {
    searchTerm: '',
    beanList: this.props.beans,
  };

  componentDidMount() {
    axios
      .get('http://127.0.0.1:1337/beanlist')
      .then(resData => {
        this.setState({ beanList: resData.data });
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
    const beans = this.state.beanList.filter(
      cur =>
        `${cur.bean_name} ${cur.roast} ${cur.detail_url}`
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
