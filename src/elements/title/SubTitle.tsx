import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as TitleStyle, HTMLComponent, HTMLPProps, Size6, size6Values} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface SubTitleProps extends HTMLPProps {
    bSize?: string | Size6;
    tagName?: string;
}

const SubTitle: React.SFC<SubTitleProps> = (props: SubTitleProps) => {

    const {tagName, bSize, className, ...subTitleProps} = props;

    const classNames = ClassNames(
        TitleStyle.subtitle,
        TitleStyle[bSize],
        className
    );
    (subTitleProps as any).className = classNames;
    return React.createElement(tagName, subTitleProps, props.children);
};

SubTitle.propTypes = {
    ...HTMLComponent.propTypes,
    bSize: PropTypes.oneOf(size6Values),
    tagName: PropTypes.string
};

SubTitle.defaultProps = {
    ...HTMLComponent.defaultProps,
    tagName: 'h2'
};

SubTitle.displayName = 'SubTitle';

export default SubTitle;
