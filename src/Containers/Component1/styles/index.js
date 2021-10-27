import styled from "styled-components";

export const IntroSection = {};

IntroSection.Wrapper = styled.div`
  display: flex;
  justify-content: center;
  //   height: auto;
`;
IntroSection.mainWrapper = styled.div`
  .box {
    width: 150px;
    height: 150px;
    background: skyblue;
    margin-top: 20px;
    animation: anim 10s infinite;
    animation-direction: alternate;
    :hover {
      transition: background-color 1s ease-in-out;
      background-color: green;
    }
    @keyframes anim {
      0% {
        width: 150px;
        height: 150px;
      }

      25% {
        border-radius: 0%;
        width: 0px;
        height: 0px;
      }

      50% {
        width: 200px;
        height: 200px;
      }
      75% {
        width: 0px;
        height: 0px;
      }

      100% {
        border-radius: 100%;
        opacity: 0.5;
        width: 150px;
        height: 150px;
        background: radial-gradient(
          circle,
          red,
          orange,
          yellow,
          skyblue,
          purple
        );
      }
    }
  }
`;
// IntroSection.Wrapper = styled.div``;
