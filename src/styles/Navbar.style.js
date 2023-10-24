import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 830px;
  height: 96px;
  background: transparent;
  backdrop-filter: blur(20px);
`;

export const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 542px;
`;

export const StyledNavListItem = styled.li``;

export const StyledNavLink = styled(Link)`
  color: ${(props) => props.theme.colors.lightCyan};
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  letter-spacing: 2px;
  text-decoration: none;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    display: block;
    z-index: -1;
    right: 0;
    width: 0;
    bottom: -38px;
    background: ${(props) => props.theme.colors.white};
    height: 3px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:hover::after,
  &:focus::after,
  &:active::after {
    left: 0;
    right: auto;
    width: 110%;
  }
  &:hover::after {
    background: ${(props) => props.theme.colors.lightGray};
  }
`;

export const StyledNavSpan = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  padding-inline: 5px;
`;
