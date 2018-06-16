import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as FooterStyle, HTMLComponent, HTMLFooterProps} from '../../';

export interface FooterProps extends HTMLFooterProps {
    elementRef?: (ref: any) => any;
}

export default class Footer extends React.Component<FooterProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames([FooterStyle.footer, className]);

        return (
            <footer className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </footer>
        );
    }
}
