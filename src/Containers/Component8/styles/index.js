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
  transition: background 1s, transform 1s 0.1s ease-in-out;

  :hover {
    background: #000;
    transform: rotate(360deg);
  }
`;
