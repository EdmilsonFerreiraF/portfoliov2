import React from 'react';

import SocialMedias from '../SocialMedias/SocialMedias';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Chamar
          </LinkTitle>
          <LinkItem href="tel:111-111-1111">
            111-111-1111
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            Enviar
          </LinkTitle>
          <LinkItem href="mailto:edmilsonf.o3@gmail.com">
            edmilsonf.o3@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Inovando um projeto por vez
          </Slogan>
        </CompanyContainer>
        <SocialMedias />
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
