import styled, { keyframes } from 'styled-components';
import bgDestDesktop from '../assets/destination/background-destination-desktop.jpg';
import bgDestTablet from '../assets/destination/background-destination-tablet.jpg';
import bgDestMobile from '../assets/destination/background-destination-mobile.jpg';

export const StyledMainDestination = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: black;
  background-image: url(${bgDestMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (min-width: 600px) {
    background-image: url(${bgDestTablet});
  }
  @media only screen and (min-width: 768px) {
    background-image: url(${bgDestDesktop});
    padding-inline: 200px;
    height: 100vh;
  }
`;
export const StyledTitleSpanDest = styled.span`
  color: ${(props) => props.theme.colors.lightCyan};
`;

export const StyledTitleDest = styled.h1`
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 2.7px;
  @media only screen and (min-width: 600px) {
    font-size: 20px;
    letter-spacing: 3.38px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 28px;
    letter-spacing: 4.72px;
  }
`;

export const StyledBtnListDest = styled.ul`
  display: flex;
  flex-direction: row;
  width: 285px;
  margin-bottom: 35px;
`;

export const StyledBtnListItemDest = styled.li`
  list-style: none;
  width: 100%;
`;

export const StyledBtnDest = styled.a`
  color: ${(props) => props.theme.colors.lightCyan};
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: transparent;
  margin-inline: 10px;
  border: none;
  text-decoration: none;
  cursor: pointer;
  &::after {
    content: '';
    background: ${(props) => props.theme.colors.white};
    margin-top: 10px;
    display: block;
    right: 0;
    width: 0;
    height: 2px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:hover::after,
  &:focus::after,
  &:active::after {
    left: 0;
    right: auto;
    width: 90%;
  }
  &:hover::after {
    background: ${(props) => props.theme.colors.lightGray};
  }
`;

export const StyledPlanetSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const PlanetRotationAnimation = keyframes`
  0% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
  25% {
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
  }
  50% {
    -webkit-transform: rotate3d(0, 0, 1, 180deg);
    transform: rotate3d(0, 0, 1, 180deg);
  }
  75% {
    -webkit-transform: rotate3d(0, 0, 1, 270deg);
    transform: rotate3d(0, 0, 1, 270deg);
  }
  100% {
    -webkit-transform: rotate3d(0, 0, 1, 360deg);
    transform: rotate3d(0, 0, 1, 360deg);
  }

`;
export const StyledPlanetImage = styled.img`
  animation-name: ${PlanetRotationAnimation};
  animation-duration: 100s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin: 100px;
`;
export const StyledPlanetInfoSection = styled.div`
  margin-left: 50px;
`;

export const StyledPlanetTitle = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.fontSerif};
  font-size: 56px;
  font-weight: 400;
  text-transform: uppercase;
  @media only screen and (min-width: 600px) {
    font-size: 80px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 100px;
  }
`;

export const StyledPlanetText = styled.p`
  color: ${(props) => props.theme.colors.lightCyan};
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  font-size: 19px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 32px;
  max-width: 420px;
`;

export const StyledPlanetSeparator = styled.hr`
  max-width: 420px;
  height: 0.5px;
  color: ${(props) => props.theme.colors.lightGray};
  opacity: 0.5;
  margin: 50px 0 5px 0;
`;

export const StyledPlanetInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-right: 80px;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledPlanetInfoItem = styled.li`
  list-style: none;
`;
export const StyledPlanetInfoDistance = styled.p`
  color: ${(props) => props.theme.colors.lightGray};
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  text-transform: uppercase;
  margin: 25px 0 15px 0;
`;

export const StyledPlanetInfoTitle = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.fontSerif};
  font-size: 28px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const StyledPlanetInfoNum = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.fontSerif};
  font-size: 28px;
  font-weight: 300;
  text-transform: uppercase;
`;
