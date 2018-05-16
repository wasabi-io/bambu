import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as ModalStyle, HTMLComponent, HTMLHeaderProps} from '../../';

export interface ModalCardTitleProps extends HTMLHeaderProps {
    header?: string;
    elementRef?: any;
}

export default class ModalCardTitle extends React.Component<ModalCardTitleProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        header: PropTypes.string
    };
    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...modalCardTitleProps} = this.props;

        const classNames = ClassNames(ModalStyle.modalCardTitle, className);

        return (
            <header className={classNames} {...modalCardTitleProps}  ref={elementRef}>
                {children}
            </header>
        );
    }
}
