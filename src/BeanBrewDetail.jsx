// @flow
/* eslint no-console:0 */
import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Spinner from './Spinner';

class BeanBrewDetail extends Component {
  state = {
    detailData: {},
  };
  componentDidMount() {
    console.log('13', this.props.bean.id);
    axios
      .get(`http://127.0.0.1:1337/bean/${this.props.bean.id}`, {
        params: {
          id: this.props.bean.id,
        },
      })
      .then(resData => {
        console.log('line21', resData.data);
        this.setState({ detailData: resData.data });
      })
      .catch(err => console.error(err));
  }
  props: { bean: Bean };

  render() {
    console.log('line23', this.props.bean);
    let detailComponent;
    if (this.state.detailData) {
      detailComponent = (
        <div>
          <h3>Rating: {this.state.detailData.rating}</h3>
          <h4>Review:{this.state.detailData.detail_url}</h4>
          <h4>Review date:{this.state.detailData.review_date}</h4>
          <h4>Agtron: {this.state.detailData.agtron}</h4>
          <h4>Aroma: {this.state.detailData.aroma}</h4>
          <h4>Acidity: {this.state.detailData.acidity}</h4>
          <h4>With milk: {this.state.detailData.withMilk}</h4>
          <a href={this.state.detailData.brand_url}>
            <h4>Brand: {this.state.detailData.brand_name}</h4>
          </a>

          <h4>Origin: {this.state.detailData.origin}</h4>
          <h4>Location: {this.state.detailData.location}</h4>
          <p>Notes:{this.state.detailData.notes}</p>
        </div>
      );
    } else {
      detailComponent = <Spinner />;
    }
    return (
      <div className="BeanBrewDetail">
        <Header beanSearch />
        {/* <pre>
          <code>{JSON.stringify(this.props.bean, null, 4)}</code>
        </pre> */}
        <h1>{this.props.bean.bean_name}</h1>
        <h2>{this.props.bean.roast}</h2>
        <img
          src={this.props.bean.logo_url}
          alt={`thumbnail for ${this.props.bean.id}`}
        />
        {detailComponent}
      </div>
    );
  }
}

export default BeanBrewDetail;
