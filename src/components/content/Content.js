import { Header } from '../header';
import { SKILLS, PROJECTS } from '../../utils/constants';
import styled from "styled-components";

const ContentContainer = styled.section`
  background-color: black;
  color: white;
`

const SectionContainer = styled.div`
  display: flex;
`

export const Content = () => {
  return (
    <ContentContainer>
      <Header />
      <SectionContainer>
        <section>
          <h1>About Me</h1>
          <p>My name is Lucas, a brazilian web developer. I graduated in systems development and analysis, and after 4 years working with IT in the change management area i'm looking for opportunities as a Junior front-end developer.</p>
        </section>
      </SectionContainer>
      <section>
          <h1>Skills</h1>
          {
            SKILLS.map((skill) => {
              return (
                <div>
                  <img src={skill.img}/>
                  <h5>{skill.name}</h5>
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