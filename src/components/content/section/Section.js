import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 700px;

  @media (max-width: 940px) {
    min-height: fit-content;
  }
`;