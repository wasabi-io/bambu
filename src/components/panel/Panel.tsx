import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as PanelStyle, HTMLComponent, HTMLNavProps} from '../../';

export interface PanelProps extends HTMLNavProps {
    elementRef?: (ref: any) => any;
}

export default class Panel extends React.Component<PanelProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames([PanelStyle.panel, className]);

        return (
            <nav className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </nav>
        );
    }
}
