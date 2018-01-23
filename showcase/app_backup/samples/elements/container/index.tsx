import * as React from 'react';
import ContainerSample1 from './ContainerSample1';
import ContainerSample2 from './ContainerSample2';
import ContainerSample3 from './ContainerSample3';
import ContainerSample4 from './ContainerSample4';

export default {
  name: 'Container Sample',
  subs: [
    {
      name: 'Container Sample (normal)',
      description: 'normal',
      element: <ContainerSample1 />
    },
    {
      name: 'Container Sample (fluid)',
      description: 'fluid',
      element: <ContainerSample2 />
    },
    {
      name: 'Container Sample (fullHd)',
      description: 'fullHd',
      element: <ContainerSample3 />
    },
    {
      name: 'Container Sample (wideScreen)',
      description: 'wideScreen',
      element: <ContainerSample4 />
    }
  ]
};
