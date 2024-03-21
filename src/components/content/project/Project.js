import styled from "styled-components";
import { motion } from "framer-motion";

export const Project = styled(motion.div)`
  width: 50%;

  @media (max-width: 940px) {
    width: 100%;
  }
`;

export const ProjectWrapper = styled.div`
  align-items: center; 
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.h3`
  font-size: 30px;

  @media (max-width: 513px) {
    font-size: 20px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 20px;

  @media (max-width: 513px) {
    font-size: 15px;
  }
`;

export const ProjectLink = styled.a``;