import styled from 'styled-components';
import bgTechDesktop from '../assets/technology/background-technology-desktop.jpg';
import bgTechTablet from '../assets/technology/background-technology-tablet.jpg';
import bgTechMobile from '../assets/technology/background-technology-mobile.jpg';

export const StyledMainTech = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: black;
  background-image: url(${bgTechMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (min-width: 600px) {
    background-image: url(${bgTechTablet});
  }
  @media only screen and (min-width: 768px) {
    background-image: url(${bgTechDesktop});
    flex-direction: row;
    padding-inline: 200px;
    height: 100vh;
  }
`;
