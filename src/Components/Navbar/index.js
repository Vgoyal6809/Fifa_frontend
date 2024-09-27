import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Navbar styling
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  align-items: center;

  box-shadow: ${props => props.shadow && '2px 2px 10px  grey;'};

  @media only screen and (max-width: 900px) {
    padding:20px 10px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor:default;
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
  const Navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [shadow, setShadow] = useState(true);
  
  
  useEffect(() => {
    if (pathname === '/')
      setShadow(false)
    else
      setShadow(true)
  }, [pathname])

  return (
    <NavbarContainer shadow={shadow}>
      <Logo onClick={() => Navigate('/')}>ProFormance</Logo>
      {isMobile ?
        <h4>Menu</h4> :
        <NavItems>
          <NavItem onClick={() => Navigate('/about')}>About</NavItem>
          <NavItem onClick={() => Navigate('/technology')}>Technology</NavItem>
          <NavItem onClick={() => Navigate('/contact')}>Contact us</NavItem>
        </NavItems>}
    </NavbarContainer>
  )
}
