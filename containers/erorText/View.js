import React from "react";
import styled from "styled-components";
export default function ErorTxtView() {
  return (
    <div>
      <AllText>
        <Eror>Ошибка.</Eror>
        <NotFind>По вашему запросу ничего не найдено.</NotFind>
      </AllText>
    </div>
  );
}
const AllText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Eror = styled.p`
  font-size: 21px;
  margin: 40px 0 8px 0;
`;
const NotFind = styled.p`
  font-size: 16px;
  padding: 0;
  margin: 0;
`;
