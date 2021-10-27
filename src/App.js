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
} from "./Containers";
import Component0 from "./Containers/Component0";

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
    </Wrapper>
  );
};

export default App;
