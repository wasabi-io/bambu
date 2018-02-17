import * as React from 'react';

import Navigation from '../../Navigation';
import StatelessComponent from '../../StatelessComponent';

export default class Columns extends StatelessComponent {
  getNavigations(): Navigation[] {
    return [
      {
        text: 'Basics',
        path: 'basics',
        module: 'Basics.tsx'
      }
    ];
  }
  getModuleName(): string {
    return 'columns';
  }
}
