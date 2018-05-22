import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as ModalStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface ModalCardProps extends HTMLDivProps {
    isActive?: boolean;
    elementRef?: (ref: any) => any;
}

export default class ModalCard extends React.Component<ModalCardProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false
    };

    public render(): JSX.Element {
        const {isActive, className, children, elementRef, ...modalCardProps} = this.props;

        const classNames = ClassNames(ModalStyle.modal, {[`${ModalStyle.isActive}`]: isActive}, className);

        return (
            <div className={classNames} {...modalCardProps}  ref={elementRef}>
                <div className={ModalStyle.modalBackground}/>
                <div className={ModalStyle.modalCard}>
                    {children}
                </div>
            </div>
        );
    }
}
