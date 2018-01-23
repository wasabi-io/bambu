import * as React from 'react';
import TitleSample from './TitleSample';
import SubTitleSample from './SubTitleSample';

export default {
  name: 'Title & SubTitle Samples',
  subs: [
    {
      name: 'Title Sample',
      description: 'TitleSample=\'...\'',
      element: <TitleSample />
    },
    {
      name: 'SubTitle Sample',
      description: 'SubTitleSample=\'...\'',
      element: <SubTitleSample />
    }
  ]
};
