import styled from "styled-components";

export const IntroSection = {};

IntroSection.Wrapper = styled.div`
  display: flex;
  justify-content: center;
  //   height: auto;
`;
IntroSection.mainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
  margin-right: -18rem;
  .triangle-Up {
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
    border-bottom: 270px solid #005;
    margin-right: -18rem;
    margin-top: -6rem;

    transform: rotateX(60deg);
    animation: four 3s infinite;
    animation-direction: alternate;
  }
  .triangle-Down {
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
    border-top: 270px solid #005;
    margin-right: 18rem;
    margin-top: 6rem;

    transform: rotateX(60deg);
    animation: five 3s infinite;
    animation-direction: alternate;
  }

  @keyframes four {
    0% {
      transform: rotate(0deg);
    }
    100% {
      opacity: 0.3;
      transform: rotate(360deg);
      border-color: red;
    }
  }
  @keyframes five {
    0% {
      transform: rotate(0deg);
    }
    100% {
      opacity: 0.3;
      transform: rotate(360deg);
      border-color: purple;
    }
  }
`;
// IntroSection.Wrapper = styled.div``;
