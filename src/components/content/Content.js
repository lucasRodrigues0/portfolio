
import { SKILLS, PROJECTS } from '../../utils/constants';
import styled from "styled-components";

const ContentContainer = styled.div`
  background-color: #010005;
  color: white;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.dir === "right" ? "right" : "left"};
  width: 100%;
`;

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
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: circle;
  margin-right: 30%;
  width: 50%;
`;

const ListItem = styled.li`
  font-size: 30px;
`;

const Project = styled.div`
  width: 20%;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectTitle = styled.h3`
  font-size: 30px;
`;

const ProjectDescription = styled.p`
  font-size: 20px;
`;

export const Content = () => {
  return (
    <ContentContainer>
      <SectionContainer>
        <Section>
          <TitleWrapper>
            <Title>About Me</Title>
          </TitleWrapper>
          <Paragraph>Hello, I'm Lucas, a Brazilian web developer. I hold a degree in Systems Development and Analysis. With four years of experience in IT, specializing in change management, I'm now eager to transition into a role as a Junior Front-End Developer.</Paragraph>
        </Section>
        <Section>
          <TitleWrapper dir="right">
            <Title>Skills</Title>
          </TitleWrapper>
          <ListWrapper>
            <List>
              {
                SKILLS.map((skill) => {
                  return (
                      <ListItem>{skill}</ListItem>
                  );
                })
              }
            </List>
          </ListWrapper>
        </Section>
        <Section>
          <TitleWrapper>
            <Title>Personal Projects</Title>
          </TitleWrapper>
          <ProjectWrapper>
            {
              PROJECTS.map((proj) => {
                return (
                  <Project>
                    <ProjectTitle>{proj.title}</ProjectTitle>
                    <ProjectDescription>{proj.description}</ProjectDescription>
                    {/* <h4>Made with:</h4>
                    <p>{proj.techs}</p> */}
                    <a href={`https://${proj.link}`} target='blank'>See More</a>
                  </Project>
                )
              })
            }
          </ProjectWrapper>
        </Section>
        <Section>
          <TitleWrapper dir="right">
            <Title>Contact</Title>
          </TitleWrapper>
        </Section>
      </SectionContainer>
    </ContentContainer>
  )
}