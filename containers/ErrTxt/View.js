import React from "react";
import styled from "styled-components";
const AllTxt = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Err = styled.p`
  font-size: 21px;
  margin: 40px 0 8px 0;
`;
const NotFind = styled.p`
  font-size: 16px;
  padding: 0;
  margin: 0;
`;
export default function ErrTxtView() {
  return (
    <div>
      <AllTxt>
        <Err>Ошибка.</Err>
        <NotFind>По вашему запросу ничего не найдено.</NotFind>
      </AllTxt>
    </div>
  );
}
