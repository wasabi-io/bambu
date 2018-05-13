import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as ModalStyle, HTMLComponent, HTMLHeaderProps} from '../../';

export interface ModalCardTitleProps extends HTMLHeaderProps {
    header?: string;
}

const ModalCardTitle: React.SFC<ModalCardTitleProps> = (props: ModalCardTitleProps) => {
    const {className, ...modalCardTitleProps} = props;

    const classNames = ClassNames(
        ModalStyle.modalCardTitle,
        className
    );

    return (
        <header className={classNames} {...modalCardTitleProps}>
            {props.children}
        </header>
    );
};

ModalCardTitle.propTypes = {
    ...HTMLComponent.propTypes
};

ModalCardTitle.defaultProps = {
    ...HTMLComponent.defaultProps
};

ModalCardTitle.displayName = 'ModalCardTitle';

export default ModalCardTitle;
