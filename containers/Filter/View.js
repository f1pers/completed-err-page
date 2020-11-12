import React from "react";
import Vector from "next/image";
import styled from "styled-components";
const Qq = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
`;
const WrapperPosition = styled.div`
  display: flex;
  justify-content: center;
  max-width: 920px;
  width: 100%;
  background-color: white;
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  height: 70px;
  align-items: center;
`;
const CategoriesAndPopular = styled.div`
  display: flex;
`;
const Link = styled.a``;
const Categories = styled.div`
  height: 46px;
  width: 132px;
  border: 1px solid #d6def5;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CategoriesName = styled.span`
  font-size: 16px;
  font-family: Segoe UI;
  color: #7e869d;
`;
const ListIcon = styled.div`
  height: 12px;
  width: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 7px;
`;
const TopLine = styled.div`
  border-top: 2.4px solid #7e869d;
`;
const MiddleLine = styled.div`
  border-top: 2.4px solid #7e869d;
  display: flex;
  align-self: center;
  width: 9px;
`;
const BottomLine = styled.div`
  display: flex;
  align-self: center;
  width: 4.5px;
  border-top: 2.4px solid #7e869d;
`;
const Popular = styled.div`
  height: 46px;
  width: 132px;
  border: 1px solid #d6def5;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;
const PopularTxt = styled.span`
  font-size: 16px;
  font-family: Segoe UI;
  color: #7e869d;
`;
const Prgph = styled.p``;
const ArrowDown = styled.i`
  border: solid#7E869D;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-left: 14px;
`;
const SearchField = styled.input`
  height: 46px;
  width: 206px;
  border-radius: 5px;
  border: 1px solid #d6def5;
  padding-left: 14px;
  background-image: url(/Vector.png);
  background-position: 175px 16px;
  background-size: 14px;
  background-repeat: no-repeat;
  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
  ::-webkit-input-placeholder {
    color: #7e869d;
    font-size: 16px;
    text-decoration: none;
  }
  :focus {
    outline: none;
    border-color: #d6def5;
  }
`;
export default function FilterView() {
  return (
    <div>
      <Qq>
        <WrapperPosition>
          <Menu>
            <CategoriesAndPopular>
              <Link href="">
                <Categories>
                  <CategoriesName>Категории</CategoriesName>
                  <Link href="">
                    <ListIcon>
                      <TopLine></TopLine>
                      <MiddleLine></MiddleLine>
                      <BottomLine></BottomLine>
                    </ListIcon>
                  </Link>
                </Categories>
              </Link>
              <Link href="">
                <Popular>
                  <PopularTxt>Популярные</PopularTxt>
                  <Link href="">
                    <Prgph>
                      <ArrowDown></ArrowDown>
                    </Prgph>
                  </Link>
                </Popular>
              </Link>
            </CategoriesAndPopular>
            <div>
              <SearchField type="search" placeholder="Поиск по названию" />
            </div>
          </Menu>
        </WrapperPosition>
      </Qq>
    </div>
  );
}
