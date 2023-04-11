import card from "../Images/card.svg";
import victor from "../Images/victor.jpg";

import {
  GrayNum,
  RowDiv,
  StyledDiv,
  StyledH1,
  StyledImg,
  StyledP,
  StyledSection,
} from "./StyledComponents";
export const Profile = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledImg src={card} />
        <StyledImg profile src={victor} />
        <div>
          <RowDiv>
            <StyledH1>Victor Crest</StyledH1>
            <GrayNum>26</GrayNum>
          </RowDiv>
          <StyledP gray>London</StyledP>
          <RowDiv border>
            <div>
              <StyledP noMarginBottom>80K</StyledP>
              <StyledP small>Followers</StyledP>
            </div>
            <div>
              <StyledP noMarginBottom>803K</StyledP>
              <StyledP small>Likes</StyledP>
            </div>
            <div>
              <StyledP noMarginBottom>1.4K</StyledP>
              <StyledP small>Photos</StyledP>
            </div>
          </RowDiv>
        </div>
      </StyledDiv>
    </StyledSection>
  );
};
