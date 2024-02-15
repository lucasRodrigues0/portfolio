import { Header } from '../header';
import styled from "styled-components";

const ContentContainer = styled.section`
  background-color: black;
  color: white;
`

export const Content = () => {
  return (
    <ContentContainer>
      <Header />
      <h1>About Me</h1>
      <p>My name is Lucas, a brazilian web developer. I graduated in systems development and analysis, and after 4 years working with IT in the change management area i'm looking for opportunities as a junior front-end developer.</p>
    </ContentContainer>
  )
}