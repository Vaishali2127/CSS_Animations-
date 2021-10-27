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
    // animation-iteration-count: 3;
    animation: anim 5s infinite;
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
        width: 250px;
        height: 150px;
      }

      50% {
        width: 150px;
        height: 150px;
      }

      75% {
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
      100% {
        width: 0px;
        height: 0px;
      }
    }
  }
`;
// IntroSection.Wrapper = styled.div``;
