import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as TitleStyle, HTMLComponent, HTMLPProps, Size6, size6Values} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface TitleProps extends HTMLPProps {
    bSize?: string | Size6;
    tagName?: string;
}

const Title: React.SFC<TitleProps> = (props: TitleProps) => {

    const {tagName, bSize, className, ...titleProps} = props;

    const classNames = ClassNames([
        TitleStyle.title,
        TitleStyle[bSize],
        className
    ]);

    (titleProps as any).className = classNames;
    return React.createElement(tagName, titleProps, props.children);
};

Title.propTypes = {
    ...HTMLComponent.propTypes,
    bSize: PropTypes.oneOf(size6Values),
    tagName: PropTypes.string
};

Title.defaultProps = {
    ...HTMLComponent.defaultProps,
    tagName: 'h1'
};

Title.displayName = 'Title';

export default Title;
