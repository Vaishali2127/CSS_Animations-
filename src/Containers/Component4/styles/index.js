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
    margin-top: 70px;
    transform: skewX(40deg);
    animation: two 2s infinite;
    animation-direction: alternate;
    background-color: #831a4a;
    opacity: 0.7;
    // transition: transform 1s ease-in-out;
  }

  @keyframes two {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(100deg);
    }
  }
`;
// IntroSection.Wrapper = styled.div``;
