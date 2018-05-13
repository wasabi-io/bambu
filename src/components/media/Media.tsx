import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as MediaStyle, HTMLComponent, HTMLArticleProps} from '../../';

export type MediaProps = HTMLArticleProps;

const Media: React.SFC<MediaProps> = (props: MediaProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames(
        MediaStyle.media,
        className
    );

    return (
        <article className={classNames} {...inputProps}>
            {props.children}
        </article>
    );
};

Media.propTypes = HTMLComponent.propTypes;

Media.defaultProps = HTMLComponent.defaultProps;

Media.displayName = 'Media';

export default Media;
