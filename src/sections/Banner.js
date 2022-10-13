import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 80vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const BannerComponent = styled.h1`
  font-size: ${(props) => props.theme.dark.fontxxxl};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.dark.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  span {
    display: block;
    background-color: ${(props) => props.theme.dark.body};
    padding: 1rem 2rem;
  }
`;

const Banner = () => {
  return (
    <Section>
      <Container id="up">
        <BannerComponent
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="8"
          data-scroll-target="#up"
        >
          <span>Fashion is an armour </span>
        </BannerComponent>
        <BannerComponent
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-6"
          data-scroll-target="#up"
        >
          <span>to survive the reality of everyday life.</span>
        </BannerComponent>
        <BannerComponent
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="6"
          data-scroll-target="#up"
        >
          <span>One is never over-dressed or</span>
        </BannerComponent>
        <BannerComponent
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-4"
          data-scroll-target="#up"
        >
          <span>under-dressed</span>
        </BannerComponent>
        <BannerComponent
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="6"
          data-scroll-target="#up"
        >
          <span>with a Little Black Dress.</span>
        </BannerComponent>
      </Container>
    </Section>
  );
};

export default Banner;
