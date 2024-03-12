import styled from "styled-components";
import { motion } from "framer-motion";

export const Project = styled(motion.div)`
  width: 20%;

  @media (max-width: 940px) {
    animation: none;
    width: 100%;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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