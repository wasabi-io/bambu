import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Objects, Props} from 'wasabi-common';
import ControlLabel, {ControlLabelProps} from '../../elements/form/ControlLabel';
import {bulma as FormStyle, HTMLComponent, HTMLDivProps} from '../../';

export enum FieldLabelSize {
    normal = 'isNormal',
    small = 'isSmall',
    medium = 'isMedium',
    large = 'isLarge'
}

/**
 * Refers Html Props and Additional Props.
 */
export interface FieldLabelProps extends HTMLDivProps {
    bSize?: string | FieldLabelSize;
    labelProps?: ControlLabelProps;
}

export default class FieldLabel extends React.Component<FieldLabelProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        bSize: PropTypes.oneOf(Objects.values(FieldLabelSize)),
        labelProps: PropTypes.object
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        bSize: FieldLabelSize.normal
    };

    public render(): JSX.Element {
        const {
            bSize,
            className,
            labelProps,
            children,
            ...inputProps
        } = this.props;

        const classNames = ClassNames([
            FormStyle.fieldLabel,
            FormStyle[bSize],
            className
        ]);

        return (
            <div className={classNames} {...inputProps} >
                <ControlLabel {...labelProps}>
                    {children}
                </ControlLabel>
            </div>
        );
    }
}
