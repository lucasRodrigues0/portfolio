import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;

  @media (max-width: 940px) {
    flex-direction: row-reverse;
    padding: 0 10px;
    width: 100%;
  }
`;