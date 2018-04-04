import * as ClassNames from 'classnames';
import * as React from 'react';

import HTMLComponent, {HTMLAProps} from '../../base/html/HTML';
import BreadCrumbStyle from './BreadCrumbStyle';

export interface BreadCrumbItemProps extends HTMLAProps {
    isActive?: boolean;
}

const BreadCrumbItem: React.SFC<BreadCrumbItemProps> = (props: BreadCrumbItemProps) => {

    const {isActive, ...breadCrumbItemProps} = props;

    const classNames = ClassNames(
        {
            [`${BreadCrumbStyle.isActive}`]: isActive,
        }
    );

    return (
        <li className={classNames}>
            <a {...breadCrumbItemProps}>
                {props.children}
            </a>
        </li>
    );
};

BreadCrumbItem.propTypes = {
    ...HTMLComponent.propTypes
};

BreadCrumbItem.defaultProps = {
    ...HTMLComponent.defaultProps,
};

BreadCrumbItem.displayName = 'BreadCrumbItem';

export default BreadCrumbItem;
