
import { SKILLS, PROJECTS } from '../../utils/constants';
import styled from "styled-components";

const ContentContainer = styled.div`
  background-color: #010005;
  color: white;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;
  border: 1px solid red;
`

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid green;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  background-color: transparent;
  font-size: 70px;
  width: fit-content;
  transition: text-shadow 0.3s ease-out;
  &: hover {
    transition: text-shadow 0.3s ease-in;
    text-shadow: 5px 3px 22px rgba(66,1,65,0.79);
  }
`;

const Paragraph = styled.p`
  width: 50%;
  font-size: 30px;
  margin-left: 25%;
`

export const Content = () => {
  return (
    <ContentContainer>
      <SectionContainer>
        <Section>
          <Title>About Me</Title>
          <Paragraph>Hello, I'm Lucas, a Brazilian web developer. I hold a degree in Systems Development and Analysis. With four years of experience in IT, specializing in change management, I'm now eager to transition into a role as a Junior Front-End Developer.</Paragraph>
        </Section>
        <Section>
          <Title dir="right">Skills</Title>
          {
            SKILLS.map((skill) => {
              return (
                <div>
                  <h5>{skill}</h5>
                </div>
              );
            })
          }
        </Section>
      </SectionContainer>
      {/* <section>
        <h1>Personal Projects</h1>
        {
          PROJECTS.map((proj) => {
            return (
              <div>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <h4>Made with:</h4>
                <p>{proj.tech}</p>
                <a href={`https://${proj.link}`} target='blank'>See More</a>
              </div>
            )
          })
        }
      </section> */}
    </ContentContainer>
  )
}