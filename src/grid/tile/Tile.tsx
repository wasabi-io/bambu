import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Objects, Props} from "wasabi-common";

import {bulma as TileStyle, HTMLComponent, HTMLDivProps, Size12, size12Values} from '../../';

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
    elementRef?: (ref: any) => any;
}

export default class Tile extends React.Component<TileProps, {}> {
    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        context: PropTypes.oneOf(Objects.values(TileContext)),
        bSize: PropTypes.oneOf(Objects.values(size12Values)),
        isVertical: PropTypes.bool,
        isDesktop: PropTypes.bool,
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isDesktop: false,
        isVertical: false
    };

    public render(): JSX.Element {
        const {context, isDesktop, bSize, isVertical, className, children, elementRef, ...tileProps} = this.props;

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
            <div className={classNames} {...tileProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}


