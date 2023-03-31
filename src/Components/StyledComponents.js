import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 25%;
  position: relative;
`;

export const StyledImg = styled.img`
  width: 100%;
  ${(props) => {
    if (props.profile)
      return `
    border-radius: 50%;
    position: absolute;
    width: 25%;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 50%;
    border: 5px solid white;
    `;
  }}
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
`;

export const RowDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-top: 3em;
  ${(props) => {
    if (props.border)
      return `
      border-top: 1px solid black;
      margin-top: 0;
      justify-content: space-around;
    `;
  }}
`;

export const StyledH1 = styled.h1`
  margin: 0;
`;

export const StyledP = styled.p`
  margin-top: 0;
`;
