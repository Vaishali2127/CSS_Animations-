import styled from "styled-components/macro";

export const IntroSection = {};

IntroSection.Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 100%;
  height: 20vh;
  justify-content: center;
  align-items: center;
`;
IntroSection.MainWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #307d8b;
  color: white;
  border-radius: 50%;
  transition: background 1s, transform 1s ease-in-out;

  :hover {
    background: pink;
    // transform: rotate(360deg);
    transform: scale(1.2);
    animation: button 2s 1;
    animation-direction: alternate;

    @keyframes button {
      0% {
        transform: skew(180deg);
      }
      15% {
        transform: rotate(60deg);
      }
      30% {
        transform: rotate(-60deg);
      }
      45% {
        transform: rotate(-360deg);
      }

      // MOVING  BALL
      // 60% {
      //   transform: translate(100px, 0);
      // }
      // 75% {
      //   transform: translate(100px, 100px);
      // }
      // 90% {
      //   transform: translate(-100px, 0);
      // }
      // 100% {
      //   transform: translate(-100px, -100);
      // }

      // JUMPING BALL
      60% {
        transform: translate(0, -100px);
      }
      75% {
        transform: translate(0, 0);
      }
      90% {
        transform: translate(0, -110px);
      }
      100% {
        transform: translate(0, 0);
      }
    }
  }
`;
