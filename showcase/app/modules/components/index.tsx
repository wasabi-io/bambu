import * as React from 'react';

import StatelessComponent, {Navigation} from '../../StatelessComponent';

export default class Components extends StatelessComponent {
    getNavigations(): Navigation[] {
        return [
            {
                text: 'Breadcrumb',
                path: 'breadcrumb',
                module: 'Breadcrumb.tsx'
            },
            {
                text: 'Card',
                path: 'card',
                module: 'Card.tsx'
            },
            {
                text: 'Dropdown',
                path: 'dropdown',
                module: 'Dropdown.tsx'
            },
            {
                text: 'Menu',
                path: 'menu',
                module: 'Menu.tsx'
            },
            {
                text: 'Message',
                path: 'message',
                module: 'Message.tsx'
            },
            {
                text: 'Modal',
                path: 'modal',
                module: 'Modal.tsx'
            },
            {
                text: 'Navbar',
                path: 'navbar',
                module: 'Navbar.tsx'
            },
            {
                text: 'Pagination',
                path: 'pagination',
                module: 'Pagination.tsx'
            },
            {
                text: 'Panel',
                path: 'panel',
                module: 'Panel.tsx'
            },
            {
                text: 'Tabs',
                path: 'tabs',
                module: 'Tabs.tsx'
            }
        ];
    }

    getModuleName(): string {
        return 'components';
    }
}
