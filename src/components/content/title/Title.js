import styled from "styled-components";
import { slideFromRightAnimation, slideFromLeftAnimation } from '../../../utils/keyframes';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.dir === "right" ? "right" : "left"};
  width: 100%;
`;

export const Title = styled.h1`
  animation: ${props => props.dir === "right" ? slideFromRightAnimation : slideFromLeftAnimation} 1ms ease-out;
  animation-range: cover 0% cover 50%;
  animation-timeline: view();
  background-color: transparent;
  font-size: 70px;
  transition: text-shadow 0.3s ease-out;
  width: fit-content;
  &: hover {
    transition: text-shadow 0.3s ease-in;
    text-shadow: 5px 3px 22px rgba(66,1,65,0.79);
  }
`;