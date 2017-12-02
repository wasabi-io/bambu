import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import Objects from "wasabi-common/lib/types/Objects";
import TileStyle from "rebul/lib/grid/tile/TileStyle";
import HTMLComponent, {HTMLDivProps} from "../../base/html/HTML";

export enum TileContext {
    ancestor = "isAncestor",
    parent = "isParent",
    child = "isChild",
}

export enum TileSize {
    is1 = "is1",
    is2 = "is2",
    is3 = "is3",
    is4 = "is4",
    is5 = "is5",
    is6 = "is6",
    is7 = "is7",
    is8 = "is8",
    is9 = "is9",
    is10 = "is10",
    is11 = "is11",
    is12 = "is12",
}

/**
 * Refers Html Props and Additional Props.
 */
export interface TileProps extends HTMLDivProps {
    context?: string | TileContext;
    desktop?: boolean;
    size?: string | TileSize;
    vertical?: boolean;
}

const Tile: React.SFC<TileProps> = (props: TileProps) => {

    const {context, desktop, size, vertical, className, ...inputProps} = props;

    const classNames = ClassNames([
        TileStyle.tile,
        TileStyle[size],
        TileStyle[context],
        vertical ? TileStyle.isVertical : undefined,
        desktop ? TileStyle.isDesktop : undefined,
        className
    ]);

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

Tile.propTypes = {
    ...HTMLComponent.propTypes,
    context: PropTypes.oneOf(Objects.values(TileContext)),
    desktop: PropTypes.bool,
    size: PropTypes.oneOf(Objects.values(TileSize)),
    vertical: PropTypes.bool,
};

Tile.defaultProps = {
    ...HTMLComponent.defaultProps,
    desktop: false,
    vertical: false
};

Tile.displayName = "Tile";

export default Tile;
