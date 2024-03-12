import styled from "styled-components";
import { slideFromRightAnimation, slideFromLeftAnimation } from '../../../utils/keyframes';
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

  &: hover {
    transition: text-shadow 0.3s ease-in;
    text-shadow: 5px 3px 22px rgba(66,1,65,0.79);
  }

  @media (max-width: 940px) {
    animation: none;
    font-size: 55px;
    text-shadow: none;

    @media (max-width: 513px) {
      font-size: 40px;
    }
  }
`;