import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: absolute;
  top: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 40px;
  }
`;

export const StyledLogoLink = styled(Link)`
  left: auto;
`;
export const StyledLogo = styled.img``;

export const StyledSeparator = styled.hr`
  width: 473px;
`;
