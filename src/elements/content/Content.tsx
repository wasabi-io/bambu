import * as ClassNames from 'classnames';
import * as React from 'react';
import HTMLComponent, {HTMLElementProps} from '../../base/html/HTML';
import {Size} from '../../base/css';
import ContentStyle from '../../base/css/bulma';

export interface ContentProps extends HTMLElementProps {
    size?: string | Size;
}

const Content: React.SFC<ContentProps> = (props: ContentProps) => {

    const {className, size, ...inputProps} = props;

    const classNames = ClassNames(
        ContentStyle.content,
        ContentStyle[size],
        className
    );

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

Content.propTypes = HTMLComponent.propTypes;

Content.defaultProps = HTMLComponent.defaultProps;

Content.displayName = 'Content';

export default Content;
