import styled from "styled-components";

export const SectionContainer = styled.div`
  align-items: center;
  background-color: ${props => props.color === "inv" ? "#bababa" : ""};
  color: ${props => props.color === "inv" ? "#000" : "#fff"};
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 700px;
  width: 90%;

  @media (max-width: 940px) {
    min-height: fit-content;
  }
`;