import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as MenuStyle, HTMLComponent, HTMLUlProps} from '../../';

export type MenuListProps = HTMLUlProps;

const MenuList: React.SFC<MenuListProps> = (props: MenuListProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        MenuStyle.menuList,
        className
    ]);

    return (
        <ul className={classNames} {...inputProps} >
            {props.children}
        </ul>
    );
};

MenuList.propTypes = HTMLComponent.propTypes;

MenuList.defaultProps = HTMLComponent.defaultProps;

MenuList.displayName = 'MenuList';

export default MenuList;
