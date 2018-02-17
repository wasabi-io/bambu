import * as React from 'react';

import Navigation from '../../Navigation';
import StatelessComponent from '../../StatelessComponent';

export default class Overview extends StatelessComponent {
  getNavigations(): Navigation[] {
    return [
      {
        text: 'Start',
        path: 'start',
        module: 'Start.tsx'
      },
      {
        text: 'Customize',
        path: 'customize',
        module: 'Customize.tsx'
      }
    ];
  }
  getModuleName(): string {
    return 'overview';
  }
}
