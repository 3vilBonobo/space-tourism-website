import { useState } from 'react';
import { crew } from '../data';
import {
  StyledMainCrew,
  StyledTitleSpanCrew,
  StyledTitleCrew,
  StyledBtnListCrew,
  StyledBtnListItemCrew,
  StyledBtnCrew,
  StyledCrewSection,
  StyledCrewImage,
  StyledCrewInfoSection,
  StyledCrewName,
  StyledCrewRole,
  StyledCrewInfoList,
  StyledCrewInfoItem,
  StyledCrewInfoBio,
} from '../styles/Crew.style';

const Crew = () => {
  const [members] = useState(crew);
  const [value, setValue] = useState(0);
  const { name, images, role, bio } = crew[value];

  const changeCrew = (idx) => {
    return setValue(idx);
  };

  return (
    <StyledMainCrew>
      <StyledTitleCrew>
        <StyledTitleSpanCrew>02 </StyledTitleSpanCrew>Meet your crew
      </StyledTitleCrew>

      <StyledCrewSection>
        <StyledCrewInfoSection>
          <StyledCrewRole>{role}</StyledCrewRole>
          <StyledCrewName>{name}</StyledCrewName>
          <StyledCrewInfoList>
            <StyledCrewInfoItem>
              <StyledCrewInfoBio>{bio}</StyledCrewInfoBio>
            </StyledCrewInfoItem>
          </StyledCrewInfoList>
          <StyledBtnListCrew>
            {members.map((item, index) => {
              return (
                <StyledBtnListItemCrew>
                  <StyledBtnCrew onClick={() => changeCrew(index)}>
                    {item.name}
                  </StyledBtnCrew>
                </StyledBtnListItemCrew>
              );
            })}
          </StyledBtnListCrew>
        </StyledCrewInfoSection>
        <StyledCrewImage src={images.png} />
      </StyledCrewSection>
    </StyledMainCrew>
  );
};

export default Crew;
