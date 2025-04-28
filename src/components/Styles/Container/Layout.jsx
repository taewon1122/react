import React from 'react';
import styled from 'styled-components';

import NavBarElements from '../../Navbar/NavBarElements';
import SideBarElements from '../../navbar/SideBarElements';
import Home from '../../../screens/Home';
import Footer from '../../Footer';

//layout에 element 불러오고,
//app.js에는 라우터가 있다
//라우터로 layout을 감싸고, 거기에 파라미터를 넣어준다?..

//제일 상위요소
export const LayoutWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;  // 300px 사이드바 + 나머지 오른쪽
    grid-template-rows: 60px 1fr 50px; // 위에서부터 Navbar(60), Content(나머지), Footer(50)
    height: 100vh;                     // 전체 높이
    grid-template-areas:
    "sidebar navbar"
    "sidebar content"
    "sidebar footer";
`;

//sidebar
export const SideBarContainer = styled.div`

    grid-area: sidebar;
    background-color: #f6ff00;

  // 미디어 쿼리: 화면 크기가 768px 이하일 때
  //@media (max-width: 768px) {
  //  display: none;
  //}
`;

//navbar
export const NavBarContainer = styled.div`
    grid-area: navbar;
    background-color: #00ff66;
    
    //padding: 10px; //안쪽 여백
    //padding-left: 20px; //안쪽 여백 왼쪽

    //border-radius: 10px; // 둥글게 만드는 부분
    //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 그림자 효과
    //boot-strap fluid (양쪽 여백 없이)

    // 미디어 쿼리: 화면 크기가 768px 이하일 때
    //@media (max-width: 768px) {
    //    width: 100%;
    //    margin-left: 0;
    //    padding: 0;
    //}
`;

//content
export const ContentContainer = styled.div`
    grid-area: content;
    background-color: aqua;
    overflow-y: auto; // 스크롤 가능
`;

//Footer
export const FooterContainer = styled.div`
    grid-area: footer;
    background-color: #ccccff;
`;

const Layout = () => {
  return (

      <LayoutWrapper>

        <SideBarContainer >
          <SideBarElements />
        </SideBarContainer>

        <NavBarContainer>
          <NavBarElements />
        </NavBarContainer>
        
        <ContentContainer>
          <Home />
        </ContentContainer>

        <FooterContainer>
          <Footer />
        </FooterContainer>

      </LayoutWrapper>
  )
}

export default Layout;