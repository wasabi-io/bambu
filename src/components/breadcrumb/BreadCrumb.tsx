import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Objects from 'wasabi-common/lib/types/Objects';
import {Alignment, alignmentValues, bulma as BreadCrumbStyle, HTMLComponent, HTMLElementProps, Size, sizeValues} from '../../';

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
}

const BreadCrumb: React.SFC<BreadCrumbProps> = (props: BreadCrumbProps) => {

    const {alignment, bSize, separator, className, ...breadCrumbProps} = props;

    const classNames = ClassNames(
        BreadCrumbStyle.breadcrumb,
        BreadCrumbStyle[alignment],
        BreadCrumbStyle[separator],
        BreadCrumbStyle[bSize],
        className,
    );

    return (
        <nav className={classNames} {...breadCrumbProps} >
            <ul>
                {props.children}
            </ul>
        </nav>
    );
};

BreadCrumb.propTypes = {
    ...HTMLComponent.propTypes,
    alignment: PropTypes.oneOf(alignmentValues),
    separator: PropTypes.oneOf(Objects.values(BreadCrumbSeperator)),
    bSize: PropTypes.oneOf(sizeValues),
};

BreadCrumb.defaultProps = {
    ...HTMLComponent.defaultProps,
};

BreadCrumb.displayName = 'BreadCrumb';

export default BreadCrumb;
