import styled from "styled-components";
import { motion } from "framer-motion";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
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
    padding: 25px;
  }

  @media (max-width: 513px) {
    padding: 20px;
  }
`;

export const ListItem = styled.li`
  font-size: 30px;
  padding: 0;

  @media (max-width: 513px) {
    font-size: 15px;
  }
`;