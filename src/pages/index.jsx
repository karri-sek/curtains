import { css } from "@emotion/core";
import { graphql } from "gatsby";
import { Parser } from "html-to-react";
import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import LinkedInInput from "../components/LinkedInInput";
import FaceBookInput from "../components/FaceBookInput";
import InstagramInput from "../components/InstagramInput";
import Whatsapp from "../components/Whatsapp";
import Visit from "../components/Visit";
import Share from "../components/Share";
import Email from "../components/Email";
import LinkedInRight from "../components/LinkedInRight";
import CurtainLogo from '../components/CurtainLogo';
import LogoDescription from '../components/LogoDescription';
import ThreeD from '../components/ThreeD';
import PDFLogo from '../components/PDFLogo';
import Video from '../components/Video';
import Degree from '../components/Degree';
import PrismicLogo from '../components/PrismicLogo';

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
    top: 6%;
    right: 8%;
    width: 7%;
    height: 0.2%;
    position: absolute;
  }
`;

const TopLineL = styled.img`
  top: 10%;
  right: 8%;
  width: 7%;
  height: 0.3%;
  position: absolute;
  @media (orientation: portrait) {
    top: 6%;
    right: 8%;
    width: 7%;
    height: 0.2%;
    position: absolute;
  }
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

  const items = data.prismicBlogpostBodyHeaderline.items[0];
  const { url } = data.prismicBlogpost.data.topline;
  const backgroundURL = data.prismicBlogpost.data.background_image.url;
  let logo_url = data.prismicBlogpost.data.logo_image.url;
  const linkedInURL =
    data.prismicBlogpostBodyHeaderline.items[0].social_linkedin_logo.url;
  logo_url = logo_url.substring(0, logo_url.indexOf(".png") + 4);
  const footerLineURL = data.prismicBlogpost.data.footer_line.url;
  const logoDescription = data.prismicBlogpost.data.logo_description.text;
  const emailIconURL = items.email.url;
  const whatsappIconURL = items.whatsapp.url;
  const fbIconURL = items.facebook_logo.url;
  const instaIconURL = items.instagram_logo.url;
  const degreeIconURL = items._360_logo.url;
  const threeModelLogo = items._3d_model_logo.url;
  const pdfLogoURL = items.pdf_logo.url;
  const videoURL = items.video_logo.url;
  const prismicLogoURL = items.prismic_logo.url;
  const linkedInLink = items.linkedinurl.url;
  const headerRightTitle =
    data.prismicBlogpostBodyHeaderline.primary.header_right_title.text;
  const headerLeftTitle =
    data.prismicBlogpostBodyHeaderline.primary.header_left_title.text;

 
  return (
    <Layout>
      <Wrapper url={backgroundURL}>
        <ToplineImg src={url}/>
        <TopLineR src={url} />
        <TopLineL src={url} />
        <LinkedInInput src={linkedInURL} type="image" onClick={()=>{window.location=linkedInLink}}></LinkedInInput>
        <LinkedInRight src={linkedInURL} type="image"  id="lr"  onClick={()=>{window.location=linkedInLink}}/>
        <FaceBookInput type="image" value="" onclick="" src={fbIconURL} />
        <InstagramInput src={instaIconURL} type="image" value="" onclick="" />
        <Whatsapp src={whatsappIconURL} type="image" value="" onclick="" />
        <Email src={emailIconURL} type="image" value="" onclick="" />

        <CurtainLogo src={logo_url} type="image" value="" onclick="" />
       
        <FooterLine src={footerLineURL} />
        <LogoDescription>{logoDescription} </LogoDescription>

        <Visit>{headerLeftTitle}</Visit>
        <Share>{headerRightTitle}</Share>
        <ThreeD src={threeModelLogo} type="image" value="" onclick="" />
        <PDFLogo src={pdfLogoURL} type="image" value="" onclick="" />
        <Video src={videoURL} type="image" value="" onclick="" />
        <Degree src={degreeIconURL} type="image" value="" onclick="" />
        <PrismicLogo src={prismicLogoURL} type="image" value="" onclick="" />
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
        _3d_model_logo {
          url
        }
        pdf_logo {
          url
        }
        video_logo {
          url
        }
        prismic_logo {
          url
        }
        linkedinurl {
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
