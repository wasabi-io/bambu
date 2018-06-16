import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {HTMLComponent, HTMLLiProps} from '../../';

/**
 * Refers FaIconListItem Props.
 */
export interface FaIconListItemProps extends HTMLLiProps {
    listClassName?: string;
    elementRef?: (ref: any) => any;
}

/**
 * FaIconListItem component
 * <li><span class="fa-li">...</span>List icons can</li>
 * more https://fontawesome.com/how-to-use/svg-with-js#additional-styling
 */
export default class FaIconListItem extends HTMLComponent<FaIconListItemProps> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        listClassName: PropTypes.string
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render() {
        const {className, elementRef, listClassName, children, ...props} = this.props;

        const classNames = ClassNames(
            "fa-li",
            className
        );

        return (
            <li ref={elementRef} className={listClassName} {...props}>
                <span className={classNames}>{children}</span>
            </li>
        );
    }
}
