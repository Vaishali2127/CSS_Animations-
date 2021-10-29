import styled from "styled-components/macro";

export const IntroSection = {};

IntroSection.Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 100%;
  height: 90vh;
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
  background: linear-gradient(to right, #c9c9c9, #e9e9e9);
  margin: -2rem auto;
  // padding: 2rem auto;
  border-radius: 70%;
  border: 3px solid #f9f9f9;
  overflow: hidden;
`;
IntroSection.Vapour = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  padding: 0 20px;
`;

IntroSection.Tea = styled.div`
  width: 85%;
  height: 4rem;
  background: linear-gradient(#c57e65, #e28462);
  margin: 1.2rem auto;
  // padding: 2rem auto;
  border-radius: 60%;
`;
IntroSection.Handle = styled.div`
  position: relative;
  width: 130px;
  height: 150px;
  border: 40px solid #d9d9d9;
  // border-left: none;
  border-left: transparent;
  border-bottom-right-radius: 100%;
  border-top-right-radius: 100%;
  right: 0.5rem;
`;
