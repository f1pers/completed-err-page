import React from "react";
import Filter from "../containers/filter/index";
import Header from "../containers/header/index";
import ErorText from "../containers/erorText/index";
import styled from "styled-components";
export default function HomeFilter() {
  return (
    <div>
      <Header />
      <MainContent>
        <Filter />
        <ErorText />
      </MainContent>
    </div>
  );
}
const MainContent = styled.div`
  background-color: #fafafa;
  height: 100vh;
`;
