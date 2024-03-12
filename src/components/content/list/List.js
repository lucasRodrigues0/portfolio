import styled from "styled-components";
import { slideFromLeftAnimation } from "../../../utils/keyframes";
import { motion } from "framer-motion";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const List = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: circle;
  margin-right: 30%;
  width: 50%;

  @media (max-width: 940px) {
    animation: none;
    margin: 0;
  }
`;

export const ListItem = styled.li`
  font-size: 30px;

  @media (max-width: 513px) {
    font-size: 15px;
  }
`;