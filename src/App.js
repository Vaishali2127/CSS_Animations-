// import "./App.css";
import React from "react";
import styled from "styled-components/macro";
import {
  Component,
  // Component0,
  Component1,
  Component2,
  Component3,
  Component4,
  Component5,
  Component6,
  Component7,
  Component8,
  Component9,
} from "./Containers";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  // background-color: red;
`;
const App = () => {
  return (
    <Wrapper>
      <Component />
      {/* <Component0 /> */}
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component8 />
      <Component9 />
      <Component7 />
    </Wrapper>
  );
};

export default App;
