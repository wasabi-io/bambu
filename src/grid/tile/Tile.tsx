import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Objects from 'wasabi-common/lib/types/Objects';

import {
    Size12,
    size12Values,
    HTMLComponent,
    HTMLDivProps,
    bulma as TileStyle
} from '../../';

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
    bSize?: string | Size12;
}

const Tile: React.SFC<TileProps> = (props: TileProps) => {

    const {context, isDesktop, bSize, isVertical, className, ...tileProps} = props;

    const classNames = ClassNames(
        TileStyle.tile,
        TileStyle[bSize],
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
    bSize: PropTypes.oneOf(Objects.values(size12Values)),
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
