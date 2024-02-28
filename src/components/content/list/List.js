import styled from "styled-components";
import { slideFromLeftAnimation } from "../../../utils/keyframes";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

export const List = styled.ul`
  animation: ${slideFromLeftAnimation} 1ms ease-out;
  animation-range: cover 0% cover 50%;
  animation-timeline: view();
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: circle;
  margin-right: 30%;
  width: 50%;
`;

export const ListItem = styled.li`
  font-size: 30px;
`;