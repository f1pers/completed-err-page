import React from "react";
import Filter from "../containers/Filter/index";
import Header from "../containers/Header/index";
import ErrTxt from "../containers/ErrTxt/index";
import styled from "styled-components";
const MainContent = styled.div`
  background-color: #fafafa;
  height: 100vh;
`;
export default function HomeFilter() {
  return (
    <div>
      <Header />
      <MainContent>
        <Filter />
        <ErrTxt />
      </MainContent>
    </div>
  );
}
