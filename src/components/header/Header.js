import styled from "styled-components";

const options = ['About', 'Projects', 'Contact'];

const Head = styled.header`
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
  border: 1px solid red;
  display: flex;
  Justify-content: space-between;
  width: 90%;
`;

const Button = styled.button`
  background-color: white;
  border: 1px solid black;
  margin: 5px 0;
  height: 100%;
  padding: 10px 5px;
`;

export const Header = () => {

  return (
    <Head>
      <Navbar>
        <Wrapper>
          Logo
          <div>
            {
              options.map((option) => <Button key={option}>{option}</Button>)
            }
          </div>
        </Wrapper>
      </Navbar>
    </Head>
  )
}