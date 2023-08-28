import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #555;

  &:hover {
    background-color: #777;
  }
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
`;

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

export const NavItem = styled.li`
  font-size: 1rem;
  padding-right: 1rem;
  color: white;
  text-decoration: none;
`;
