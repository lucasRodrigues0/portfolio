import styled from "styled-components";
import { motion } from "framer-motion";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.dir === "right" ? "right" : "left"};
  width: 100%;

  @media (max-width: 940px) {
    justify-content: center;
  }
`;

export const Title = styled(motion.h1)`
  background-color: transparent;
  font-size: 70px;
  transition: text-shadow 0.3s ease-out;
  width: fit-content;

  @media (max-width: 940px) {
    font-size: 55px;
    text-shadow: none;

    @media (max-width: 513px) {
      font-size: 40px;
    }
  }
`;