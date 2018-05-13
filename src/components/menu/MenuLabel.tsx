import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as MenuStyle, HTMLComponent, HTMLPProps} from '../../';

export type MenuLabelProps = HTMLPProps;

const MenuLabel: React.SFC<MenuLabelProps> = (props: MenuLabelProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        MenuStyle.menuLabel,
        className
    ]);

    return (
        <p className={classNames} {...inputProps} >
            {props.children}
        </p>
    );
};

MenuLabel.propTypes = HTMLComponent.propTypes;

MenuLabel.defaultProps = HTMLComponent.defaultProps;

MenuLabel.displayName = 'MenuLabel';

export default MenuLabel;
