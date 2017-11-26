// @flow
import React from 'react';
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

const BeanCard = (props: Bean) => (
  <Link to={`/bean/${props.id}`}>
    <Wrapper>
      <Image alt={`${props.bean_name} BeanCard`} src={`${props.logo_url}`} />
      <div>
        <h3>{props.bean_name}</h3>
        <h4>{props.roast}</h4>
        <p>{props.price}</p>
      </div>
    </Wrapper>
  </Link>
);

export default BeanCard;
