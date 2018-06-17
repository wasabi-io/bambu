import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Objects} from "wasabi-common";
import {bulma as BreadCrumbStyle, HTMLComponent, HTMLElementProps, Size, sizeValues} from '../../';

export enum BreadCrumbSeperator {
    arrow = 'hasArrowSeparator',
    bullet = 'hasBulletSeparator',
    dot = 'hasDotSeparator',
    succeeds = 'hasSucceedsSeparator',
}

/**
 * Refers Html Props and Additional Props.
 */
export interface BreadCrumbProps extends HTMLElementProps {
    separator?: string | BreadCrumbSeperator;
    bSize?: string | Size;
    isCentered?: boolean;
    isRight?: boolean;
    elementRef?: (ref: any) => any;
}

/**
 * The BreadCrumb component consists of links which are aligned side by side and separated by a divider.
 */
export default class BreadCrumb extends React.Component<BreadCrumbProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        separator: PropTypes.oneOf(Objects.values(BreadCrumbSeperator)),
        bSize: PropTypes.oneOf(sizeValues),
        isCentered: PropTypes.bool,
        isRight: PropTypes.bool
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {

        const {bSize, separator, className, isCentered, isRight, elementRef, children, ...breadCrumbProps} = this.props;

        const classNames = ClassNames(
            BreadCrumbStyle.breadcrumb,
            BreadCrumbStyle[separator],
            BreadCrumbStyle[bSize],
            {
                [`${BreadCrumbStyle.isCentered}`]: isCentered,
                [`${BreadCrumbStyle.isRight}`]: isRight
            },
            className,
        );

        return (
            <nav className={classNames} {...breadCrumbProps} ref={elementRef}>
                <ul>
                    {children}
                </ul>
            </nav>
        );
    }
}
