import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';
import FormStyle from './FormStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface FieldProps extends HTMLDivProps {
    hasAddons?: boolean;
    hasAddonsCentered?: boolean;
    hasAddonsRight?: boolean;
    isHorizontal?: boolean;
    isGrouped?: boolean;
    isGroupedCentered?: boolean;
    isGroupedMultiline?: boolean;
    isGroupedRight?: boolean;
    isNarrow?: boolean;
}

const Field: React.SFC<FieldProps> = (props: FieldProps) => {

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
        ...inputProps
    } = props;

    const classNames = ClassNames([
        FormStyle.field,
        isHorizontal ? FormStyle.isHorizontal : undefined,
        hasAddons ? FormStyle.hasAddons : undefined,
        hasAddonsCentered ? FormStyle.hasAddonsCentered : undefined,
        hasAddonsRight ? FormStyle.hasAddonsRight : undefined,
        isGrouped ? FormStyle.isGrouped : undefined,
        isGroupedCentered ? FormStyle.isGroupedCentered : undefined,
        isGroupedRight ? FormStyle.isGroupedCentered : undefined,
        isGroupedMultiline ? FormStyle.isGroupedCentered : undefined,
        isNarrow ? FormStyle.isNarrow : undefined,
        className
    ]);

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

Field.propTypes = {
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

Field.defaultProps = {
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

Field.displayName = "Field";

export default Field;
