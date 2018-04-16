import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import {Size, SizeValues} from '../../base/css';
import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';
import ModalStyle from '../../base/css/bulma';

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

    return <div className={classNames} {...modalProps}>
        <div className={ModalStyle.modalBackground}></div>
        <div className={ModalStyle.modalContent}>
            {props.children}
        </div>
        {hasCloseButton && <button onClick={onCloseButtonClick} className={ClassNames(ModalStyle.modalClose, ModalStyle[buttonSize])} aria-label="close"></button>}
    </div>
};

Modal.propTypes = {
    ...HTMLComponent.propTypes,
    buttonSize: PropTypes.oneOf(SizeValues),
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
