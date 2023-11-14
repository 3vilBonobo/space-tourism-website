import styled from 'styled-components';

export const StyledFooterContainer = styled.footer`
  width: 100%;
  text-align: center;
  background-color: black;
  padding: 20px;
  color: ${(props) => props.theme.colors.lightCyan};
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
`;
