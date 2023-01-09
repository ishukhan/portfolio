import React from 'react';
import jsPDF from 'jspdf';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


function saveResume(){
 
  var doc = new jsPDF('portrait', 'px', 'a4', false)
  doc.addImage('https://i.ibb.co/9Hb7Zp5/ishukhan.jpg', 'PNG', 0,0,417,653)
  doc.save('ishu.pdf')
  
}


const Hero = () => (

  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      A self-motivated Web Developer. Passionate and hardworking with penchant for meeting deadlines. Interested in
exploring things,
      </SectionText>
      {/* <Button onClick={() => window.location= 'https://i.ibb.co/9Hb7Zp5/ishukhan.jpg'}>Download CV</Button> */}
      <Button onClick={() => saveResume()}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;