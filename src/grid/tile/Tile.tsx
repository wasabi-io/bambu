import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Objects from 'wasabi-common/lib/types/Objects';

import {Size12, Size12Values} from '../../base/css';
import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';
import TileStyle from '../../bulma';

export enum TileContext {
    ancestor = 'isAncestor',
    parent = 'isParent',
    child = 'isChild',
}

/**
 * Refers Html Props and Additional Props.
 */
export interface TileProps extends HTMLDivProps {
    context?: string | TileContext;
    isDesktop?: boolean;
    isVertical?: boolean;
    size?: string | Size12;
}

const Tile: React.SFC<TileProps> = (props: TileProps) => {

    const {context, isDesktop, size, isVertical, className, ...tileProps} = props;

    const classNames = ClassNames(
        TileStyle.tile,
        TileStyle[size],
        TileStyle[context],
        {
            [`${TileStyle.isVertical}`]: isVertical,
            [`${TileStyle.isDesktop}`]: isDesktop,
        },
        className
    );

    return (
        <div className={classNames} {...tileProps} >
            {props.children}
        </div>
    );
};

Tile.propTypes = {
    ...HTMLComponent.propTypes,
    context: PropTypes.oneOf(Objects.values(TileContext)),
    size: PropTypes.oneOf(Objects.values(Size12Values)),
    isVertical: PropTypes.bool,
    isDesktop: PropTypes.bool,
};

Tile.defaultProps = {
    ...HTMLComponent.defaultProps,
    isDesktop: false,
    isVertical: false
};

Tile.displayName = 'Tile';

export default Tile;
