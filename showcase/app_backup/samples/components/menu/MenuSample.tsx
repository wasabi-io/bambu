import * as React from 'react';

import { Menu, MenuGen, MenuLinkGenRoot } from 'rebul/lib/components/menu';
import MenuLabel from 'rebul/lib/components/menu/MenuLabel';
import MenuList from 'rebul/lib/components/menu/MenuList';

const menuGenRootProps: MenuLinkGenRoot[] = [
  {
    href: '#/components',
    label: 'Components',
    routes: [
      {
        href: 'menu',
        name: 'Menu'
      }
    ]
  },
  {
    href: '#/elements',
    label: 'Elements',
    routes: [
      {
        href: 'box',
        name: 'Box'
      },
      {
        href: 'button',
        name: 'Button'
      },
      {
        href: 'container',
        name: 'Container'
      },
      {
        href: 'content',
        name: 'Content'
      },
      {
        href: 'form',
        name: 'Form'
      },
      {
        href: 'icon',
        name: 'Icon'
      },
      {
        href: 'image',
        name: 'Image'
      },
      {
        href: 'notification',
        name: 'Notification'
      },
      {
        href: 'other',
        name: 'Other'
      },
      {
        href: 'progress',
        name: 'Progress'
      },
      {
        href: 'table',
        name: 'Table'
      },
      {
        href: 'tag',
        name: 'Tag'
      },
      {
        href: 'title',
        name: 'Title'
      }
    ]
  },
  {
    href: '#/grid',
    label: 'Grid',
    routes: [
      {
        href: 'column',
        name: 'Column'
      },
      {
        href: 'tile',
        name: 'Tile'
      }
    ]
  },
  {
    href: '#/layout',
    label: 'Layout',
    routes: [
      {
        href: 'footer',
        name: 'Footer'
      },
      {
        href: 'hero',
        name: 'Hero'
      },
      {
        href: 'section',
        name: 'Section'
      }
    ]
  }
];

const BoxSample: React.SFC<{}> = (props: {}) => {
  return (
    <Menu><MenuGen hierarchical={true} routes={menuGenRootProps} /></Menu>
  );
};

export default BoxSample;
