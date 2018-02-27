import * as React from 'react';

import Navigation from '../../Navigation';
import StatelessComponent from '../../StatelessComponent';

export default class Elements extends StatelessComponent {
  getNavigations(): Navigation[] {
    return [
      {
        text: 'Box',
        path: 'box',
        module: 'Box.tsx'
      }
    ];
  }
  getModuleName(): string {
    return 'elements';
  }
}
