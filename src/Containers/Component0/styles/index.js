import styled from "styled-components";

export const IntroSection = {};

IntroSection.Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`;
IntroSection.mainWrapper = styled.div`
  width: 100%;
  .box {
    // width: 150px;
    // height: 150px;
    width: 15px;
    height: 50px;
    background: red;
    margin-top: 20px;
    animation: move 2s ease-in-out infinite;
    animation-direction: alternate;
    :hover {
      transition: background-color 1s ease-in-out;
      background-color: green;
      // width: 800px;
    }

    @keyframes move {
      0% {
        width: 10px;
      }
      100% {
        width: 1200px;
        // top: 0px;
        // left: 490px;
      }
    }
  }
`;
// IntroSection.Wrapper = styled.div``;
