import React, { Component } from 'react';
// import BeansData from '../exampleBeanData';

class BeanList extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

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
        <div />
      </div>
    );
  }
}
export default BeanList;
