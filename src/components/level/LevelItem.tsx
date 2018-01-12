import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';
import LevelStyle from './LevelStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface LevelItemProps extends HTMLDivProps {
    hasTextCentered?: boolean;
}

const LevelItem: React.SFC<LevelItemProps> = (props: LevelItemProps) => {

    const { hasTextCentered, className, ...levelItemProps } = props;

    const classNames = ClassNames(
        LevelStyle.levelItem,
        {
            [`${LevelStyle.hasTextCentered}`]: hasTextCentered,
        },
        className
    );

    return (
        <div className={classNames} {...levelItemProps} >
            {props.children}
        </div>
    );
};

LevelItem.propTypes = {
    ...HTMLComponent.propTypes,
    hasTextCentered: PropTypes.bool
};

LevelItem.defaultProps = {
    ...HTMLComponent.defaultProps,
    hasTextCentered: false
};

LevelItem.displayName = "LevelItem";

export default LevelItem;
