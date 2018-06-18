import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {HTMLComponent, HTMLUlProps} from '../../';

/**
 * Refers FaIconList Props.
 */
export interface FaIconListProps extends HTMLUlProps {
    iconClassName?: string;
    elementRef?: (ref: any) => any;
}

/**
 * FaIconList component
 * <ul class="fa-ul">...</ul>
 * more https://fontawesome.com/how-to-use/svg-with-js#additional-styling
 */
export default class FaIconList extends HTMLComponent<FaIconListProps> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render() {
        const {className, elementRef, children, ...props} = this.props;

        const classNames = ClassNames(
            "fa-ul",
            className
        );

        return (
            <ul ref={elementRef} className={classNames} {...props}>
                {children}
            </ul>
        );
    }
}
