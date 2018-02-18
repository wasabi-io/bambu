import * as React from 'react';

import Navigation from '../../Navigation';
import StatelessComponent from '../../StatelessComponent';

export default class Layout extends StatelessComponent {
  getNavigations(): Navigation[] {
    return [
      {
        text: 'Container',
        path: 'container',
        module: 'Container.tsx'
      }
    ];
  }
  getModuleName(): string {
    return 'layout';
  }
}
