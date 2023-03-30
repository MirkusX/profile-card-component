import card from "../Images/card.svg";
import {
  RowDiv,
  StyledDiv,
  StyledImg,
  StyledSection,
} from "./StyledComponents";
export const Profile = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledImg src={card} />
        <div>
          <RowDiv>
            <h1>Victor Crest</h1>
            <p>26</p>
          </RowDiv>
          <p>London</p>
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
