// @flow
/* eslint no-console:0 */
import React, { Component } from 'react';
import BeanCard from './BeanCard';
import Header from './Header';

class BeanList extends Component {
  state = {
    searchTerm: '',
  };

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
        `${cur.bean_name} ${cur.roast} ${cur.detail_url}`
          .toUpperCase()
          .indexOf(this.state.searchTerm.toUpperCase()) >= 0,
    );
    return beans || [];
  };

  render() {
    console.log(this.props.beans);
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
