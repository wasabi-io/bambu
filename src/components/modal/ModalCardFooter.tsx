import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as ModalStyle, HTMLComponent, HTMLFooterProps} from '../../';

export interface ModalCardFooterProps extends HTMLFooterProps {
    elementRef?: (ref: any) => any;
}

/**
 * The foot of <code>{&lt;ModalCard /&gt;}</code>
 */
export default class ModalCardFooter extends React.Component<ModalCardFooterProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...modalCardFooterProps} = this.props;

        const classNames = ClassNames(ModalStyle.modalCardFoot, className);

        return (
            <footer className={classNames} {...modalCardFooterProps} ref={elementRef}>
                {children}
            </footer>
        );
    }
}
