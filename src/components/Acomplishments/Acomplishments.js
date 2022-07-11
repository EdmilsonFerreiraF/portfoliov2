import React from 'react';

import { AcomplishmentsData } from '../../constants/constants';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Conquistas pessoais
    </SectionTitle>
    <Boxes>
      {AcomplishmentsData.map((card, index) => (
        <Box key={index}>
          <BoxNum>
            {card.number}
          </BoxNum>
          <BoxText>
            {card.text}
          </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
