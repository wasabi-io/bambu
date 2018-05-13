import * as ClassNames from 'classnames';
import * as React from 'react';
import HTMLComponent, {HTMLElementProps} from '../../base/html/HTML';
import {bulma as ContentStyle, Size, sizeValues} from '../../';
import * as PropTypes from "prop-types";

export interface ContentProps extends HTMLElementProps {
    bSize?: string | Size;
}

const Content: React.SFC<ContentProps> = (props: ContentProps) => {

    const {className, bSize, ...inputProps} = props;

    const classNames = ClassNames(
        ContentStyle.content,
        ContentStyle[bSize],
        className
    );

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

Content.propTypes = {
    ...HTMLComponent.propTypes,
    bSize: PropTypes.oneOf(sizeValues)
};

Content.defaultProps = HTMLComponent.defaultProps;

Content.displayName = 'Content';

export default Content;
