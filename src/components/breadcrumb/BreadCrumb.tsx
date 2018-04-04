import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Objects from 'wasabi-common/lib/types/Objects';

import {Alignment, AlignmentValues, Size, SizeValues} from '../../base/css';
import HTMLComponent, {HTMLElementProps} from '../../base/html/HTML';
import BreadCrumbStyle from './BreadCrumbStyle';

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
    size?: string | Size;
}

const BreadCrumb: React.SFC<BreadCrumbProps> = (props: BreadCrumbProps) => {

    const {alignment, size, separator, className, ...breadCrumbProps} = props;

    const classNames = ClassNames(
        BreadCrumbStyle.breadcrumb,
        BreadCrumbStyle[alignment],
        BreadCrumbStyle[separator],
        BreadCrumbStyle[size],
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
    alignment: PropTypes.oneOf(AlignmentValues),
    separator: PropTypes.oneOf(Objects.values(BreadCrumbSeperator)),
    size: PropTypes.oneOf(SizeValues),
};

BreadCrumb.defaultProps = {
    ...HTMLComponent.defaultProps,
};

BreadCrumb.displayName = 'BreadCrumb';

export default BreadCrumb;
