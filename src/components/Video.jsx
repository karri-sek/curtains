import React from "react";
import styled from "styled-components";

const Video = styled.input`
  right: 14%;
  top: 65%;
  position: absolute;
  width: 32%;

  @media (orientation: portrait) {
    top: 80%;
    left: 22%;
    position: absolute;
    width: 52%;
  }
`;

export default Video;
