import styled from 'styled-components';
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
`;

export const StyledBtnListItemDest = styled.li`
  list-style: none;
`;

export const StyledBtnDest = styled.button`
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  font-size: 16px;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.lightCyan};
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

export const StyledPlanetImage = styled.img``;

export const StyledPlanetInfoSection = styled.div``;

export const StyledPlanetTitle = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.fontSerif};
  font-size: 56px;
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
`;

export const StyledPlanetInfoList = styled.ul`
  display: flex;
  flex-direction: column;
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

export const StyledPlanetInfoTitle = styled.h3`
  color: ${(props) => props.theme.colors.lightCyan};
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  text-transform: uppercase;
`;

export const StyledPlanetInfoNum = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.fontSerif};
  text-transform: uppercase;
`;
