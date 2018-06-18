import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as ModalStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface ModalContentProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

/**
 * A horizontally and vertically centered container, with a maximum width of 640px, in which you can include any content in <code>{&lt;Modal /&gt;}</code> component.
 */
export default class ModalContent extends React.Component<ModalContentProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...modalProps} = this.props;

        const classNames = ClassNames(ModalStyle.modalContent, className);

        return (
            <div className={classNames} ref={elementRef} {...modalProps}>
                {children}
            </div>
        );
    }
}
