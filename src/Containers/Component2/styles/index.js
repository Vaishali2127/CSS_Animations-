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

  width: 40%;
  .box {
    width: 150px;
    height: 150px;
    background: skyblue;
    margin-top: 20px;

    // transition: background-color 1s ease-in-out;
    // transform: skew(20deg);
    animation: skew 3s infinite;
    transform: skew(20deg);
    animation-direction: alternate;

    @keyframes skew {
      0% {
        transform: skewX(20deg);
      }
      100% {
        transform: skewX(-20deg);
      }
    }
  }
`;
// IntroSection.Wrapper = styled.div``;
