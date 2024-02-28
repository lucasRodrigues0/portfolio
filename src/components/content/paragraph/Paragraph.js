import styled from "styled-components";
import { slideFromRightAnimation } from '../../../utils/keyframes';

export const Paragraph = styled.p`
//resolver pois como ta no topo do scroll ele nao anima direito
  animation: ${slideFromRightAnimation} 1ms ease-out;
  animation-range: cover 0% cover 50%;
  animation-timeline: view();
  font-size: 30px;
  margin-left: 25%;
  width: 50%;
`;