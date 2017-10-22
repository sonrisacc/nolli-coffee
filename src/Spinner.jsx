// @flow
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  animation: : ${spin} 4s infinite linear
`;

const Spinner = () => (
  <Image
    src="https://maxcdn.icons8.com/Share/icon/User_Interface//spinner_frame_11600.png"
    alt="loading indicator"
  />
);

export default Spinner;
