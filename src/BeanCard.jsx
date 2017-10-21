// @flow
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const BeanCard = (props: {
  name: string,
  region: string,
  thumbnail: string,
  description: string,
}) => (
  <Wrapper>
    <Image alt={`${props.name} BeanCard`} src={`${props.thumbnail}`} />
    <div>
      <h3>{props.name}</h3>
      <h4>({props.region})</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);

export default BeanCard;
