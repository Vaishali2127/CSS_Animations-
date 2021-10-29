import styled from "styled-components/macro";

export const IntroSection = {};

IntroSection.Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  background-color: #607d8b;
  justify-content: center;
  align-items: center;
`;
IntroSection.MainWrapper = styled.div`
  display: flex;
  // justify-content: center;
  // align-items: center;
  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
  width: 30%;
  height: 30rem;
  border-bottom-left-radius: 37%;
  border-bottom-right-radius: 37%;
  // border-top-right-radius: 17%;
  // border-top-left-radius: 17%;
`;

IntroSection.Circle = styled.div`
  width: 100%;
  height: 4rem;
  background: linear-gradient(#c57e65, #e28462);
  margin: -2rem auto;
  // padding: 2rem auto;
  border-radius: 60%;
  border: 3px solid #f9f9f9;
`;
// IntroSection.Wrapper=styled.div``;
// IntroSection.Wrapper=styled.div``;
