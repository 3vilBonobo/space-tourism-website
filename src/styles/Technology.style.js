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
    padding-inline: 200px;
    height: 120vh;
  }
`;
export const StyledTitleSpanTech = styled.span`
  color: ${(props) => props.theme.colors.lightCyan};
`;

export const StyledTitleTech = styled.h1`
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

export const StyledBtnListTech = styled.ul`
  display: flex;
  flex-direction: column;
  width: 285px;
  margin-bottom: 35px;
  margin-top: 50px;
`;

export const StyledBtnListItemTech = styled.li`
  list-style: none;

  width: 100%;
`;

export const StyledBtnTech = styled.a`
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

export const StyledTechSection = styled.section`
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

export const StyledTechImage = styled.img``;
export const StyledTechInfoSection = styled.div`
  min-width: 500px;
`;

export const StyledTechName = styled.h2`
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

export const StyledTechInfoList = styled.ul`
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

export const StyledTechInfoItem = styled.li`
  list-style: none;
`;

export const StyledTechInfoBio = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.fontSansSerif};
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 1.5px;
`;
