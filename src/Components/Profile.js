import card from "../Images/card.svg";
import { StyledDiv, StyledImg } from "./StyledComponents";
export const Profile = () => {
  return (
    <section>
      <StyledDiv>
        <StyledImg src={card} />
        <div>
          <div>
            <h1>Victor Crest</h1>
            <p>26</p>
          </div>
          <p>London</p>
          <div>
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
          </div>
        </div>
      </StyledDiv>
    </section>
  );
};
