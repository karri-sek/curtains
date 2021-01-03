import React from "react";
import styled from "styled-components";

const LogoDescription = styled.p`
  left: 22%;
  top: 49%;
  position: absolute;
  width: 18%;
  max-width: 34vh;
  text-transform: uppercase;
  color: white;
  background: transparent;
  font-size: 1em;
  letter-spacing: 0px;

  @media (orientation: portrait) {
    top: 28%;
    left: 30%;
    width: 40%;
    position: absolute;
    font-size: 0.6em;
    line-height: 17px;
    padding:0;
    margin:0;
  }
`;

export default LogoDescription;
