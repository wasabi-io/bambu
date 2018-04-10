import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import {Size6, Size6Values} from '../../base/css';
import HTMLComponent, {HTMLPProps} from '../../base/html/HTML';
import TitleStyle from '../../bulma';

/**
 * Refers Html Props and Additional Props.
 */
export interface TitleProps extends HTMLPProps {
    size?: string | Size6;
    tagName?: string;
}

const Title: React.SFC<TitleProps> = (props: TitleProps) => {

    const {tagName, size, className, ...titleProps} = props;

    const classNames = ClassNames([
        TitleStyle.title,
        TitleStyle[size],
        className
    ]);

    (titleProps as any).className = classNames;
    return React.createElement(tagName, titleProps, props.children);
};

Title.propTypes = {
    ...HTMLComponent.propTypes,
    size: PropTypes.oneOf(Size6Values),
    tagName: PropTypes.string
};

Title.defaultProps = {
    ...HTMLComponent.defaultProps,
    tagName: 'h1'
};

Title.displayName = 'Title';

export default Title;
