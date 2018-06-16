import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as ModalStyle, HTMLComponent, HTMLHeaderProps} from '../../';

export interface ModalCardHeaderProps extends HTMLHeaderProps {
    header?: string;
    elementRef?: (ref: any) => any;
}

export default class ModalCardHeader extends React.Component<ModalCardHeaderProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        header: PropTypes.string,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, header, children, elementRef, ...modalCardHeaderProps} = this.props;

        const classNames = ClassNames(ModalStyle.modalCardHead, className);

        return (
            <header className={classNames} {...modalCardHeaderProps} ref={elementRef}>
                {header && <p className={ModalStyle.modalCardTitle}>{header}</p>}
                {children}
            </header>
        );
    }
}

