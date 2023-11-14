import { useState } from 'react';
import { technology } from '../data';
import {
  StyledMainTech,
  StyledTitleSpanTech,
  StyledTitleTech,
  StyledBtnListTech,
  StyledBtnListItemTech,
  StyledBtnTech,
  StyledTechSection,
  StyledTechImage,
  StyledTechInfoSection,
  StyledTechName,
  StyledTechInfoList,
  StyledTechInfoBio,
  StyledTechInfoItem,
} from '../styles/Technology.style';

const Crew = () => {
  const [vehicles] = useState(technology);
  const [value, setValue] = useState(0);
  const { name, images, description } = technology[value];

  const changeTech = (idx) => {
    return setValue(idx);
  };

  return (
    <StyledMainTech>
      <StyledTitleTech>
        <StyledTitleSpanTech>03 </StyledTitleSpanTech>Space launch 101
      </StyledTitleTech>

      <StyledTechSection>
        <StyledBtnListTech>
          {vehicles.map((item, index) => {
            return (
              <StyledBtnListItemTech>
                <StyledBtnTech onClick={() => changeTech(index)}>
                  {item.name}
                </StyledBtnTech>
              </StyledBtnListItemTech>
            );
          })}
        </StyledBtnListTech>
        <StyledTechInfoSection>
          <StyledTechName>{name}</StyledTechName>
          <StyledTechInfoList>
            <StyledTechInfoItem>
              <StyledTechInfoBio>{description}</StyledTechInfoBio>
            </StyledTechInfoItem>
          </StyledTechInfoList>
        </StyledTechInfoSection>
        <StyledTechImage src={images.portrait} />
      </StyledTechSection>
    </StyledMainTech>
  );
};

export default Crew;
