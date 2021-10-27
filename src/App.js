// import "./App.css";
import React from "react";
import styled from "styled-components/macro";
import {
  Component,
  Component1,
  Component2,
  Component3,
  Component4,
  Component5,
  Component6,
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
