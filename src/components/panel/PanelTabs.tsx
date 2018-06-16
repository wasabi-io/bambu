import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as PanelStyle, HTMLComponent, HTMLPProps} from '../../';

export interface PanelTabsProps extends HTMLPProps {
    elementRef?: (ref: any) => any;
}

export default class PanelTabs extends React.Component<PanelTabsProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames([PanelStyle.panelTabs, className]);

        return (
            <p className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </p>
        );
    }
}
