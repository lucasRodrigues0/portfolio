
import styled from "styled-components";
import { SKILLS, PROJECTS, CONTACT, TITLE_ABOUT, ABOUT_PARAGRAPH, TITLE_SKILLS, TITLE_PROJECTS, PROJECT_LINK_TEXT, TITLE_CONTACT } from '../../utils/constants';
import { LinkButton } from "../shared/link-button";
import { Section, SectionContainer } from './section';
import { Title, TitleWrapper } from './title';
import { Paragraph } from './paragraph';
import { List, ListWrapper, ListItem} from './list';
import { ContactWrapper } from "./contact";
import { Project, ProjectDescription, ProjectTitle, ProjectWrapper, ProjectLink } from './project';

const ContentContainer = styled.div`
  background-color: #010005;
  color: white;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const Content = ({language}) => {

  const boxVariants = {
    initialLeft: {opacity: 0, x: -50},
    initialRight: {opacity: 0, x: 50},
    initialTop: {opacity: 0, y: -50},
    initialBottom: {opacity: 0, y: 50},
    horizontalSlide: {opacity: 1, x: 0},
    verticalSlide: {opacity: 1, y: 0},
    transition: {type: "tween", duration: 0.7, ease: "easeOut"}
  }

  return (
    <ContentContainer>
      <SectionContainer>
        <Section id="About">
          <TitleWrapper>
            <Title
            variants={boxVariants}
            initial="initialLeft"
            whileInView="horizontalSlide"
            transition="transition">
              {TITLE_ABOUT[`${language}`]}
            </Title>
          </TitleWrapper>
          <Paragraph
          variants={boxVariants}
          initial="initialRight"
          whileInView="horizontalSlide"
          transition="transition">
            {ABOUT_PARAGRAPH[`${language}`]}
          </Paragraph>
        </Section>
      </SectionContainer>
      <SectionContainer color="inv">
        <Section id="Skills">
          <TitleWrapper dir="right">
            <Title
            variants={boxVariants}
            initial="initialRight"
            whileInView="horizontalSlide"
            transition="transition">     
              {TITLE_SKILLS[`${language}`]}
            </Title>
          </TitleWrapper>
          <ListWrapper>
            <List
            variants={boxVariants}
            initial="initialLeft"
            whileInView="horizontalSlide"
            transition="transition">
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
      </SectionContainer>
      <SectionContainer>
        <Section id="Projects">
          <TitleWrapper>
            <Title
            variants={boxVariants}
            initial="initialLeft"
            whileInView="horizontalSlide"
            transition="transition">
              {TITLE_PROJECTS[`${language}`]}
            </Title>
          </TitleWrapper>
          <ProjectWrapper>
            {
              PROJECTS.map((proj) => {
                return (
                  <Project
                  key={proj.title}
                  variants={boxVariants}
                  initial="initialTop"
                  whileInView="verticalSlide"
                  transition="transition">
                    <ProjectTitle>{proj.title}</ProjectTitle>
                    <ProjectDescription>{proj.description[`${language}`]}</ProjectDescription>
                    <ProjectLink href={`https://${proj.link}`} target='blank'>{PROJECT_LINK_TEXT[`${language}`]}</ProjectLink>
                  </Project>
                )
              })
            }
          </ProjectWrapper>
        </Section>
      </SectionContainer>
      <SectionContainer color="inv">
        <Section id="Contact">
          <TitleWrapper dir="right">
            <Title
            variants={boxVariants}
            initial="initialRight"
            whileInView="horizontalSlide"
            transition="transition">
              {TITLE_CONTACT[`${language}`]}
            </Title>
          </TitleWrapper>
          <ContactWrapper
          variants={boxVariants}
          initial="initialBottom"
          whileInView="verticalSlide"
          transition="transition">
            {
              CONTACT.map((contact) => <LinkButton href={contact.href} target='blank' key={contact.name} color="inv">{contact.name}</LinkButton>)
            }
          </ContactWrapper>
        </Section>
      </SectionContainer>
    </ContentContainer>
  )
}