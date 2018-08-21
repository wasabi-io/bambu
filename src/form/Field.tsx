import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as FormStyle, HTMLComponent, HTMLDivProps} from '../index';
import {Props} from "wasabi-common";

/**
 * Refers Html Props and Additional Props.
 */
export interface FieldProps extends Props<any> {
    hasAddons?: boolean;
    hasAddonsCentered?: boolean;
    hasAddonsRight?: boolean;
    isHorizontal?: boolean;
    isGrouped?: boolean;
    isGroupedCentered?: boolean;
    isGroupedMultiline?: boolean;
    isGroupedRight?: boolean;
    isNarrow?: boolean;
    elementRef?: (ref: any) => any;
}

export default class Field extends React.Component<FieldProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        hasAddons: PropTypes.bool,
        hasAddonsCentered: PropTypes.bool,
        hasAddonsRight: PropTypes.bool,
        isHorizontal: PropTypes.bool,
        isGrouped: PropTypes.bool,
        isGroupedCentered: PropTypes.bool,
        isGroupedMultiline: PropTypes.bool,
        isGroupedRight: PropTypes.bool,
        isNarrow: PropTypes.bool,
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        hasAddons: false,
        hasAddonsCentered: false,
        hasAddonsRight: false,
        isHorizontal: false,
        isGrouped: false,
        isGroupedCentered: false,
        isGroupedMultiline: false,
        isGroupedRight: false,
        isNarrow: false,
    };

    public render(): JSX.Element {
        const {
            isHorizontal,
            hasAddons,
            hasAddonsCentered,
            hasAddonsRight,
            isGrouped,
            isGroupedCentered,
            isGroupedRight,
            isGroupedMultiline,
            isNarrow,
            className,
            children,
            elementRef,
            ...inputProps
        } = this.props;

        const classNames = ClassNames(
            FormStyle.field,
            {
                [`${FormStyle.isHorizontal}`]: isHorizontal,
                [`${FormStyle.hasAddons}`]: hasAddons,
                [`${FormStyle.hasAddonsCentered}`]: hasAddonsCentered,
                [`${FormStyle.hasAddonsRight}`]: hasAddonsRight,
                [`${FormStyle.isGrouped}`]: isGrouped,
                [`${FormStyle.isGroupedCentered}`]: isGroupedCentered,
                [`${FormStyle.isGroupedRight}`]: isGroupedRight,
                [`${FormStyle.isGroupedMultiline}`]: isGroupedMultiline,
                [`${FormStyle.isNarrow}`]: isNarrow,
            },
            className
        );

        return (
            <div className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
