import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as ModalStyle, HTMLComponent, HTMLDivProps, Size, sizeValues} from '../../';

export interface ModalProps extends HTMLDivProps {
    isActive?: boolean;
    hasCloseButton?: boolean;
    buttonSize?: string | Size;
    onCloseButtonClick?: any;
    elementRef?: (ref: any) => any;
}

export default class Modal extends React.Component<ModalProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        buttonSize: PropTypes.oneOf(sizeValues),
        hasCloseButton: PropTypes.bool,
        onCloseButtonClick: PropTypes.func,
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        buttonSize: 'isLarge',
        hasCloseButton: true
    };

    public render(): JSX.Element {
        const {isActive, hasCloseButton, onCloseButtonClick, buttonSize, className, children, elementRef, ...modalProps} = this.props;

        const classNames = ClassNames(ModalStyle.modal, {[`${ModalStyle.isActive}`]: isActive}, className
        );

        return (
            <div className={classNames} {...modalProps} ref={elementRef}>
                <div className={ModalStyle.modalBackground}/>
                <div className={ModalStyle.modalContent}>
                    {children}
                </div>
                {hasCloseButton && <button onClick={onCloseButtonClick} className={ClassNames(ModalStyle.modalClose, ModalStyle[buttonSize])} aria-label="close"/>}
            </div>
        );
    }
}
