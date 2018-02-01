import * as React from 'react';
import { Size6 } from 'rebul/lib/base/css';
import SubTitle from 'rebul/lib/elements/title/SubTitle';
import HTMLComponent, { HTMLDivProps } from 'rebul/lib/base/html/HTML';
import HeroBody from 'rebul/lib/layout/hero/HeroBody';
import HeroHead from 'rebul/lib/layout/hero/HeroHead';

export interface SampleProps extends HTMLDivProps {
  name: string;
  description?: string;
  element: JSX.Element;
}

export default class Sample extends HTMLComponent<SampleProps> {

  public render(): JSX.Element {

    const { name, description, element } = this.props;
    return (
      <div>
        <SubTitle size={Size6.is6}> {name} </SubTitle>
        <HeroHead>
          {description}
        </HeroHead>
        <HeroBody >
          {element}
        </HeroBody>
      </div>
    );
  }
}
