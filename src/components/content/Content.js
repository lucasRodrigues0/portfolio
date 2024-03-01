
import styled from "styled-components";
import { SKILLS, PROJECTS, CONTACT, TITLE_ABOUT, ABOUT_PARAGRAPH, TITLE_SKILLS, TITLE_PROJECTS, PROJECT_LINK_TEXT, TITLE_CONTACT } from '../../utils/constants';
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

export const Content = ({language}) => {

  return (
    <ContentContainer>
      <SectionContainer>
        <Section id="About">
          <TitleWrapper>
            <Title>
              {TITLE_ABOUT[`${language}`]}
            </Title>
          </TitleWrapper>
          <Paragraph>
            {ABOUT_PARAGRAPH[`${language}`]}
          </Paragraph>
        </Section>
        <Section id="Skills">
          <TitleWrapper dir="right">
            <Title dir="right">
              {TITLE_SKILLS[`${language}`]}
            </Title>
          </TitleWrapper>
          <ListWrapper>
            <List>
              {
                SKILLS.map((skill) => {
                  return (
                      <ListItem key={skill}>{skill}</ListItem>
                  );
                })
              }
            </List>
          </ListWrapper>
        </Section>
        <Section id="Projects">
          <TitleWrapper>
            <Title>
              {TITLE_PROJECTS[`${language}`]}
            </Title>
          </TitleWrapper>
          <ProjectWrapper>
            {
              PROJECTS.map((proj) => {
                return (
                  <Project key={proj.title}>
                    <ProjectTitle>{proj.title}</ProjectTitle>
                    <ProjectDescription>{proj.description[`${language}`]}</ProjectDescription>
                    <a href={`https://${proj.link}`} target='blank'>{PROJECT_LINK_TEXT[`${language}`]}</a>
                  </Project>
                )
              })
            }
          </ProjectWrapper>
        </Section>
        <Section id="Contact">
          <TitleWrapper dir="right">
            <Title dir="right">
              {TITLE_CONTACT[`${language}`]}
            </Title>
          </TitleWrapper>
          <ContactWrapper>
            {
              CONTACT.map((contact) => <LinkButton href={contact.href} target='blank' key={contact.name}>{contact.name}</LinkButton>)
            }
          </ContactWrapper>
        </Section>
      </SectionContainer>
    </ContentContainer>
  )
}