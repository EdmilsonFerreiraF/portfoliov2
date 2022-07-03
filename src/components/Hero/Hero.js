import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My purpose is to make difference by coding through technology
      </SectionText>
      <Button onClick={
        () => window.location = 'https://www.linkedin.com/in/edmilson-filho'
      }>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;