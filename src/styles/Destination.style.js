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
    flex-direction: row;
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

export const StyledBtnListDest = styled.ul``;

export const StyledBtnDest = styled.li``;

export const StyledPlanetSection = styled.section``;

export const StyledPlanetImage = styled.img``;

export const StyledPlanetInfoSection = styled.div``;

export const StyledPlanetTitle = styled.h2``;

export const StyledPlanetText = styled.p``;

export const StyledPlanetInfoList = styled.ul``;

export const StyledPlanetInfoItem = styled.li``;

export const StyledPlanetInfoTitle = styled.h3``;

export const StyledPlanetInfoNum = styled.p``;
