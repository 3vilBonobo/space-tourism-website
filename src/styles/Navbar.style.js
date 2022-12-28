import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 830px;
  height: 96px;
  background: transparent;
  backdrop-filter: blur(5px);
`;

export const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 542px;
  border: 1px solid green;
`;

export const StyledNavListItem = styled.li``;

export const StyledNavLink = styled(Link)`
  color: ${(props) => props.theme.colors.lightCyan};
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  text-decoration: none;
`;

export const StyledNavSpan = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  padding-inline: 5px;
`;
