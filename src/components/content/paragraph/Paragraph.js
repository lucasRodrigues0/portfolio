import styled from "styled-components";
import { motion } from "framer-motion";

export const Paragraph = styled(motion.p)`
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