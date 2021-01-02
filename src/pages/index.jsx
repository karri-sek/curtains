import { css } from "@emotion/core";
import { graphql } from "gatsby";
import { Parser } from "html-to-react";
import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const container = css`
  .wrap-img {
    position: relative;
    height: 100vh;
    width: 100vh;
    background-image: url("../files/image023.png");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .wrap-img h2 {
    color: blue;
  }
`;

const Wrapper = styled.section`
  position: relative;
  background-size: cover;
  height: 100vh;
  background-image: url(${props=>props.url});
  background-position: 50% 50%;
  background-repeat: no-repeat;

`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const ToplineImg = styled.img`
  top:10%;
  right: 33%;
  left: 32%;
  width:33%;
  height: 0.3%;
  position: absolute;
  src: (${props=>props.url});
`;
const htmlToReactParser = new Parser();

export default (props) => {
  const { data } = props;
  console.log(">>",data);
  const { url } = data.prismicBlogpost.data.topline;
  const backgroundURL = data.prismicBlogpost.data.background_image.url;
  console.log(backgroundURL);

  return (
    <Layout>
    <Wrapper url={backgroundURL}>
      <ToplineImg url={url}></ToplineImg>
    </Wrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    prismicBlogpost {
      data {
        brochure_logo {
          alt
          copyright
          url
        }
        name {
          html
          text
        }
        topline {
          alt
          copyright
          url
        }
        background_image {
        alt
        copyright
        url
      }
      }
    }
  }
`;
