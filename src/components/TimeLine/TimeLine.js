import React, { useEffect, useRef, useState } from 'react';

import { TimeLineData } from '../../constants/constants';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import CarouselNavigation from '../CarouselNavigation/CarouselNavigation';
import TimeLineItem from '../TimeLineItem/TimeLineItem';
import { CarouselContainer } from './TimeLineStyles';

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>
        Sobre Mim
      </SectionTitle>
      <SectionText>
        Meu propósito é fazer a diferença e ajudar pessoas por meio do código
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <TimeLineItem item={item} index={index} activeItem={activeItem} />
          ))}
        </>
      </CarouselContainer>
      <CarouselNavigation activeItem={activeItem} handleClick={handleClick} />
      <SectionDivider />
    </Section>
  );
};

export default Timeline;