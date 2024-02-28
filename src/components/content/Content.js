
import styled from "styled-components";
import { SKILLS, PROJECTS, CONTACT } from '../../utils/constants';
import { LinkButton } from "../shared/link-button";
import { Section, SectionContainer } from './section';
import { Title, TitleWrapper } from './title';
import { Paragraph } from './paragraph';
import { List, ListWrapper, ListItem} from './list';
import { ContactWrapper } from "./contact";
import { Project, ProjectDescription, ProjectTitle, ProjectWrapper } from './project';

const ContentContainer = styled.div`
  background-color: #010005;
  color: white;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;
`;

export const Content = () => {
  return (
    <ContentContainer>
      <SectionContainer>
        <Section id="About">
          <TitleWrapper>
            <Title>About Me</Title>
          </TitleWrapper>
          <Paragraph>Hello, I'm Lucas, a Brazilian web developer. I hold a degree in Systems Development and Analysis. With four years of experience in IT, specializing in change management, I'm now eager to transition into a role as a Junior Front-End Developer.
          </Paragraph>
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