import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  border-radius:24px;
  font-family:sans-serif;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  margin: 0 1rem;
`;

export const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    color: #f0a500;
  }
`;