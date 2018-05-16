import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as FooterStyle, HTMLComponent, HTMLFooterProps} from '../../';

export interface FooterProps extends HTMLFooterProps {
}

export default class Footer extends React.Component<FooterProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, ...inputProps} = this.props;

        const classNames = ClassNames([FooterStyle.footer, className]);

        return (
            <footer className={classNames} {...inputProps} >
                {children}
            </footer>
        );
    }
}
