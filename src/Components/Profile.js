import card from "../Images/card.svg";
import victor from "../Images/victor.jpg";

import {
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
            <p>26</p>
          </RowDiv>
          <StyledP>London</StyledP>
          <RowDiv border>
            <div>
              <p>80K</p>
              <p>Followers</p>
            </div>
            <div>
              <p>803K</p>
              <p>Likes</p>
            </div>
            <div>
              <p>1.4K</p>
              <p>Photos</p>
            </div>
          </RowDiv>
        </div>
      </StyledDiv>
    </StyledSection>
  );
};
