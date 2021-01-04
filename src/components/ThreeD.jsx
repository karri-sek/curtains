import React from "react";
import styled from "styled-components";

const ThreeSixty = styled.input`
  right: 11%;
  top: 80%;
  position: absolute;
  width: 26%;

  @media (orientation: portrait) {
    top: 85%;
    left: 30%;
    position: absolute;
    width: 55%;
  }
`;

export default ThreeSixty;
