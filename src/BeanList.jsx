import React, { Component } from 'react';
import BeansData from '../exampleBeanData.json';
import BeanCard from './BeanCard';

class BeanList extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleFilterBeansInput = () =>
    BeansData.beans.filter(
      cur =>
        `${cur.name} ${cur.region} ${cur.description}`
          .toUpperCase()
          .indexOf(this.state.searchTerm.toUpperCase()) >= 0,
    );

  render() {
    return (
      <div className="beanList">
        <header>
          <h1>Search your beans!</h1>
          <input
            type="text"
            placeholder="Search"
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
          />
        </header>
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
