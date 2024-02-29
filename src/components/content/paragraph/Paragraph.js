import styled from "styled-components";
import { slideFromRightAnimation } from '../../../utils/keyframes';

export const Paragraph = styled.p`
  animation: ${slideFromRightAnimation} 1ms ease-out;
  animation-range: cover 0% cover 50%;
  animation-timeline: view();
  font-size: 30px;
  margin-left: 25%;
  width: 50%;

  @media (max-width: 940px) {
    animation: none;
    font-size: 25px;
    margin: 0;
    width: 100%;
  }

  @media (max-width: 513px) {
    font-size: 15px;
  }
`;