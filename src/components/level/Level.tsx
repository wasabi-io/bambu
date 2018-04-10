import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Responsive, ResponsiveValues} from '../../base/css';

import HTMLComponent, {HTMLElementProps} from '../../base/html/HTML';
import LevelStyle from '../../bulma';

/**
 * Refers Html Props and Additional Props.
 */
export interface LevelProps extends HTMLElementProps {
    responsive?: Responsive;
}

const Level: React.SFC<LevelProps> = (props: LevelProps) => {
    const {responsive, className, ...levelProps} = props;

    const classNames = ClassNames(
        LevelStyle.level,
        LevelStyle[responsive],
        className
    );

    return (
        <nav className={classNames} {...levelProps} >
            {props.children}
        </nav>
    );
};

Level.propTypes = {
    ...HTMLComponent.propTypes,
    responsive: PropTypes.oneOf(ResponsiveValues),
};

Level.defaultProps = HTMLComponent.defaultProps;

Level.displayName = 'Level';

export default Level;
