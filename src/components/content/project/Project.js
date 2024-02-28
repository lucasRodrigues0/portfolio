import styled from "styled-components";
import { slideFromTopAnimation } from '../../../utils/keyframes';

export const Project = styled.div`
  animation: ${slideFromTopAnimation} 1ms ease-out;
  animation-range: cover 0% cover 50%;
  animation-timeline: view();
  width: 20%;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectTitle = styled.h3`
  font-size: 30px;
`;

export const ProjectDescription = styled.p`
  font-size: 20px;
`;