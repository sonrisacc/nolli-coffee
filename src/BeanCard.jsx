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

const BeanCard = (props: Bean) => (
  <Wrapper>
    <Image alt={`${props.bean_name} BeanCard`} src={`${props.logo_url}`} />
    <div>
      <h3>{props.bean_name}</h3>
      <h4>({props.roast})</h4>
      <p>{props.notes}</p>
    </div>
  </Wrapper>
);

export default BeanCard;
