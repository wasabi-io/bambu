import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as ModalStyle, HTMLComponent, HTMLFooterProps} from '../../';

export interface ModalCardFooterProps extends HTMLFooterProps {
}

export default class ModalCardFooter extends React.Component<ModalCardFooterProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, ...modalCardFooterProps} = this.props;

        const classNames = ClassNames(ModalStyle.modalCardFoot, className);

        return (
            <footer className={classNames} {...modalCardFooterProps}>
                {children}
            </footer>
        );
    }
}
