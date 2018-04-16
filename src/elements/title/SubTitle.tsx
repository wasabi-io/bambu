import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import {Size6, Size6Values} from '../../base/css';
import HTMLComponent, {HTMLPProps} from '../../base/html/HTML';
import TitleStyle from '../../base/css/bulma';

/**
 * Refers Html Props and Additional Props.
 */
export interface SubTitleProps extends HTMLPProps {
    size?: string | Size6;
    tagName?: string;
}

const SubTitle: React.SFC<SubTitleProps> = (props: SubTitleProps) => {

    const {tagName, size, className, ...subTitleProps} = props;

    const classNames = ClassNames(
        TitleStyle.subtitle,
        TitleStyle[size],
        className
    );
    (subTitleProps as any).className = classNames;
    return React.createElement(tagName, subTitleProps, props.children);
};

SubTitle.propTypes = {
    ...HTMLComponent.propTypes,
    size: PropTypes.oneOf(Size6Values),
};

SubTitle.defaultProps = {
    ...HTMLComponent.defaultProps,
    tagName: 'h2'
};

SubTitle.displayName = 'SubTitle';

export default SubTitle;
