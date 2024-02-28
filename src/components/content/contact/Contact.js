import styled from "styled-components";
import { slideFromBottomAnimation } from '../../../utils/keyframes';

export const ContactWrapper = styled.div`
  animation: ${slideFromBottomAnimation} 1ms ease-out;
  animation-range: cover 0% cover 50%;
  animation-timeline: view();
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;