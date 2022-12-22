import styled from 'styled-components';
import bgCrewDesktop from '../assets/crew/background-crew-desktop.jpg';
import bgCrewTablet from '../assets/crew/background-crew-tablet.jpg';
import bgCrewMobile from '../assets/crew/background-crew-mobile.jpg';

export const StyledMainCrew = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: black;
  background-image: url(${bgCrewMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (min-width: 600px) {
    background-image: url(${bgCrewTablet});
  }
  @media only screen and (min-width: 768px) {
    background-image: url(${bgCrewDesktop});
    flex-direction: row;
    padding-inline: 200px;
    height: 100vh;
  }
`;
