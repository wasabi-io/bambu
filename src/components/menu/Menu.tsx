import * as ClassNames from 'classnames';
import * as React from 'react';
import {StatelessFC} from 'wasabi-ui/lib/Stateless';
import {bulma as MenuStyle, HTMLAsideProps, HTMLComponent} from '../../';

export type MenuProps = HTMLAsideProps;

const Menu: StatelessFC<MenuProps> = (props: MenuProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([MenuStyle.menu, className]);

    return (
        <aside className={classNames} {...inputProps}>
            {props.children}
        </aside>
    );
};

Menu.propTypes = HTMLComponent.propTypes;

Menu.defaultProps = HTMLComponent.defaultProps;

Menu.displayName = 'Menu';

export default Menu;
