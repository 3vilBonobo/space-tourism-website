import styled from 'styled-components';
import bgCrewDesktop from '../assets/crew/background-crew-desktop.jpg';
import bgCrewTablet from '../assets/crew/background-crew-tablet.jpg';
import bgCrewMobile from '../assets/crew/background-crew-mobile.jpg';

export const StyledMainCrew = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 130vh;
  background-color: black;
  background-image: url(${bgCrewMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (min-width: 600px) {
    background-image: url(${bgCrewTablet});
  }
  @media only screen and (min-width: 768px) {
    background-image: url(${bgCrewDesktop});
    padding-inline: 200px;
  }
`;

export const StyledTitleSpanCrew = styled.span`
  color: ${(props) => props.theme.colors.lightCyan};
`;

export const StyledTitleCrew = styled.h1`
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 2.7px;
  align-self: start;

  @media only screen and (min-width: 600px) {
    font-size: 20px;
    letter-spacing: 3.38px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 28px;
    letter-spacing: 4.72px;
    margin-top: 200px;
  }
`;

export const StyledBtnListCrew = styled.ul`
  display: flex;
  flex-direction: row;
  width: 285px;
  margin-bottom: 35px;
  margin-top: 50px;
`;

export const StyledBtnListItemCrew = styled.li`
  list-style: none;
  width: 100%;
`;

export const StyledBtnCrew = styled.a`
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
    display: block;
    margin-top: 10px;
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

export const StyledCrewSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 90px;
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledCrewImage = styled.img``;
export const StyledCrewInfoSection = styled.div`
  min-width: 500px;
`;

export const StyledCrewName = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.fontSerif};
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  @media only screen and (min-width: 600px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 56px;
    margin-bottom: 20px;
  }
`;

export const StyledCrewRole = styled.p`
  color: ${(props) => props.theme.colors.lightCyan};
  font-family: ${(props) => props.theme.fonts.fontSerif};
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 32px;
  max-width: 420px;
  text-transform: uppercase;
  @media only screen and (min-width: 600px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

export const StyledCrewInfoList = styled.ul`
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

export const StyledCrewInfoItem = styled.li`
  list-style: none;
`;

export const StyledCrewInfoBio = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 1.5px;
`;
