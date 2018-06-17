import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma, HTMLComponent, HTMLDivProps} from '../../';

export interface ModalProps extends HTMLDivProps {
    isActive?: boolean;
    backgroundColor?: string;
    backgroundClassName?: string;
    backgroundStyle?: React.CSSProperties;
    close?: JSX.Element;
    onBackgroundClick?: (e?: any) => any;
    elementRef?: (ref: any) => any;
}

/**
 * A classic modal overlay, in which you can include any content you want.
 */
export default class Modal extends React.Component<ModalProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        backgroundColor: PropTypes.string,
        backgroundClassName: PropTypes.string,
        backgroundStyle: PropTypes.object,
        close: PropTypes.node,
        onBackgroundClick: PropTypes.func,
        elementRef: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false
    };

    public render(): JSX.Element {
        const {isActive, backgroundColor, backgroundClassName, backgroundStyle, close, className, children, onBackgroundClick, elementRef, ...modalProps} = this.props;

        const classNames = ClassNames(bulma.modal, {[`${bulma.isActive}`]: isActive}, className);

        const backgroundStyles = {
            ...backgroundStyle
        };
        if (backgroundColor) {
            backgroundStyles.backgroundColor = backgroundColor;
        }
        return (
            <div className={classNames} ref={elementRef} {...modalProps}>
                <div onClick={onBackgroundClick} className={ClassNames(bulma.modalBackground, backgroundClassName)} style={backgroundStyles}>
                    {close}
                </div>
                {children}
            </div>
        );
    }
}
