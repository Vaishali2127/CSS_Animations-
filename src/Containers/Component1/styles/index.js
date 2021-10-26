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
    background: red;
    margin-top: 20px;
    :hover {
      transition: background-color 1s ease-in-out;
      background-color: green;
    }
  }
`;
// IntroSection.Wrapper = styled.div``;
