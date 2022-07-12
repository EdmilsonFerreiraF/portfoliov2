import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import TechnologyList from '../TechnologyList/TechnologyList';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>
      Tecnologias
    </SectionTitle>
    <SectionText>
      Já trabalhei com uma variedade de tecnologias do desenvolvimento web
    </SectionText>
    <TechnologyList />
  </Section>
);

export default Technologies;
