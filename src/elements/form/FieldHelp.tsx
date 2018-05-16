import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import {bulma as FormStyle, Color, colorValues, HTMLComponent, HTMLPProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface FieldHelpProps extends HTMLPProps {
    color?: string | Color;
}

export default class FieldHelp extends React.Component<FieldHelpProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        color: PropTypes.oneOf(colorValues),
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {
            color,
            className,
            children,
            ...fieldHelpProps
        } = this.props;

        const classNames = ClassNames([
            FormStyle.help,
            FormStyle[color],
            className
        ]);

        return (
            <p className={classNames} {...fieldHelpProps} >
                {children}
            </p>
        );
    }
}
