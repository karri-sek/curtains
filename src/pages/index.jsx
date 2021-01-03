import { css } from "@emotion/core";
import { graphql } from "gatsby";
import { Parser } from "html-to-react";
import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import "../portret.css";

const Wrapper = styled.section`
  position: relative;
  background-size: cover;
  height: 100vh;
  background-image: url(${(props) => props.url});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  @media (orientation: portrait) {
    height: 100vh;
    position: relative;
    background-size: cover;
    background-image: url(${(props) => props.url});
    background-position: 50% 50%;
  }
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
  @media (orientation: portrait) {
    top: 6%;
    left: 32%;
    right: 28%;
    width: 31%;
    height: 0.2%;
    position: absolute;
  }
`;

const TopLineR = styled.img`
  top: 10%;
  left: 5%;
  width: 7%;
  height: 0.3%;
  position: absolute;
  @media (orientation: portrait) {
    top: 10%;
    left: 5%;
    width: 7%;
    height: 0.3%;
    position: absolute;
  }
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
  fontsize: 2.4vw;
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
  fontsize: 1.3em;
  letter-spacing: 0px;
  line-height: 30px;
`;

const Paragraph = styled.p`
  top: 5.1%;
  left: ${(props) => props.lvalue};
  right: ${(props) => props.rvalue};
  position: absolute;
  height: 4%;
  color: white;
  font-size: 1.7em;
  font-weight: bold;
`;
export default (props) => {
  const { data } = props;
  console.log(">>", data);

  const items = data.prismicBlogpostBodyHeaderline.items[0];
  const { url } = data.prismicBlogpost.data.topline;
  const backgroundURL = data.prismicBlogpost.data.background_image.url;
  let logo_url = data.prismicBlogpost.data.logo_image.url;
  const linkedInURL =
    data.prismicBlogpostBodyHeaderline.items[0].social_linkedin_logo.url;
  logo_url = logo_url.substring(0, logo_url.indexOf(".png") + 4);
  const footerLineURL = data.prismicBlogpost.data.footer_line.url;
  const logoDescription = data.prismicBlogpost.data.logo_description.text;
  console.log("items ", items.email.url);
  const emailIconURL = items.email.url;
  const whatsappIconURL = items.whatsapp.url;
  const fbIconURL = items.facebook_logo.url;
  const instaIconURL = items.instagram_logo.url;
  const degreeIconURL = items._360_logo.url;
  const threeModelLogo = items._3d_model_logo.url;
  const pdfLogoURL = items.pdf_logo.url;
  const videoURL = items.video_logo.url;
  const headerRightTitle =
    data.prismicBlogpostBodyHeaderline.primary.header_right_title.text;
  const headerLeftTitle =
    data.prismicBlogpostBodyHeaderline.primary.header_left_title.text;

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
          onclick=""
        ></input>
        <input
          style={{
            left: "24%",
            position: "absolute",
            top: "7%",
            height: "6%",
            "font-size": "2.4vw",
          }}
          src={fbIconURL}
          type="image"
          value=""
          onclick=""
        ></input>
        <input
          style={{
            left: "28%",
            position: "absolute",
            top: "7%",
            height: "6%",
            "font-size": "2.4vw",
          }}
          src={instaIconURL}
          type="image"
          value=""
          onclick=""
        ></input>
        <input
          style={{
            right: "24%",
            position: "absolute",
            top: "7%",
            height: "6%",
            "font-size": "2.4vw",
          }}
          src={whatsappIconURL}
          type="image"
          value=""
          onclick=""
        ></input>
        <input
          style={{
            right: "20%",
            position: "absolute",
            top: "7%",
            height: "6%",
            "font-size": "2.4vw",
          }}
          src={emailIconURL}
          type="image"
          value=""
          onclick=""
        ></input>
        <input
          style={{
            right: "16%",
            position: "absolute",
            top: "7%",
            height: "6%",
            fontSize: "2.4vw",
          }}
          src={linkedInURL}
          type="image"
          value=""
          onclick=""
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
        <Paragraph lvalue="12.5%">{headerRightTitle}</Paragraph>
        <Paragraph rvalue="29%">{headerLeftTitle}</Paragraph>
        <input
          style={{
            right: "15%",
            position: "absolute",
            top: "80%",
            width: "26%",
          }}
          src={threeModelLogo}
          type="image"
          value=""
          onclick=""
        ></input>
        <input
          style={{
            right: "18%",
            position: "absolute",
            top: "44%",
            width: "24%",
          }}
          src={pdfLogoURL}
          type="image"
          value=""
          onclick=""
        ></input>
        <input
          style={{
            right: "14%",
            position: "absolute",
            top: "65%",
            width: "32%",
          }}
          src={videoURL}
          type="image"
          value=""
          onclick=""
        ></input>
        <input
          style={{
            right: "16%",
            position: "absolute",
            top: "24%",
            width: "26%",
          }}
          src={degreeIconURL}
          type="image"
          value=""
          onclick=""
        ></input>

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
        logo_description {
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
        email {
          url
        }
        whatsapp {
          url
        }
        facebook_logo {
          url
        }
        instagram_logo {
          url
        }
        _360_logo {
          url
        }
        _3d_model_logo{
          url
        } 
        pdf_logo {
          url
        }
        video_logo{
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
