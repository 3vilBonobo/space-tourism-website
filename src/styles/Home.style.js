import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bgDesktop from '../assets/home/background-home-desktop.jpg';
import bgTablet from '../assets/home/background-home-tablet.jpg';
import bgMobile from '../assets/home/background-home-mobile.jpg';

export const StyledMainHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: black;
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (min-width: 600px) {
    background-image: url(${bgTablet});
  }
  @media only screen and (min-width: 768px) {
    background-image: url(${bgDesktop});
    flex-direction: row;
    padding-inline: 200px;
    height: 100vh;
    padding-top: 200px;
  }
`;

export const StyledLeftSectionHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledUpperTitleHome = styled.h2`
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.lightCyan};
  text-transform: uppercase;
  letter-spacing: 4.72px;
  padding-left: 10px;
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
export const StyledBottomTitleHome = styled.h1`
  font-family: ${(props) => props.theme.fonts.fontSerif};
  font-size: 80px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  @media only screen and (min-width: 600px) {
    font-size: 150px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 150px;
  }
`;
export const StyledTextHome = styled.p`
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  font-size: 15px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.lightCyan};
  padding-left: 10px;
  letter-spacing: 1px;
  @media only screen and (min-width: 600px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 768px) {
    max-width: 440px;
    font-size: 18px;
  }
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
  &:hover {
    box-shadow: 10px 200px grey;
  }
  @media only screen and (min-width: 600px) {
    width: 242px;
    height: 242px;
    font-size: 32px;
  }
  @media only screen and (min-width: 768px) {
    width: 274px;
    height: 274px;
    font-size: 32px;
  }
`;
