import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:766-704-9362'>+91-7667049362</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:ishukk00@gmail.com'>ishukk00@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/ishukhan"  target='_blank'>
      <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://www.instagram.com/ishukha.n/"  target='_blank'>
      <AiFillInstagram size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/ishtiyakkhan/"  target='_blank'>
      <AiFillLinkedin size="3rem"/>
    </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
