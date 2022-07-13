import React from 'react';

import { projects } from '../../constants/constants';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Img, Tag, TagList, TitleContent, UtilityList } from './ProjectsStyles';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projetos</SectionTitle>
    <GridContainer>
      {projects
        .map(({
          id, image, title, description,
          tags, source, visit
        }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title={title} />
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>
                    {tag}
                  </Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>
                Código
              </ExternalLinks>
              <ExternalLinks href={source}>
                Fonte
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
    </GridContainer>
  </Section>
);

export default Projects;