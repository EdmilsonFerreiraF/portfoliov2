import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import SocialMedias from '../SocialMedias/SocialMedias';

import { Container, Div1, Div2, Div3, NavLink, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: 20 }}>
          <DiCssdeck size="3rem" />
          <Span>Portfólio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projetos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tecnologias</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Sobre</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialMedias />
    </Div3>
  </Container>
);

export default Header;
