import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as MediaStyle, HTMLComponent, HTMLDivProps} from '../../';

export type MediaContentProps = HTMLDivProps;

const MediaContent: React.SFC<MediaContentProps> = (props: MediaContentProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        MediaStyle.mediaContent,
        className
    ]);

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

MediaContent.propTypes = HTMLComponent.propTypes;

MediaContent.defaultProps = HTMLComponent.defaultProps;

MediaContent.displayName = 'MediaContent';

export default MediaContent;
