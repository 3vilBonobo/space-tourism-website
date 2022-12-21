import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bgDesktop from '../assets/home/background-home-desktop.jpg';
import bgTablet from '../assets/home/background-home-tablet.jpg';
import bgMobile from '../assets/home/background-home-mobile.jpg';

export const StyledMainHome = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 200px;
  background-color: black;
  background-image: url(${bgMobile});
  @media only screen and (min-width: 600px) {
    background-image: url(${bgTablet});
  }
  @media only screen and (min-width: 768px) {
    background-image: url(${bgDesktop});
  }
`;

export const StyledLeftSectionHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledUpperTitleHome = styled.h2`
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  font-size: 28px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.lightCyan};
`;
export const StyledBottomTitleHome = styled.h1`
  font-size: 150px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
`;
export const StyledTextHome = styled.p`
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  max-width: 430px;
  font-size: 18px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.lightCyan};
`;

export const StyledRightSectionHome = styled.section``;

export const StyledButtonHome = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.fontSerif};
  text-decoration: none;
  text-align: center;
`;
