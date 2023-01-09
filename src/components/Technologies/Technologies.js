import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
  <SectionDivider/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I have Worked with a range a technologies in the Web Development field,
    Form Back-end to Designe
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem"/>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with <br/>
        React js
      </ListParagraph>
    </ListItem>

    <ListItem>
      <DiFirebase size="3rem"/>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Experience with <br/>
        Node Js and Database
      </ListParagraph>
    </ListItem>
    <ListItem>
      <DiZend size="3rem"/>
      <ListTitle>UI/UX</ListTitle>
      <ListParagraph>
        Experience with <br/>
        Tools like figma
      </ListParagraph>
    </ListItem>
  </List>
 </Section>
);

export default Technologies;
