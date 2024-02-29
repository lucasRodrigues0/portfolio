
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

export const Content = ({language}) => {

  return (
    <ContentContainer>
      <SectionContainer>
        <Section id="About">
          <TitleWrapper>
            <Title>
              {language === 'PTBR' ? "Sobre Mim" : language === 'EN' ? "About Me" : ""}
            </Title>
          </TitleWrapper>
          <Paragraph>
            {language === 'PTBR' ? "Olá, sou Lucas, um desenvolvedor web do Brasil. Sou graduado em Análise e Desenvolvimento de Sistemas. Com quatro anos de experiência em TI, com especialidade em Gestão de Mudanças, busco fazer a transição para uma posição de Desenvolvedor Front-end Junior." : 
            language === 'EN' ? "Hello, i'm Lucas, a Brazilian web developer. I hold a degree in Systems Development and Analysis. With four years of experience in IT, specializing in change management, I'm now eager to transition into a role as a Junior Front-End Developer." : ""}
          </Paragraph>
        </Section>
        <Section id="Skills">
          <TitleWrapper dir="right">
            <Title dir="right">
              {language === 'PTBR' ? "Habilidades" : language === 'EN' ? "Skills" : ""}
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
              {language === 'PTBR' ? "Projetos Pessoais" : language === 'EN' ? "Personal Projects" : ""}
            </Title>
          </TitleWrapper>
          <ProjectWrapper>
            {
              PROJECTS.map((proj) => {
                return (
                  <Project key={proj.title}>
                    <ProjectTitle>{proj.title}</ProjectTitle>
                    <ProjectDescription>{language === "PTBR" ? proj.description.PTBR : language === "EN" ? proj.description.EN : ""}</ProjectDescription>
                    <a href={`https://${proj.link}`} target='blank'>See More</a>
                  </Project>
                )
              })
            }
          </ProjectWrapper>
        </Section>
        <Section id="Contact">
          <TitleWrapper dir="right">
            <Title dir="right">
              {language === 'PTBR' ? "Contato" : language === 'EN' ? "Contact" : ""}
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