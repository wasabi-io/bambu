import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as ModalStyle, HTMLComponent, HTMLFooterProps} from '../../';

export interface ModalCardFooterProps extends HTMLFooterProps {
}

const ModalCardFooter: React.SFC<ModalCardFooterProps> = (props: ModalCardFooterProps) => {
    const {className, ...modalCardFooterProps} = props;

    const classNames = ClassNames(
        ModalStyle.modalCardFoot,
        className
    );

    return (
        <footer className={classNames} {...modalCardFooterProps}>
            {props.children}
        </footer>
    );
};

ModalCardFooter.propTypes = {
    ...HTMLComponent.propTypes
};

ModalCardFooter.defaultProps = {
    ...HTMLComponent.defaultProps
};

ModalCardFooter.displayName = 'ModalCardFooter';

export default ModalCardFooter;
