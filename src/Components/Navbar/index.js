import React from 'react'
import styled from 'styled-components';

// Navbar styling
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  align-items: center;

  @media only screen and (max-width: 900px) {
    padding:20px 10px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

export default function Navbar({ isMobile }) {
  return (
    <NavbarContainer>
      <Logo>ProFormance</Logo>
      {isMobile ?
        <h4>Menu</h4> :
        <NavItems>
          <NavItem>About</NavItem>
          <NavItem>Technology</NavItem>
          <NavItem>News & Insights</NavItem>
          <NavItem>Contact us</NavItem>
        </NavItems>}
    </NavbarContainer>
  )
}
