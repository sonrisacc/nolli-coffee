// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class BeanCard extends Component {
  shouldComponentUpdate() {
    return false;
  }
  props: Bean;
  render() {
    return (
      <Link to={`/bean/${this.props.id}`}>
        <Wrapper>
          <Image
            alt={`${this.props.bean_name} BeanCard`}
            src={`${this.props.logo_url}`}
          />
          <div>
            <h3>{this.props.bean_name}</h3>
            <h4>{this.props.roast}</h4>
            <p>{this.props.price}</p>
          </div>
        </Wrapper>
      </Link>
    );
  }
}

export default BeanCard;
