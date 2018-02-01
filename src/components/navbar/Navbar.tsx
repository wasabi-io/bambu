import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Objects, Strings } from 'wasabi-common';
import { Color, colorValues, Vertical, verticalValues } from 'rebul/lib/base/css';
import HTMLComponent, { HTMLNavProps } from '../../base/html/HTML';
import NavbarStyle from './NavbarStyle';

export enum navBarArialLabel {
  main = 'main',
  dropdown = 'dropdown'
}

export enum navBarRole {
  navigation = 'navigation'
}

export interface NavbarProps extends HTMLNavProps {
  arialLabel?: string | navBarArialLabel;
  color?: string | Color;
  isFixed?: string | Vertical;
  hasShadow?: boolean;
  role?: navBarRole | string;
  isTransparent?: boolean;
}

const Navbar: React.SFC<NavbarProps> = (props: NavbarProps) => {

  const { color, arialLabel, isFixed, hasShadow, isTransparent, className, ...navbarProps } = props;

  const fixedClassName = Strings.has(isFixed) ? `isFixed${Strings.capitalizeFirstLetter(isFixed)}` : undefined;

  const classNames = ClassNames(
    NavbarStyle.navbar,
    NavbarStyle[fixedClassName],
    {
      [`${NavbarStyle.hasShadow}`]: hasShadow,
      [`${NavbarStyle.isTransparent}`]: isTransparent,
      [`${NavbarStyle[color]}`]: color ? true : false,
    },
    className
  );

  return (
    <nav className={classNames} aria-label={`${arialLabel} navigation`} {...navbarProps}>
      {props.children}
    </nav>
  );
};

Navbar.propTypes = {
  ...HTMLComponent.propTypes,
  arialLabel: PropTypes.oneOf(Objects.values(navBarArialLabel)),
  color: PropTypes.oneOf(colorValues),
  isFixed: PropTypes.oneOf(verticalValues),
  hasShadow: PropTypes.bool,
  role: PropTypes.oneOf(Objects.values(navBarRole)),
  isTransparent: PropTypes.bool
};

Navbar.defaultProps = {
  ...HTMLComponent.defaultProps,
  arialLabel: 'main',
  hasShadow: false,
  role: navBarRole.navigation,
  isTransparent: false
};

Navbar.displayName = 'Navbar';

export default Navbar;
