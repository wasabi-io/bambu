import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as ModalStyle, HTMLComponent, HTMLDivProps, Size, sizeValues} from '../../';

export interface ModalProps extends HTMLDivProps {
    isActive?: boolean;
    hasCloseButton?: boolean;
    buttonSize?: string | Size;
    onCloseButtonClick?: any;
}

const Modal: React.SFC<ModalProps> = (props: ModalProps) => {
    const {isActive, hasCloseButton, onCloseButtonClick, buttonSize, className, ...modalProps} = props;

    const classNames = ClassNames(
        ModalStyle.modal,
        {
            [`${ModalStyle.isActive}`]: isActive,
        },
        className
    );

    return (
        <div className={classNames} {...modalProps}>
            <div className={ModalStyle.modalBackground}/>
            <div className={ModalStyle.modalContent}>
                {props.children}
            </div>
            {hasCloseButton && <button onClick={onCloseButtonClick} className={ClassNames(ModalStyle.modalClose, ModalStyle[buttonSize])} aria-label="close"/>}
        </div>);
};

Modal.propTypes = {
    ...HTMLComponent.propTypes,
    buttonSize: PropTypes.oneOf(sizeValues),
    hasCloseButton: PropTypes.bool,
    onCloseButtonClick: PropTypes.func,
};

Modal.defaultProps = {
    ...HTMLComponent.defaultProps,
    buttonSize: 'isLarge',
    hasCloseButton: true
};

Modal.displayName = 'Modal';

export default Modal;
