import * as React from 'react';

import StatelessComponent, { Navigation } from '../../StatelessComponent';

export default class Columns extends StatelessComponent {
    getNavigations(): Navigation[] {
        return [
            {
                "text": "Hello",
                "path": "hello",
                "module": "Hello.tsx"
            },
            {
                "text": "Hello1",
                "path": "hello1",
                "module": "Hello1.tsx"
            }
        ]
    }
    getModuleName(): string {
        return "columns";
    }

}