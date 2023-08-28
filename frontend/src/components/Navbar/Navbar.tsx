import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import {
  Logo,
  NavBarContainer,
  NavItem,
  NavItems,
  StyledNavLink,
} from "./Navbar.style";

export default function Navbar() {
  const isAdmin = sessionStorage.getItem("isAdmin") ?? "false";

  return (
    <NavBarContainer>
      <Logo href="#">Logo</Logo>
      <NavItems>
        <NavItem>
          <StyledNavLink to="/products">Produtos</StyledNavLink>
        </NavItem>

        {!JSON.parse(isAdmin) ? (
          <NavItem>
            <StyledNavLink to="/carrinho">Carrinho</StyledNavLink>
          </NavItem>
        ) : null}

        <NavItem>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </NavItem>
      </NavItems>
    </NavBarContainer>
  );
}
