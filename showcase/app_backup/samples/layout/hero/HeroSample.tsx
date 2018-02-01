import * as React from 'react';
import { Hero, HeroBody } from 'rebul/lib/layout/hero'
import { Color } from 'rebul/lib/base/css';
import Container from 'rebul/lib/elements/container/Container';
import Title from 'rebul/lib/elements/title/Title';
import SubTitle from 'rebul/lib/elements/title/SubTitle';

const HeroSample: React.SFC<{}> = (props: {}) => {
  return (
    <Hero colors="isDanger">
      <HeroBody>
        <Container>
          <Title>Hero title</Title>
          <SubTitle>Hero subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
  );
};

export default HeroSample;
