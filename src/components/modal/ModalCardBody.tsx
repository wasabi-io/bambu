import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as ModalStyle, HTMLComponent, HTMLSectionProps} from '../../';

export interface ModalCardBodyProps extends HTMLSectionProps {
}

const ModalCardBody: React.SFC<ModalCardBodyProps> = (props: ModalCardBodyProps) => {
    const {className, ...modalCardBodyProps} = props;

    const classNames = ClassNames(
        ModalStyle.modalCardBody,
        className
    );

    return (
        <section className={classNames} {...modalCardBodyProps}>
            {props.children}
        </section>
    );
};

ModalCardBody.propTypes = {
    ...HTMLComponent.propTypes
};

ModalCardBody.defaultProps = {
    ...HTMLComponent.defaultProps
};

ModalCardBody.displayName = 'ModalCardBody';

export default ModalCardBody;
