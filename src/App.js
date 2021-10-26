// import "./App.css";
import React from "react";
import styled from "styled-components/macro";
import { Component1, Component2 } from "./Containers";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  // background-color: red;
`;
const App = () => {
  return (
    <Wrapper>
      <Component1 />
      <Component2 />
    </Wrapper>
  );
};

export default App;
