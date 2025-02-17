import React from 'react';
import { Nav, Ul, Li, StyledLink } from './style';

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <StyledLink href="/">Home</StyledLink>
        </Li>
        <Li>
          <StyledLink href="/Career">Career</StyledLink>
        </Li>
        <Li>
          <StyledLink href="/Our Team">Our-Team</StyledLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;