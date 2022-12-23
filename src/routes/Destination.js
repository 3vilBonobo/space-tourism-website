import { useState } from 'react';
import {
  StyledMainDestination,
  StyledTitleDest,
  StyledBtnListDest,
  StyledBtnDest,
  StyledPlanetSection,
  StyledPlanetImage,
  StyledPlanetInfoSection,
  StyledPlanetTitle,
  StyledPlanetText,
  StyledPlanetInfoList,
  StyledPlanetInfoItem,
  StyledPlanetInfoTitle,
  StyledPlanetInfoNum,
} from '../styles/Destination.style';

const Destination = () => {
  return (
    <StyledMainDestination>
      <StyledTitleDest></StyledTitleDest>
      <StyledBtnListDest>
        <StyledBtnDest></StyledBtnDest>
      </StyledBtnListDest>

      <StyledPlanetSection>
        <StyledPlanetImage />
        <StyledPlanetInfoSection>
          <StyledPlanetTitle></StyledPlanetTitle>
          <StyledPlanetText></StyledPlanetText>
          <StyledPlanetInfoList>
            <StyledPlanetInfoItem>
              <StyledPlanetInfoTitle></StyledPlanetInfoTitle>
            </StyledPlanetInfoItem>
            <StyledPlanetInfoNum></StyledPlanetInfoNum>
          </StyledPlanetInfoList>
        </StyledPlanetInfoSection>
      </StyledPlanetSection>
    </StyledMainDestination>
  );
};

export default Destination;
