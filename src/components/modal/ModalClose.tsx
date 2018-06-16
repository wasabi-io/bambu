import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma, HTMLComponent} from '../../';
import modalStyle from "./modalStyle";
import {Delete, DeleteProps} from "../../elements/delete";

export interface ModalCloseProps extends DeleteProps {
    onClick?: (e: any) => any;
    elementRef?: (ref: any) => any;
}

export default class ModalClose extends React.Component<ModalCloseProps, {}> {

    public static propTypes = {
        ...Delete.propTypes,
        buttonSize: PropTypes.string,
        onClick: PropTypes.func,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, onClick, children, elementRef, ...props} = this.props;

        const classNames = ClassNames(bulma.modalClose, modalStyle.modalClose, className);

        return (
            <Delete ref={elementRef} onClick={this.onClick} className={classNames}{...props}>
                {children}
            </Delete>
        );
    }

    public onClick = (e: any) => {
        if (e.stopPropagation) e.stopPropagation();
        this.props.onClick(e);
    }
}
