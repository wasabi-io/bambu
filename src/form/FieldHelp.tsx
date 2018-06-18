import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as FormStyle, Color, colorValues, HTMLComponent, HTMLPProps} from '../index';

/**
 * Refers Html Props and Additional Props.
 */
export interface FieldHelpProps extends HTMLPProps {
    color?: string | Color;
    elementRef?: (ref: any) => any;
}

export default class FieldHelp extends React.Component<FieldHelpProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        color: PropTypes.oneOf(colorValues),
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {
            color,
            className,
            children,
            elementRef,
            ...fieldHelpProps
        } = this.props;

        const classNames = ClassNames([
            FormStyle.help,
            FormStyle[color],
            className
        ]);

        return (
            <p className={classNames} {...fieldHelpProps} ref={elementRef}>
                {children}
            </p>
        );
    }
}
