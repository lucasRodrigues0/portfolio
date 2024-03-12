import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 940px) {
    animation: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;