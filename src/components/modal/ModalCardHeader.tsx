import * as ClassNames from 'classnames';
import * as React from 'react';

import HTMLComponent, {HTMLHeaderProps} from '../../base/html/HTML';
import ModalStyle from './ModalStyle';

export interface ModalCardHeaderProps extends HTMLHeaderProps {
    header?: string;
}

const ModalCardHeader: React.SFC<ModalCardHeaderProps> = (props: ModalCardHeaderProps) => {
    const {className, ...modalCardHeaderProps} = props;

    const classNames = ClassNames(
        ModalStyle.modalCardHead,
        className
    );

    return (
        <header className={classNames} {...modalCardHeaderProps}>
            {props.header && <p className={ModalStyle.modalCardTitle}>{props.header}</p>}
            {props.children}
        </header>
    );
};

ModalCardHeader.propTypes = {
    ...HTMLComponent.propTypes
};

ModalCardHeader.defaultProps = {
    ...HTMLComponent.defaultProps
};

ModalCardHeader.displayName = 'ModalCardHeader';

export default ModalCardHeader;
