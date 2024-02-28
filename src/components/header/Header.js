import styled from "styled-components";
import { OPTIONS } from "../../utils/constants"
import { LinkButton, ButtonsWrapper } from "../shared/link-button";
import { Navbar } from "./navbar";
import { Logo } from "./logo";
import { Wrapper } from "./wrapper";

const Head = styled.header`
  background-color: #010005;
  width: 100%;

  @media (max-width: 940px) {
    display: none;
  }
`;

export const Header = () => {

  return (
    <Head>
      <Navbar>
        <Wrapper>
          <Logo>
            L
          </Logo>
          <ButtonsWrapper>
            {
              OPTIONS.map((option) => <LinkButton key={option} href={`/#${option}`}>{option}</LinkButton>)              
            }
          </ButtonsWrapper>
        </Wrapper>
      </Navbar>
    </Head>
  )
}