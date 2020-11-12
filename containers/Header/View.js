import React from "react";
import styled from "styled-components";
const Header = styled.header``;
const Inner = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 140px;
  margin: 0 auto;
`;
const Desktop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const NavigationList = styled.div``;
const List = styled.ul`
  padding: 0;
  display: flex;
`;
const ListElement = styled.li`
  list-style-type: none;
  font-family: "Segoe UI";
  font-size: 16px;
  color: #a3aabd;
  :hover {
    color: black;
  }
`;
const ListGoods = styled.li`
  margin: 0 16px 0 16px;
  list-style-type: none;
  font-family: "Segoe UI";
  font-size: 16px;
  color: #a3aabd;
  :hover {
    color: black;
  }
`;
const ListRegistration = styled.ul``;
const ListRegistrationElement = styled.li`
  list-style-type: none;
  font-family: "Segoe UI";
  font-size: 16px;
  color: #a3aabd;
  margin-left: 24px;
  :hover {
    color: black;
  }
`;
const Link = styled.a``;
export default function HeaderView() {
  return (
    <Header>
      <Inner>
        <Desktop>
          <NavigationList>
            <List>
              <ListElement>
                <Link href="">Магазины</Link>
              </ListElement>
              <ListGoods>
                <Link href="">Товары</Link>
              </ListGoods>
              <ListElement>
                <Link href="">Остальное</Link>
              </ListElement>
            </List>
          </NavigationList>
          <ListRegistration>
            <List>
              <ListElement>
                <Link href="">Вход</Link>
              </ListElement>
              <ListRegistrationElement>
                <Link href="">Регистрация</Link>
              </ListRegistrationElement>
            </List>
          </ListRegistration>
        </Desktop>
      </Inner>
    </Header>
  );
}
