import { styled } from "styled-components";

export const LinkButton = styled.a`
  background-color: rgba(66, 1, 65, 0);
  border: 2px solid ${props => props.color === "inv" ? "#000" : "#fff"};
  border-radius: 50px;
  color: ${props => props.color === "inv" ? "#000" : "#fff"};
  cursor: pointer;
  font-size: 20px;
  height: "100%";
  margin: 1rem 0.2rem;
  padding: 10px 5px;
  transition: background-color 0.2s ease-out, box-shadow 0.3s ease-out;
  text-align: center;
  text-decoration: none;
  width: 170px;

  &: last-child {
    margin-right: 0;
  }

  &: hover {
    background-color: ${props => props.color === "inv" ? "#000" : "#fff"};
    box-shadow: 8px 1px 61px 18px ${props => props.color === "inv" ? "rgba(0,0,0,0.2)" : "rgba(255, 255, 255, 0.2)"};
    color: ${props => props.color === "inv" ? "#fff" : "#000"};
    transition: background-color 0.2s ease-in, box-shadow 0.3s ease-in;
  }

  @media (max-width: 513px) {
    font-size: 20px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: fit-content;

  @media (max-width: 940px) {
    display: none;
  }
`;