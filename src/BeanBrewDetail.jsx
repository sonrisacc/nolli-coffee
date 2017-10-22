// @flow
import React, { Component } from 'react';
import Header from './Header';
// import Spinner from './Spinner';

class BeanBrewDetail extends Component {
  state = {};
  componentDidMount() {}
  props: { bean: Bean };

  render() {
    const {
      id,
      name,
      region,
      thumbnail,
      description,
      detail,
    } = this.props.bean;
    return (
      <div className="BeanBrewDetail">
        <Header beanSearch />
        {/* <pre><code>{JSON.stringify(props, null, 4)}</code></pre> */}
        <h1>{name}</h1>
        <h2>{region}</h2>
        <h4>{description}</h4>
        <img src={thumbnail} alt={`thumbnail for ${id}`} />
        <p>{detail}</p>
      </div>
    );
  }
}

export default BeanBrewDetail;
