import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as ModalStyle, HTMLComponent, HTMLSectionProps} from '../../';

export interface ModalCardBodyProps extends HTMLSectionProps {
    elementRef?: (ref: any) => any;
}

export default class ModalCardBody extends React.Component<ModalCardBodyProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...modalCardBodyProps} = this.props;

        const classNames = ClassNames(ModalStyle.modalCardBody, className);

        return (
            <section className={classNames} {...modalCardBodyProps} ref={elementRef}>
                {children}
            </section>
        );
    }
}
