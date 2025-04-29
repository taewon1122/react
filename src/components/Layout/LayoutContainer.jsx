import React from 'react';
import styled from 'styled-components';

//Layout Style

//제일 상위요소
export const LayoutWrapper = styled.div`
    display: grid;
    background-color: #f5f5f9;
    grid-template-columns: 260px 1fr;  // 300px 사이드바 + 나머지 오른쪽
    grid-template-rows: 76px 1fr 50px; // 위에서부터 Navbar(60), Content(나머지), Footer(50)
    height: 100vh;                     // 전체 높이
    //grid 영역 구분
    //260px 64px
    //260px 1fr
    //260px 50px
    grid-template-areas:
    "logo    navbar"
    "sidebar content"
    "sidebar footer";

    @media (max-width: 768px) {
      grid-template-columns: 1fr; /* 화면 작아지면 2개로 */
      grid-template-areas:
        "navbar"
        "content"
        "footer"; /* ✅ sidebar를 제거한 새 영역 지정 */
    }
`;

//logo
export const LogoContainer = styled.div`
    padding-top: 12px;
    padding-left: 26px;
    padding-right: 26px;
    grid-area: logo;
    background-color: #ffffff;

  // 미디어 쿼리: 화면 크기가 768px 이하일 때
  @media (max-width: 768px) {
    display: none;
  }
`;

//sidebar
export const SideBarContainer = styled.div`

    grid-area: sidebar;
    background-color: #ffffff;

  // 미디어 쿼리: 화면 크기가 768px 이하일 때
  @media (max-width: 768px) {
    display: none;
  }
`;

//navbar
export const NavBarContainer = styled.div`
    grid-area: navbar;
    margin-left: 26px;
    margin-right: 26px;
    margin-top: 12px;

`;

//content
export const ContentContainer = styled.div`
    grid-area: content;
    overflow-y: auto; // 스크롤 가능

    padding-top: 26px;
    padding-left: 26px;
    padding-right: 26px;
    padding-bottom: 26px;
`;

//Footer
export const FooterContainer = styled.div`
    grid-area: footer;

    padding-top: 8px;
    padding-left: 26px;
    padding-right: 26px;
    padding-bottom: 8px;
`;