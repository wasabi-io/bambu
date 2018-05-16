import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import {bulma as PanelStyle, HTMLComponent, HTMLPProps} from '../../';

export interface PanelHeadingProps extends HTMLPProps {
    elementRef?: any;
}

export default class PanelHeading extends React.Component<PanelHeadingProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames([
            PanelStyle.panelHeading,
            className
        ]);

        return (
            <p className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </p>
        );
    }
}
