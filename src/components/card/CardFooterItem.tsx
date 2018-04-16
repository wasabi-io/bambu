import * as ClassNames from 'classnames';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import CardStyle from '../../base/css/bulma';

import HTMLComponent, {HTMLElementProps} from '../../base/html/HTML';

export interface CardFooterItemProps extends HTMLElementProps {
    tagName?: string;
}

const CardFooterItem: React.SFC<CardFooterItemProps> = (props: CardFooterItemProps) => {
    const {tagName, children, className, ...cardFooterItemProps} = props;

    const classNames = ClassNames([
        CardStyle.cardFooterItem,
        className
    ]);

    return React.createElement(tagName, {
        className: classNames,
        ...cardFooterItemProps
    }, children);
};

CardFooterItem.propTypes = {
    ...HTMLComponent.propTypes,
    tagName: PropTypes.string,
};

CardFooterItem.defaultProps = {
    ...HTMLComponent.defaultProps,
    tagName: 'span',
};

CardFooterItem.displayName = 'CardFooterItem';

export default CardFooterItem;
