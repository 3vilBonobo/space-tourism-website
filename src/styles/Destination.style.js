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
