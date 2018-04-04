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
            },
            {
                text: 'Button',
                path: 'button',
                module: 'Button.tsx'
            },
            {
                text: 'Content',
                path: 'content',
                module: 'Content.tsx'
            },
            {
                text: 'Delete',
                path: 'delete',
                module: 'Delete.tsx'
            },
            {
                text: 'Icon',
                path: 'icon',
                module: 'Icon.tsx'
            },
            {
                text: 'Notification',
                path: 'notification',
                module: 'Notification.tsx'
            },
            {
                text: 'Progress',
                path: 'progress',
                module: 'Progress.tsx'
            }
        ];
    }

    getModuleName(): string {
        return 'elements';
    }
}
