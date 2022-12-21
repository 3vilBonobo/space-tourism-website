import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
`;

export const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledNavListItem = styled.li``;

export const StyledNavLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  text-decoration: none;
`;

export const StyledNavSpan = styled.span`
  padding-inline: 5px;
`;
