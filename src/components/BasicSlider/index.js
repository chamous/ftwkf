import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import Wrapper from "./UI/Wrapper/Wrapper";
import Title from "./UI/Title/Title";
import Subtitle from "./UI/Subtitle/Subtitle";

// Images
const bogliasco = "https://drscdn.500px.org/photo/1045554077/q%3D80_m%3D2000/v2?sig=c7460574c55880bf867eec4c0b9f0629636da6daaee31af23c3ca8839783c606";
const countyClare = "https://drscdn.500px.org/photo/1045554275/q%3D80_m%3D2000/v2?sig=62c1c4e1ebfe897443b433aa85549eef27409367be3b3ef8a70a4280e1ad39f3";
const craterRock = "https://drscdn.500px.org/photo/1045554328/q%3D80_m%3D2000/v2?sig=f44885a9100c9caf1493b90ffa425acb12cf4a2914b0a708b98a77d097bd3e4f";
const giauPass = "https://drscdn.500px.org/photo/1045554371/q%3D80_m%3D2000/v2?sig=ff08b9f598c43e3ceebcdf7b0c9d881fe5882525124b0a84bee995194541decb";

const app = () => {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "100vh"
      }}
    >
      <OverlayContainer>
        <Wrapper>
          <Title>الجامعة التونسية</Title>
          <Subtitle>للووشو كونغ فو و الرياضات التابعة</Subtitle>
        </Wrapper>
      </OverlayContainer>

      <Slide
        background={{
          backgroundImage: giauPass,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: bogliasco,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: countyClare,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: craterRock,
          backgroundAttachment: "fixed"
        }}
      />

      <Nav />
    </HeroSlider>
  );
};

export default app;
