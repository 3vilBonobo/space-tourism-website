import {
  StyledNavbar,
  StyledNavList,
  StyledNavListItem,
  StyledNavLink,
  StyledNavSpan,
} from '../styles/Navbar.style';

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavList>
        <StyledNavListItem>
          <StyledNavLink>
            <StyledNavSpan>00</StyledNavSpan>HOME
          </StyledNavLink>
        </StyledNavListItem>
        <StyledNavListItem>
          <StyledNavLink>
            <StyledNavSpan>01</StyledNavSpan>DESTINATION
          </StyledNavLink>
        </StyledNavListItem>
        <StyledNavListItem>
          <StyledNavLink>
            <StyledNavSpan>02</StyledNavSpan>CREW
          </StyledNavLink>
        </StyledNavListItem>
        <StyledNavListItem>
          <StyledNavLink>
            <StyledNavSpan>03</StyledNavSpan>TECHNOLOGY
          </StyledNavLink>
        </StyledNavListItem>
      </StyledNavList>
    </StyledNavbar>
  );
};

export default Navbar;
