import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: absolute;
  top: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledLogoLink = styled(Link)``;
export const StyledLogo = styled.img``;

export const StyledSeparator = styled.hr`
  transform: rotate(90deg);
`;
