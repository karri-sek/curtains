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
  background-image: url(${(props) => props.url});
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const ToplineImg = styled.img`
  top: 10%;
  right: 33%;
  left: 32%;
  width: 33%;
  height: 0.3%;
  position: absolute;
`;

const TopLineR = styled.img`
  top: 10%;
  left: 5%;
  width: 7%;
  height: 0.3%;
  position: absolute;
`;

const TopLineL = styled.img`
  top: 10%;
  right: 8%;
  width: 7%;
  height: 0.3%;
  position: absolute;
`;

const LogoImg = styled.div`
  left: 19%;
  top: 30%;
  position: absolute;
  width: 29%;
  height: 210px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
`;

const LinkedInLogo = styled.input`
  left: 20%;
  font-family: Arial;
  fontSize: 2.4vw;
  color: black;
  top: 7%;
  height: 6%;
  position: absolute;
  src: url(${(props) => props.url});
`;

const FooterLine = styled.img`
  left: 5%;
  bottom: 10%;
  width: 80%;
  height: 0.3%;
  position: absolute;
`;

const LogoDescription = styled.section`
  left: 22%;
  top: 49%;
  position: absolute;
  width: 18%;
  max-width: 34vh;
  text-transform: uppercase;
  color: white;
  background: transparent;
  fontSize: 1.3em;
  letter-spacing: 0px;

  line-height: 30px;
`;

export default (props) => {
  const { data } = props;
  console.log(">>", data);
  const { url } = data.prismicBlogpost.data.topline;
  const backgroundURL = data.prismicBlogpost.data.background_image.url;
  let logo_url = data.prismicBlogpost.data.logo_image.url;
  const linkedInURL =
    data.prismicBlogpostBodyHeaderline.items[0].social_linkedin_logo.url;
  logo_url = logo_url.substring(0, logo_url.indexOf(".png") + 4);
  const footerLineURL = data.prismicBlogpost.data.footer_line.url;
  const logoDescription = data.prismicBlogpost.data.logo_description.text;
  console.log(logoDescription);

  return (
    <Layout>
      <Wrapper url={backgroundURL}>
        <ToplineImg src={url} />
        <TopLineR src={url} />
        <TopLineL src={url} />
        <input
          style={{
            left: "20%",
            position: "absolute",
            top: "7%",
            height: "6%",
            "font-size": "2.4vw",
          }}
          src={linkedInURL}
          type="image"
          value=""
          onclick="javascript:document.location.href='https://www.linkedin.com/company/the-curtain-hotel-&amp;-members-club/'"
        ></input>
        <input
          type="image"
          style={{
            left: "19%",
            top: "30%",
            position: "absolute",
            width: "28%",
          }}
          src={logo_url}
        />
        <FooterLine src={footerLineURL} />
        <LogoDescription>{logoDescription} </LogoDescription>
      </Wrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    prismicBlogpost {
      data {
        logo_image {
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
        footer_line {
          alt
          copyright
          url
        }
        logo_description{
          text
        }
      }
    }
    prismicBlogpostBodyHeaderline(items: {}) {
      id
      items {
        social_linked_logo_text {
          alt
          copyright
          url
        }
        social_linkedin_logo {
          alt
          copyright
          url
        }
      }
      primary {
        header_left_title {
          html
          text
        }
        header_right_title {
          html
          text
        }
      }
    }
  }
`;
