import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as ModalStyle, HTMLComponent, HTMLHeaderProps} from '../../';

export interface ModalCardHeaderProps extends HTMLHeaderProps {
    header?: string;
    elementRef?: (ref: any) => any;
}

export default class ModalCardHeader extends React.Component<ModalCardHeaderProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        header: PropTypes.string
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, header, children, elementRef, ...modalCardHeaderProps} = this.props;

        const classNames = ClassNames(ModalStyle.modalCardHead, className);

        return (
            <header className={classNames} {...modalCardHeaderProps}  ref={elementRef}>
                {header && <p className={ModalStyle.modalCardTitle}>{header}</p>}
                {children}
            </header>
        );
    }
}

