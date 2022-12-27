import { useState } from 'react';
import { destinations } from '../data';
import {
  StyledMainDestination,
  StyledTitleSpanDest,
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
  // const [destinations] = useState();

  // const { name, image, description, distance, travel } = destinations;

  return (
    <StyledMainDestination>
      <StyledTitleDest>
        <StyledTitleSpanDest>01 </StyledTitleSpanDest>Pick your destination
      </StyledTitleDest>
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
