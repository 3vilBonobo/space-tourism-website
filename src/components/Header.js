import Navbar from './Navbar';
import {
  StyledHeader,
  StyledLogoLink,
  StyledLogo,
  StyledSeparator,
} from '../styles/Header.style';
import Logo from '../assets/shared/logo.svg';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoLink to="/">
        <StyledLogo src={Logo} />
      </StyledLogoLink>
      <StyledSeparator />
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
