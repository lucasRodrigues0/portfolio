import styled from "styled-components";
import { OPTIONS } from "../../utils/constants"

const Head = styled.header`
  background-color: #010005;
  width: 100%;
`;

const Navbar = styled.nav`
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  Justify-content: space-between;
  width: 90%;
`;

const Button = styled.button`
  background-color: rgba(66, 1, 65, 0);
  border: 2px solid #420141;
  border-radius: 17px;
  color: white;
  font-family: sans-serif;
  font-size: 25px;
  height: 100%;
  margin: 1rem 0.2rem;
  padding: 10px 5px;
  transition: background-color 0.2s ease-out, box-shadow 0.3s ease-out;
  width: 170px;
  &: last-child {
    margin-right: 0;
  }
  &: hover {
    background-color: rgba(66, 1, 65, 1);
    box-shadow: 8px 1px 61px 18px rgba(66,1,65,0.52);
    transition: background-color 0.2s ease-in, box-shadow 0.3s ease-in;
  }
`;

const Logo = styled.div`
  background-color: #420141;
  border-radius: 100%;
  color: white;
  display: block;
  font-size: 60px;
  height: 100%;
  width: 87px;
  text-align: center;
`;

const ButtonsWrapper = styled.div`
  display:flex;
  width: fit-content;
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
              OPTIONS.map((option) => <Button key={option}>{option}</Button>)              
            }
          </ButtonsWrapper>
        </Wrapper>
      </Navbar>
    </Head>
  )
}