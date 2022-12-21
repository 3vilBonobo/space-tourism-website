import {
  StyledMainHome,
  StyledLeftSectionHome,
  StyledRightSectionHome,
  StyledUpperTitleHome,
  StyledBottomTitleHome,
  StyledTextHome,
  StyledButtonHome,
} from '../styles/Home.style';

const home = () => {
  return (
    <StyledMainHome>
      <StyledLeftSectionHome>
        <StyledUpperTitleHome>So, you want to travel to</StyledUpperTitleHome>
        <StyledBottomTitleHome>Space</StyledBottomTitleHome>
        <StyledTextHome>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </StyledTextHome>
      </StyledLeftSectionHome>
      <StyledRightSectionHome>
        <StyledButtonHome>EXPLORE</StyledButtonHome>
      </StyledRightSectionHome>
    </StyledMainHome>
  );
};

export default home;
