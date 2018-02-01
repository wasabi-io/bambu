import * as React from 'react';
import { Size6 } from 'rebul/lib/base/css';
import Title from 'rebul/lib/elements/title/Title';
import Stateless from 'wasabi-ui/lib/Stateless';
import Sample, { SampleProps } from './Sample';

export interface GroupSampleProps {
  name: string;
  subs: SampleProps[];
}

export default class GroupSample extends Stateless<GroupSampleProps> {

  public static renderSubs(subs: SampleProps[]) {
    const element = [];
    for (const sub of subs) {
      element.push(<div key={sub.name} ><Sample {...sub} /></div>);
    }
    return element;
  }

  public render(): JSX.Element {
    return (
      <div>
        <Title size={Size6.is5}>{this.props.name}</Title>
        {GroupSample.renderSubs(this.props.subs)}
      </div>
    );
  }
}
