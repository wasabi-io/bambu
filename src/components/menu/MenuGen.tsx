import * as PropTypes from 'prop-types';
import * as React from 'react';
import { getOrDefault } from 'wasabi-common';
import Stateless from 'wasabi-ui/lib/Stateless';
import MenuLabel, { MenuLabelProps } from './MenuLabel';
import MenuLinkGen, { MenuLinkGenParent, MenuLinkGenProps } from './MenuLinkGen';
import MenuList from './MenuList';

export interface MenuLinkGenRoot extends MenuLabelProps, MenuLinkGenParent {
  label: string;
  routes?: MenuLinkGenProps[];
}

export interface MenuGenProps extends MenuLinkGenParent {
  prefix?: string;
  routes: MenuLinkGenRoot[];
}

export default class MenuGen extends Stateless<MenuGenProps> {

  public static propTypes = {
    hierarchical: PropTypes.bool,
    prefix: PropTypes.string,
    routes: PropTypes.object.isRequired
  };

  public static defaultProps = {
    hierarchical: false,
    prefix: '#',
  };

  public render(): JSX.Element[] {
    const elements = [];
    for (const route of this.props.routes) {
      const { routes, label, ...props } = route;
      elements.push(
        <MenuLabel {...props} >
          {label}
        </MenuLabel>
      );
      elements.push(
        <MenuList>
          {MenuLinkGen.render(routes, {
            hierarchical: getOrDefault(route.hierarchical, this.props.hierarchical),
            href: `${this.props.prefix}${route.href}`
          })}
        </MenuList>
      );
    }
    return elements;
  }
}
