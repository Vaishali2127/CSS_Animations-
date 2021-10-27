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
    background: linear-gradient(135deg, lightpink, yellow, skyblue);

    margin-top: 70px;
    transform: skewX(40deg);
    animation: one 2s infinite;
    animation-direction: alternate;
    // transition: transform 1s ease-in-out;
  }

  @keyframes one {
    0% {
      transform: skewY(20deg);
    }
    100% {
      transform: skewY(-20deg);
    }
  }
`;
// IntroSection.Wrapper = styled.div``;
