import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as PanelStyle, HTMLComponent, HTMLNavProps} from '../../';

export interface PanelIconProps extends HTMLNavProps {
    elementRef?: (ref: any) => any;
}

export default class PanelIcon extends React.Component<PanelIconProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames([PanelStyle.panelIcon, className]);

        return (
            <nav className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </nav>
        );
    }
}
