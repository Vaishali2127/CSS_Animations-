import styled from "styled-components";

export const IntroSection = {};

IntroSection.Wrapper = styled.div`
  display: flex;
  justify-content: center;

  //   height: auto;
`;
IntroSection.mainWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  width: 45%;
  .box {
    width: 150px;
    height: 150px;
    background: lightgrey;
    margin-top: 120px;
    transform: skewX(40deg);
    animation: three 3s infinite;
    animation-direction: alternate;
    background-color: green;

    // transition: transform 1s ease-in-out;
  }

  @keyframes three {
    0% {
      opacity: 0.7;
      transform: rotate(0deg) translate(0, 0);
    }
    100% {
      opacity: 0.5;
      background-color: yellow;
      transform: rotate(180deg) translate(-120px, -120px);
    }
  }
`;
// IntroSection.Wrapper = styled.div``;
