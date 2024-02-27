
import { SKILLS, PROJECTS, CONTACT } from '../../utils/constants';
import { LinkButton } from '../header'
import styled, { keyframes } from "styled-components";

const slideFromLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const slideFromRightAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(50%);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const slideFromTopAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const slideFromBottomAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

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
  animation: ${props => props.dir === "right" ? slideFromRightAnimation : slideFromLeftAnimation} 1ms ease-out;
  animation-range: cover 0% cover 50%;
  animation-timeline: view();
  background-color: transparent;
  font-size: 70px;
  transition: text-shadow 0.3s ease-out;
  width: fit-content;
  &: hover {
    transition: text-shadow 0.3s ease-in;
    text-shadow: 5px 3px 22px rgba(66,1,65,0.79);
  }
`;

const Paragraph = styled.p`
//resolver pois como ta no topo do scroll ele nao anima direito
  animation: ${slideFromRightAnimation} 1ms ease-out;
  animation-range: cover 0% cover 50%;
  animation-timeline: view();
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
  animation: ${slideFromLeftAnimation} 1ms ease-out;
  animation-range: cover 0% cover 50%;
  animation-timeline: view();
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
  animation: ${slideFromTopAnimation} 1ms ease-out;
  animation-range: cover 0% cover 50%;
  animation-timeline: view();
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
  animation: ${slideFromBottomAnimation} 1ms ease-out;
  animation-range: cover 0% cover 50%;
  animation-timeline: view();
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
            <Title>About Me</Title>
          </TitleWrapper>
          <Paragraph>Hello, I'm Lucas, a Brazilian web developer. I hold a degree in Systems Development and Analysis. With four years of experience in IT, specializing in change management, I'm now eager to transition into a role as a Junior Front-End Developer.</Paragraph>
        </Section>
        <Section id="Skills">
          <TitleWrapper dir="right">
            <Title dir="right">Skills</Title>
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
            <Title>Personal Projects</Title>
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
            <Title dir="right">Contact</Title>
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