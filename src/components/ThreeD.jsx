import React from "react";
import styled from "styled-components";

const ThreeSixty = styled.input`
  right: 15%;
  top: 80%;
  position: absolute;
  width: 26%;

  @media (orientation: portrait) {
    top: 85%;
    left: 24%;
    position: absolute;
    width: 55%;
  }
`;

export default ThreeSixty;
