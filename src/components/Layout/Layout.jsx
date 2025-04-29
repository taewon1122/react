import React from 'react';

import { LayoutWrapper, SideBarContainer, NavBarContainer, ContentContainer, FooterContainer, LogoContainer } from './LayoutContainer';
import Home from '../../screens/Home';
import SideBarElements from '../SideBar/SideBarElements';
import NavBarElements from '../Navbar/NavBarElements';
import FooterElements from '../Footer/FooterElements';
import LogoElements from '../Logo/LogoElements';

//layout에 element 불러오고,
//app.js에는 라우터가 있다
//라우터로 layout을 감싸고, 거기에 파라미터를 넣어준다?..

const Layout = () => {
  return (

      <LayoutWrapper>
        
        <LogoContainer>
          <LogoElements />
        </LogoContainer>
        
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
          <FooterElements />
        </FooterContainer>

      </LayoutWrapper>
  )
}

export default Layout;