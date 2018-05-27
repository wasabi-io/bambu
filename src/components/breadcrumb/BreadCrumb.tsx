import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Objects, Props} from "wasabi-common";
import {Alignment, alignmentValues, bulma as BreadCrumbStyle, HTMLComponent, HTMLElementProps, Size, sizeValues} from '../../';
import {bulma as ModalStyle} from "bambu";

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
    alignment?: string | Alignment;
    separator?: string | BreadCrumbSeperator;
    bSize?: string | Size;
    isCentered?: boolean;
    isRight?: boolean;
    elementRef?: (ref: any) => any;
}

export default class BreadCrumb extends React.Component<BreadCrumbProps, {}> {
    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        alignment: PropTypes.oneOf(alignmentValues),
        separator: PropTypes.oneOf(Objects.values(BreadCrumbSeperator)),
        bSize: PropTypes.oneOf(sizeValues),
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {

        const {alignment, bSize, separator, className, isCentered, isRight, elementRef, children, ...breadCrumbProps} = this.props;

        const classNames = ClassNames(
            BreadCrumbStyle.breadcrumb,
            BreadCrumbStyle[alignment],
            BreadCrumbStyle[separator],
            BreadCrumbStyle[bSize],
            {
                [`${BreadCrumbStyle.isCentered}`]: isCentered,
                [`${BreadCrumbStyle.isRight}`]: isRight
            },
            className,
        );

        return (
            <nav className={classNames} {...breadCrumbProps} ref={elementRef} >
                <ul>
                    {children}
                </ul>
            </nav>
        );
    }
}
