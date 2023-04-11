import styled from "styled-components";
import top from "../Images/top.svg";

export const StyledDiv = styled.div`
  width: 25%;
  position: relative;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
  @media (max-width: 811px) {
    width: 80%;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
  ${(props) => {
    if (props.profile)
      return `
    border-radius: 50%;
    position: absolute;
    width: 25%;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 45%;
    border: 5px solid white;
    `;
  }}
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  background: url(${top});
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
      border-top: 1px solid gray;
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
  ${(props) => {
    if (props.small)
      return `
    font-size: 0.7rem;
    color: gray;`;
  }}
  ${(props) => {
    if (props.gray)
      return `
    color: gray;`;
  }}
  ${(props) => {
    if (props.noMarginBottom)
      return `
    margin-bottom: 0;
    margin-top: 1.5em;`;
  }}
`;

export const GrayNum = styled.p`
  color: gray;
`;
