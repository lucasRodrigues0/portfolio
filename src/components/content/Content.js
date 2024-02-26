
import { SKILLS, PROJECTS, CONTACT } from '../../utils/constants';
import { LinkButton } from '../header'
import styled, { keyframes } from "styled-components";

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
  min-height: 515px;
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
  /* transform: translateX(${props => props.animation === "left" ? "-50%" : "50%"}); */ //vai sair
  transition: text-shadow 0.3s ease-out;
  width: fit-content;
  &: hover {
    transition: text-shadow 0.3s ease-in;
    text-shadow: 5px 3px 22px rgba(66,1,65,0.79);
  }
`;

const Paragraph = styled.p`
  font-size: 30px;
  margin-left: 25%;
  width: 50%;
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
  transform: translateY(20%);
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

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Content = () => {
  return (
    <ContentContainer>
      <SectionContainer>
        <Section id="About">
          <TitleWrapper>
            <Title animation="left">About Me</Title>
          </TitleWrapper>
          <Paragraph>Hello, I'm Lucas, a Brazilian web developer. I hold a degree in Systems Development and Analysis. With four years of experience in IT, specializing in change management, I'm now eager to transition into a role as a Junior Front-End Developer.</Paragraph>
        </Section>
        <Section id="Skills">
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
        <Section id="Projects">
          <TitleWrapper>
            <Title animation="left">Personal Projects</Title>
          </TitleWrapper>
          <ProjectWrapper>
            {
              PROJECTS.map((proj) => {
                return (
                  <Project>
                    <ProjectTitle>{proj.title}</ProjectTitle>
                    <ProjectDescription>{proj.description}</ProjectDescription>
                    <a href={`https://${proj.link}`} target='blank'>See More</a>
                  </Project>
                )
              })
            }
          </ProjectWrapper>
        </Section>
        <Section id="Contact">
          <TitleWrapper dir="right">
            <Title>Contact</Title>
          </TitleWrapper>
          <ContactWrapper>
            {
              CONTACT.map((contact) => <LinkButton href={contact.href} target='blank'>{contact.name}</LinkButton>)
            }
          </ContactWrapper>
        </Section>
      </SectionContainer>
    </ContentContainer>
  )
}