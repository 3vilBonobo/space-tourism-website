import { useState } from 'react';
import { destinations } from '../data';
import {
  StyledMainDestination,
  StyledTitleSpanDest,
  StyledTitleDest,
  StyledBtnListDest,
  StyledBtnListItemDest,
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
  const [planets] = useState(destinations);
  const [value, setValue] = useState(1);
  const { name, images, description, distance, travel } = planets[value];

  const changePlanet = (idx) => {
    return setValue(idx);
  };

  return (
    <StyledMainDestination>
      <StyledTitleDest>
        <StyledTitleSpanDest>01 </StyledTitleSpanDest>Pick your destination
      </StyledTitleDest>

      <StyledPlanetSection>
        <StyledPlanetImage src={images.png} />

        <StyledPlanetInfoSection>
          <StyledBtnListDest>
            {planets.map((item, index) => {
              return (
                <StyledBtnListItemDest>
                  <StyledBtnDest onClick={() => changePlanet(index)}>
                    {item.name}
                  </StyledBtnDest>
                </StyledBtnListItemDest>
              );
            })}
          </StyledBtnListDest>
          <StyledPlanetTitle>{name}</StyledPlanetTitle>
          <StyledPlanetText>{description}</StyledPlanetText>
          <StyledPlanetInfoList>
            <StyledPlanetInfoItem>
              <StyledPlanetInfoTitle>{distance}</StyledPlanetInfoTitle>
            </StyledPlanetInfoItem>
            <StyledPlanetInfoNum>{travel}</StyledPlanetInfoNum>
          </StyledPlanetInfoList>
        </StyledPlanetInfoSection>
      </StyledPlanetSection>
    </StyledMainDestination>
  );
};

export default Destination;
