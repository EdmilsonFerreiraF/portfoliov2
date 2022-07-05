import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem vindo Ao <br />
        Meu portfólio pessoal
      </SectionTitle>
      <SectionText>
        Meu propósito é fazer a diferença e ajudar pessoas por meio do código
      </SectionText>
      <Button onClick={
        () => window.location = 'https://www.linkedin.com/in/edmilson-filho'
      }>
        Saiba mais
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;