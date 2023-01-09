import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
 <Container>
  <Div1>
    <Link href="/"> 
    <a style={{display: 'flex', alignItems: 'center', color:'white', marginBottom:20}}>
      <DiCssdeck  size="3rem"  /><Span>Ishukhan</Span>
    </a>
    </Link>
  </Div1>
  <Div2>
    <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>Technology</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
    <SocialIcons href="https://github.com/ishukhan" target='_blank'>
      <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href="hhttps://www.instagram.com/ishukha.n/" target='_blank'>
      <AiFillInstagram size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/ishtiyakkhan/" target='_blank'>
      <AiFillLinkedin size="3rem"/>
    </SocialIcons>
  </Div3>
 </Container>
);

export default Header;
