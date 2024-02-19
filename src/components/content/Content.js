
import { SKILLS, PROJECTS } from '../../utils/constants';
import styled from "styled-components";

const ContentContainer = styled.section`
  background-color: #010005;
  color: white;
`

const SectionContainer = styled.div`
  display: flex;
`

export const Content = () => {
  return (
    <ContentContainer>
      <SectionContainer>
        <section>
          <h1>About Me</h1>
          <p>Hello, I'm Lucas, a Brazilian web developer. I hold a degree in Systems Development and Analysis. With four years of experience in IT, specializing in change management, I'm now eager to transition into a role as a Junior Front-End Developer.</p>
        </section>
      </SectionContainer>
      <section>
          <h1>Skills</h1>
          {
            SKILLS.map((skill) => {
              return (
                <div>
                  <h5>{skill}</h5>
                </div>
              )
            })
          }
      </section>
      <section>
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
      </section>
    </ContentContainer>
  )
}