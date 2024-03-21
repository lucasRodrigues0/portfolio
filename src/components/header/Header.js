import styled from "styled-components";
import { OPTIONS } from "../../utils/constants"
import { LinkButton, ButtonsWrapper } from "../shared/link-button";
import { Navbar } from "./navbar";
import { Wrapper } from "./wrapper";
import { Select, Option } from "./select";
import { MobileMenu } from "./mobile-menu/MobileMenu";

const Head = styled.header`
  background-color: #010005;
  width: 100%;
`;

export const Header = ({language, selectLanguage}) => {

  return (
    <Head>
      <Navbar>
        <Wrapper>
          <Select onChange={selectLanguage}>
            <Option>PTBR</Option>
            <Option>EN</Option>
          </Select>
          <MobileMenu language={language} />
          <ButtonsWrapper>
            {
              OPTIONS.map((option) => 
              <LinkButton key={option.EN} href={`/#${option.EN}`}>
                {option[`${language}`]}
              </LinkButton>)              
            }
          </ButtonsWrapper>
        </Wrapper>
      </Navbar>
    </Head>
  )
}